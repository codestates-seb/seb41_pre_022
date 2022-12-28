package com.stackoverflow.stackoverflow.Member.service;

import com.stackoverflow.stackoverflow.Member.entity.Member;
import com.stackoverflow.stackoverflow.Member.repository.MemberRepository;
import com.stackoverflow.stackoverflow.global.exception.BusinessLogicException;
import com.stackoverflow.stackoverflow.global.exception.ExceptionCode;
import com.stackoverflow.stackoverflow.security.CustomAuthorityUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.Optional;

@Transactional
@RequiredArgsConstructor
@Service
public class MemberService {
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;

    public Member createMember(Member member) {
        String email = member.getEmail();
        String password = member.getPassword();

        verifyExistsEmail(email);
        String encryptedPassword = passwordEncoder.encode(password);    //비밀번호 해싱
        member.setPassword(encryptedPassword);

        List<String> roles = authorityUtils.createdRoles(email);    //유저 권한 부여
        member.setRoles(roles);

        Member savedMember = memberRepository.save(member);
        return savedMember;
    }

    @Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.SERIALIZABLE)
    public Member updateMember(Member member) {
        Member findMember = findVerifiedMember(member.getMemberid());

        Optional.ofNullable(member.getPassword())
                .ifPresent(password -> findMember.setPassword(passwordEncoder.encode(password)));

        return memberRepository.save(findMember);
    }

    @Transactional(readOnly = true)
    public Member findMember(long memberid) {
        return findVerifiedMember(memberid);
    }

    public Page<Member> findMembers(int page, int size) {
        return memberRepository.findAll(PageRequest.of(page, size,
                Sort.by("memberid").ascending()));
    }

    public void deleteMember(long memberid) {
        Member findMember = findVerifiedMember(memberid);

        memberRepository.delete(findMember);
    }

    @Transactional(readOnly = true)
    public Member findVerifiedMember(long memberid) {
        Optional<Member> optionalMember =
                memberRepository.findById(memberid);

        Member findmember =
                optionalMember.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

        return findmember;
    }

    private void verifyExistsEmail(String email) {
        Optional<Member> member = memberRepository.findByEmail(email);

        if (member.isPresent())
            throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
    }
}