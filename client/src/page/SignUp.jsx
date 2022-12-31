import React, {useEffect} from "react";
import SignUpPageContainer from "../component/SignUp/SignUpPageContainer";
import styled from "styled-components";

const Body = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f2f3;
`;
function SignUp({isLogin}) {
  //로그인 정보가 있을 시 홈으로 바로 리다이렉션 시켜주어여합니다.
  useEffect(() => {
    if (isLogin) {
      window.location.replace('/');
    }
  })
  
  return (
    <Body>
      <SignUpPageContainer />
    </Body>
  );
}

export default SignUp;
