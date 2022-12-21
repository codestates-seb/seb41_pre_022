package com.stackoverflow.stackoverflow.Member.mapper;

import com.stackoverflow.stackoverflow.Member.dto.MemberDto;
import com.stackoverflow.stackoverflow.Member.entity.Member;
import org.mapstruct.Mapper;

import java.util.List;
@Mapper(componentModel = "spring")
public interface MemberMapper {
    Member memberPostToMember(MemberDto.Post requestBody);
    Member memberPatchToMember(MemberDto.Patch requestBody);
    MemberDto.response memberToMemberResponse(Member member);
    List<MemberDto.response> membersToMemberResponses(List<Member> members);
}
