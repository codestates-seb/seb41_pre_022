import styled from "styled-components";
import GoogleLogo from "../../static/img/google.svg";
import GitHubLogo from "../../static/img/git.svg";
import FacebookLogo from "../../static/img/facebook.svg";
import { SocialButton } from "./buttons";
import stack from "../../static/img/HeadIcon.svg";

const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 288px;
  margin: 24px 0 16px;

  img {
    width: 25px;
    height: 25px;
    margin-right: 5px;
  }
  .Face {
    width: 18px;
    height: 18px;
  }
  .stackDiv {
    height: 60px;
    justify-content: center;
    display: flex;
  }
`;

const SocialLogin = () => {
  return (
    <SocialContainer className="social-container">
      <div className="stackDiv">
        <img src={stack} alt="stack" />
      </div>
      <SocialButton
        bgColor="#fff"
        hvColor="hsl(210, 8%, 95%)"
        border="rgb(214,217,220)"
      >
        <img className="Google" src={GoogleLogo} alt="gogglelogo" />
        Log in with Google
      </SocialButton>

      <SocialButton bgColor="hsl(210, 8%, 20%)" color="#fff">
        <img src={GitHubLogo} alt="githublogo" />
        Log in with GitHub
      </SocialButton>

      <SocialButton
        bgColor="#385499"
        color="#fff"
        hvColor="hsl(209, 100%, 26%)"
      >
        <img className="Face" src={FacebookLogo} alt="facebooklogo" />
        Log in with Facebook
      </SocialButton>
    </SocialContainer>
  );
};

export default SocialLogin;
