<<<<<<< HEAD
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { data } from '../static/dummyData/dummyData'
import { BsFilePersonFill } from "react-icons/bs";
import { useParams } from 'react-router-dom';
=======
// import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Dummy, AnswerDummy } from "../static/DummyDate/DummyDate";
import { BsFilePersonFill } from "react-icons/bs";
import SideBar from "../component/Main/SideBar";
import AnswerList from "../component/Answer/AnswerList";
import UpDownButton from "../component/Answer/UpDownButton";
import WriteAnswer from "../component/Answer/WriteAnswer";
>>>>>>> 9ccb649ddb23174c43210fb7b6c39a0fd3429a32

const Container = styled.div`
  width: 80%;
  height: 100%;
`;
export const QuestionTitle = styled.div`
  height: 100px;
  font-size: 36px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  li {
    margin-left: 33px;
    font-size: 15px;
  }
`;
export const AskButton = styled.button`
  background-color: hsl(206, 100%, 52%);
  color: #fff;
  border: 1px solid hsl(206, 100%, 40%);
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-right: 28px;
  border-radius: 5px;
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
  font-size: 13px;
  margin-bottom: ${(props) => props.bottom};
  margin-top: ${(props) => props.top};
  cursor: pointer;
  &:hover {
    background-color: hsl(209, 100%, 37.5%);
  }
`;
export const QuestionBody = styled.div`
  margin-left: 13px;
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
  width: 100%;
  height: 100%;
  margin-left: 30px;
  flex-direction: column;
  .qestion-section {
    display: flex;
  }
`;
export const HrLine = styled.hr`
  width: ${(props) => props.width};
  height: 1px;
  background-color: black;
  margin-top: 25px;
  margin-left: auto;
  margin-bottom: ${(props) => props.top};
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
<<<<<<< HEAD
  const [upDown, setUpDown] = useState(0);
  const params = useParams()
  useEffect (() => {
    console.log(params);
    //questionId를 query로 하는 qetQuestion 함수를 작성해야합니다.
  }, [])
=======
  // const [upDown, setUpDown] = useState(0);

  // useEffect (() => {
  //   QuestionDate()
  // },[] )
>>>>>>> 9ccb649ddb23174c43210fb7b6c39a0fd3429a32

  // const QuestionDate = () => {
  //   let now = new Date();
  //   let nowMonth = now.getMonth();
  //   let nowDate = now.getDate()
  //   let Date = `${nowMonth ,nowDate}`

  // }

  return (
<<<<<<< HEAD
    <div> 
      <div>
        <QuestionTitle>
          <ul>
            <li key={data.id}>{data.title}</li>
          </ul>
        <AskButton>Ask Question</AskButton>
        </QuestionTitle>
      </div>
=======
    <Container>
      <QuestionTitle>
        <ul>
          {Dummy.data.map((data) => (
            <li key={data.id}>{data.title}</li>
          ))}
        </ul>
        <AskButton width="120px" height="50px">
          Ask Question
        </AskButton>
      </QuestionTitle>
>>>>>>> 9ccb649ddb23174c43210fb7b6c39a0fd3429a32
      <div>
        <QuestionBody>
          <span>Asked {`1days`}</span>&nbsp;
          <span>Modified {"1days"}</span>
          <span>View {"1times"}</span>
        </QuestionBody>
      </div>
      <HrLine width="98%" />
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

<<<<<<< HEAD
        <Menu>
           <MenuButton onClick={() => setUpDown(upDown +1)}><UpButton /></MenuButton> 
           <MenuItem>{upDown}</MenuItem>
           <MenuButton onClick={() => setUpDown(upDown - 1)}><DownButton /></MenuButton> 
        </Menu>
        <QuestionDiv>
          <ul>
            {
              <div key={data.id}>{data.content} <li className="liName"key={data.id}>
                <span>asked  <br/>
                  <BsFilePersonFill size="38px" color='hsl(210, 8%, 45%)'/>
                 <a href='?'>{data.name}</a>
                </span>
                 </li>
              </div>
              }
          
              <LanguageButton>react</LanguageButton>
          </ul> 
        </QuestionDiv>
      </QuestionBar>
    </div>
  )
=======
                <LanguageButton>react</LanguageButton>
              </ul>
            </QuestionDiv>
          </div>
          <AnswerList AnswerDummy={AnswerDummy} />
          <WriteAnswer />
        </MainBar>
        <SideBar />
      </BodyContainer>
    </Container>
  );
>>>>>>> 9ccb649ddb23174c43210fb7b6c39a0fd3429a32
}

export default Question;
