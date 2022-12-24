import React from "react";
import styled from "styled-components";
import { BsFilePersonFill } from "react-icons/bs";
const Container = styled.li`
  display: flex;
`;
const AnswerBody = styled.div`
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
    background-color: hsl(206, 96%, 90%);
    border: 2px solid hsl(206, 96%, 90%);
    float: right;
    margin-right: 27px;
    display: flex;
    span {
      font-size: 12px;
      margin-top: 5px;
      margin-left: 8px;
      color: hsl(210, 8%, 60%);
      align-items: center;
    }
    a {
      text-align: center;
    }
  }
`;
function Answer({ AnswerDummy }) {
  return (
    <Container>
      <AnswerBody>
        <div className="text" key={AnswerDummy.id}>
          {AnswerDummy.content}{" "}
        </div>
        <div className="liName" key={AnswerDummy.id}>
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
