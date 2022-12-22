package com.stackoverflow.stackoverflow.question.entity;

import com.stackoverflow.stackoverflow.audit.Auditable;

import javax.persistence.*;
import java.util.List;

@Entity
public class Question extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Question_ID")
    private long id;
    private String title;
    private List<Long> answer_id;
    private String user_name;
//    @ManyToOne
//    private List<Answer> answer_id;
//    @OneToMany(mappedBy = "memner")
//    private Member user_name;
}
