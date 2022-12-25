package com.stackoverflow.stackoverflow.Question.entity;

//import com.stackoverflow.stackoverflow.feature.Answer.entity.Answer;
//import com.stackoverflow.stackoverflow.feature.Member.entity.Member;
import com.stackoverflow.stackoverflow.Answer.entity.Answer;
import com.stackoverflow.stackoverflow.Member.entity.Member;
import com.stackoverflow.stackoverflow.audit.Auditable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Question extends Auditable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "QUESTION_ID")
    private long questionId;
    @Column(length = 50, nullable = false)
    private String questionTitle;
    @Column(length = 1000, nullable = false)
    private String questionBody;
    @OneToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member memberId;
}
