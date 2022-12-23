// import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Dummy, AnswerDummy } from "../static/DummyDate/DummyDate";
import { BsFilePersonFill } from "react-icons/bs";
import SideBar from "../component/Main/SideBar";
import AnswerList from "../component/Answer/AnswerList";
import UpDownButton from "../component/Answer/UpDownButton";
const Container = styled.div`
  width: calc(100% - 164px);
`;
export const QuestionTitle = styled.div`
  height: 100px;
  font-size: 36px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  li {
    margin-left: 18px;
    font-size: 15px;
  }
`;
export const AskButton = styled.button`
  background-color: hsl(206, 100%, 52%);
  color: #fff;
  border: 1px solid hsl(206, 100%, 40%);
  width: 100px;
  height: 50px;
  margin-right: 28px;
  border-radius: 5px;
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
  font-size: 13px;
  cursor: pointer;
  &:hover {
    background-color: hsl(209, 100%, 37.5%);
  }
`;
export const QuestionBody = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  span {
    margin-left: 15px;
    padding: 5px;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    font-weight: 500;
  }
`;
const BodyContainer = styled.div`
  display: flex;
`;
const MainBar = styled.div`
  display: flex;
  width: 75%;
  height: 8703px;
  margin-left: 30px;
  flex-direction: column;
  .qestion-section {
    display: flex;
  }
`;
const HrLine = styled.hr`
  width: 95%;
  height: 1px;
  background-color: black;
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
`;

const LanguageButton = styled.button`
  width: 40px;
  height: 33px;
  background-color: hsl(206, 96%, 90%);
  border: 1px solid hsl(206, 96%, 90%);
  border-radius: 3px;
  font-size: 12px;
  color: hsl(206, 85%, 57.5%);
  cursor: pointer;
  &:hover {
    background-color: hsl(206, 93%, 83.5%);
  }
`;
const QuestionDiv = styled.div`
  margin: 30px 0 0 25px;
  width: 97%;
  > ul > li {
    word-break: break-all;
    margin-bottom: 60px;
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

function Question() {
  // const [upDown, setUpDown] = useState(0);

  // useEffect (() => {
  //   QuestionDate()
  // },[] )

  // const QuestionDate = () => {
  //   let now = new Date();
  //   let nowMonth = now.getMonth();
  //   let nowDate = now.getDate()
  //   let Date = `${nowMonth ,nowDate}`

  // }

  return (
    <Container>
      <div>
        <QuestionTitle>
          <ul>
            {Dummy.data.map((data) => (
              <li key={data.id}>{data.title}</li>
            ))}
          </ul>
          <AskButton>Ask Question</AskButton>
        </QuestionTitle>
      </div>
      <div>
        <QuestionBody>
          <span>Asked {`1days`}</span>&nbsp;
          <span>Modified {"1days"}</span>
          <span>View {"1times"}</span>
        </QuestionBody>
      </div>
      <HrLine />
      <BodyContainer>
        <MainBar>
          <div className="qestion-section">
            <UpDownButton />
            <QuestionDiv>
              <ul>
                {Dummy.data.map((data) => (
                  <li key={data.id}>
                    {data.content}{" "}
                    <li className="liName" key={data.id}>
                      <span>
                        asked <br />
                        <BsFilePersonFill
                          size="38px"
                          color="hsl(210, 8%, 45%)"
                        />
                        <a href="?">{data.name}</a>
                      </span>
                    </li>
                  </li>
                ))}

                <LanguageButton>react</LanguageButton>
              </ul>
            </QuestionDiv>
          </div>
          <AnswerList AnswerDummy={AnswerDummy} />
        </MainBar>
        <SideBar />
      </BodyContainer>
    </Container>
  );
}

export default Question;
