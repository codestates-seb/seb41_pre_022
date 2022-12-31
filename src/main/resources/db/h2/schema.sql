CREATE TABLE IF NOT EXISTS MEMBER(
    MEMBERID BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    NAME VARCHAR(25) NOT NULL,
    EMAIL VARCHAR(50) NOT NULL UNIQUE,
    PASSWORD VARCHAR(25) NOT NULL,
    CREATED_AT DATETIME NOT NULL,
    LAST_MODIFIED_AT DATETIME NOT NULL
);

CREATE TABLE IF NOT EXISTS QUESTION(
     QUESTION_ID BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
     QUESTION_TITLE VARCHAR(50) NOT NULL,
     QUESTION_BODY VARCHAR(100) NOT NULL,
     USER_ID BIGINT NOT NULL,
     CREATED_AT DATETIME NOT NULL,
     LAST_MODIFIED_AT DATETIME NOT NULL,
     FOREIGN KEY (USER_ID) REFERENCES MEMBER(MEMBER_ID)
);

CREATE TABLE IF NOT EXISTS ANSWER(
    ANSWER_ID BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    ANSWER_BODY VARCHAR(1000) NOT NULL,
    QUESTION_ID BIGINT NOT NULL,
    MEMBER_ID BIGINT NOT NULL,
    CREATED_AT DATETIME NOT NULL,
    LAST_MODIFIED_AT DATETIME NOT NULL,
    FOREIGN KEY (QUESTION_ID) REFERENCES QUESTION(QUESTION_ID),
    FOREIGN KEY (MEMBER_ID) REFERENCES MEMBER(MEMBER_ID)
);

