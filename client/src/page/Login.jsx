import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import SocialLogin from '../component/Login/SocialLogin';

const LoginPage = styled.section`
  width: 100%;
  height: 100vh;
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(210, 8%, 95%);
  
  .login-nav {
      width: 100%;
      max-width: 288px;
      padding: 24px 0;
      margin-bottom: 24px;
      font-size: 13px;
      text-align: center;
      > a {
        margin-left: 5px;
        color: hsl(206, 100%, 40%);
      }
    }
`;

const LoginDiv = styled.div`
  width: 280px;
  height: 240px;
  flex-direction: column;
  border-radius: 10px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 18px -7px rgba(0,0,0,1);
  margin-bottom: 50px;
  label {
    float: left;
    margin-bottom: 10px;
    font-weight: bold
  }
  div {
    margin-bottom: 13px;
  }

`
const LoginInput = styled.input`
  width: 210px;
  height: 30px;
`
const LoginButton = styled.button`
  width: 210px;
  height: 40px;
  margin-top: 13px;
  background-color: hsl(206, 100%, 52%);
  border: 1px solid hsl(206, 100%, 40%);
  color: white;
  cursor: pointer;
  &:hover {
    background-color: hsl(209, 100%, 37.5%);
  }
`

function Login({isLogin}) {
  //이미 로그인 상태일 경우 홈으로 리다이렉트하는 Hook
  useEffect(() => {
    if (isLogin) {
      window.location.replace('/');
    }
  }, [isLogin])
  
  const [inputInfo, setInputInfo] = useState({
    email : "",
    password : ""
  })

  const onEmailHandler = (event) => {
    setInputInfo({
      ...inputInfo,
      email: event.target.value
    })
  }

  const onPWHandler = (event) => {
    setInputInfo({
      ...inputInfo,
      password: event.target.value
    })
  }

  const onLoginHandler = () => {
    //login 버튼을 누름에 따라 로그인이 되어야합니다. 
    //유저가 input에 입력한 정보는 inputInfo라는 state에 저장됩니다.
    //login() 함수를 이용하여 로그인 시 창, 로그인 실패시 동작을 구현하세요.
  }

  return (
    <LoginPage>
      <div className="login-container">
        <div className="login-logo">
          <SocialLogin />
         <LoginDiv>
          <div>
          <label>Email</label>
          <br />
          <LoginInput type="text" value={inputInfo.email} onChange={onEmailHandler}/>
          </div>
          <div>
          <label>PassWord</label>
          <br />
          <LoginInput type="password" value={inputInfo.password} onChange={onPWHandler} />
          </div>
          <LoginButton onClick={onLoginHandler}>Log in</LoginButton>
         </LoginDiv>
        

          <div className="login-nav">
           {`Don't have an account?`}
           {/* <Link to="/signup">Sign up</Link> */}
           sign up
        </div>
         
        </div>
      </div>
    </LoginPage>
  )
}

export default Login