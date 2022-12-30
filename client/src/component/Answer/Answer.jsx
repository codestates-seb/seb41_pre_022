import React from "react";
import styled from "styled-components";
import { BsFilePersonFill } from "react-icons/bs";
const Container = styled.li`
  display: flex;
  width: 100%;
`;
const AnswerBody = styled.div`
  width: 100%;
  padding-top: 28px;
  margin-left: 24px;
  font-size: 1;
  .text {
    width: 97%;
  }
  > ul > li {
    word-break: break-all;
  }
  .liName {
    margin-top: 60px;
    width: 180px;
    height: 70px;
    border-radius: 5px;
    color: #6a737c;
    float: right;
    margin-right: 27px;
    display: flex;
    span {
      font-size: 12px;
      margin-top: 6px;
      margin-left: 8px;
      color: hsl(210, 8%, 60%);
      align-items: center;
    }
    a {
      text-align: center;
      color: #0074cc;
    }
  }
`;
function Answer({ AnswerDummy, userInfo }) {
  //상위에서 userInfo를 받아 이 답변이 나의 답변이라면 내가 삭제할 수 있어야합니다. (구현 안해도 상관없긴해요)
  return (
    <Container>
      <AnswerBody>
        <div className="text" key={AnswerDummy.id}>
          {AnswerDummy.content}{" "}
        </div>
        <div className="liName">
          <span>
            answerd <br />{" "}
            <BsFilePersonFill size="38px" color="hsl(210, 8%, 45%)" />
            <a href="?">{AnswerDummy.name}</a>
          </span>
        </div>
      </AnswerBody>
    </Container>
  );
}

export default Answer;
