import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Dummy } from '../static/DummyDate/DummyDate'
import { BsFilePersonFill } from "react-icons/bs";

export const QuestionTitle = styled.div`
  width: 100%;
  height: 100px;

  font-size: 36px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  
  li{
    margin-left: 18px;
  }
`
export const AskButton = styled.button`
  background-color: hsl(206, 100%, 52%);
  color: #fff;
  border:1px solid hsl(206, 100%, 40%);
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
` 
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
`
const HrLine = styled.hr`
  width: 95%;
  height: 1px;
  background-color: black;
  margin-top: 15px;
  margin-left : auto;
  margin-right : auto;
`
const Menu = styled.div`
  width: 50px;
  height: 100%;
  margin-left: 30px;
  
`
const QuestionBar = styled.div`
  display: flex;
  
`
const MenuButton = styled.button`
  border: 0;
  background: none;
  font-size: 2rem;
  color: #888;
  text-align: center;
  padding: 0;
  cursor: pointer;
`
const MenuItem = styled.div`
  text-align: center;
  width: 40px;
  padding: 5px 0 7px;
  font-size: 1.4rem;
  line-height: 1.4rem;
  color: #888;
 margin-top: 15px;
 margin-bottom: 15px;

` 
const DownButton = styled.div`
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 20px solid #bbb;
  
  
`
const UpButton = styled.div`
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 20px solid #bbb;
  margin-top: 30px;
`
const LanguageButton = styled.button`
  width: 40px;
  height: 33px;
  background-color: hsl(206, 96%, 90%);
  border: 1px solid hsl(206, 96%, 90%);
  border-radius: 3px;
  font-size: 12px;
  color:hsl(206, 85%, 57.5%);
  cursor: pointer;
  &:hover {
    background-color: hsl(206, 93%, 83.5%);
  }
`
const QuestionDiv = styled.div`
  margin: 30px 0 0 25px;
  width: 100%;
  height: 100%;
  
  .liName {
    width:180px;
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
      align-items:center ;
     
    }
    a{
      text-align: center;
    }
}
`

function Question() {
  const [upDown, setUpDown] = useState(0)
  
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
    <div> 
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
        <span>Modified {'1days'}</span>
        <span>View {'1times'}</span>
        </QuestionBody>
      </div>
      <HrLine />
      <QuestionBar>

        <Menu>
           <MenuButton onClick={() => setUpDown(upDown +1)}><UpButton /></MenuButton> 
           <MenuItem>{upDown}</MenuItem>
           <MenuButton onClick={() => setUpDown(upDown - 1)}><DownButton /></MenuButton> 
        </Menu>
        <QuestionDiv>
          <ul>
              
            {Dummy.data.map((data) => (
              <li key={data.id}>{data.content} <li className="liName"key={data.id}>
                <span>asked  <br/>
                  <BsFilePersonFill size="38px" color='hsl(210, 8%, 45%)'/>
                 <a href='?'>{data.name}</a>
                </span>
                 </li></li>
             
              ))}
          
              <LanguageButton>react</LanguageButton>
          </ul> 
        </QuestionDiv>
      </QuestionBar>
      
      
    </div>
  )
}

export default Question