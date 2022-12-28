package com.stackoverflow.stackoverflow.Member.entity;

import com.stackoverflow.stackoverflow.Answer.entity.Answer;
import com.stackoverflow.stackoverflow.Question.entity.Question;
import com.stackoverflow.stackoverflow.audit.Auditable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
@AllArgsConstructor
public class Member extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long memberid;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    @OneToMany(mappedBy="member")
    private List<Question> questions = new ArrayList<>();

    @OneToMany(mappedBy="member")
    private List<Answer> answers = new ArrayList<>();
}