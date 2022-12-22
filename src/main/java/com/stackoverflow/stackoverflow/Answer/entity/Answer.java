package com.stackoverflow.stackoverflow.Answer.entity;

import com.stackoverflow.stackoverflow.Member.entity.Member;
import com.stackoverflow.stackoverflow.audit.Auditable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

/* TODO Question import 필요*/
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class Answer extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long answerId;

    @Column(length = 1000, nullable = false)
    private String answerBody;

    //매핑 필요

    /*@ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;*/

    /*@ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;



    public void createAnswer(Member member, Question question){
        this.member = member;
        this.question = question;
    }*/
}
