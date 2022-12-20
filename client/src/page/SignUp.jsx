import React from "react";
import SignUpPageContainer from "../component/SignUp/SignUpPageContainer";
import styled from "styled-components";

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f2f3;
`;
function SignUp() {
  return (
    <Body>
      <SignUpPageContainer />
    </Body>
  );
}

export default SignUp;
