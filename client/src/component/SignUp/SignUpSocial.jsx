import styled from "styled-components";
import { SocialButton } from "../Login/buttons";
import GoogleLogo from "../../static/img/google.svg";
import GitHubLogo from "../../static/img/git.svg";
import FacebookLogo from "../../static/img/facebook.svg";

const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 316px;
  height: 137px;
  margin: 20px 44.56px 16px 0;

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

function SignUpSocial() {
  return (
    <SocialContainer>
      <SocialButton
        bgColor="#fff"
        hvColor="hsl(210, 8%, 95%)"
        border="rgb(214,217,220)"
      >
        <img className="Google" src={GoogleLogo} alt="gogglelogo" />
        Sign up with Google
      </SocialButton>

      <SocialButton bgColor="hsl(210, 8%, 20%)" color="#fff">
        <img src={GitHubLogo} alt="githublogo" />
        Sign up with GitHub
      </SocialButton>

      <SocialButton
        bgColor="#385499"
        color="#fff"
        hvColor="hsl(209, 100%, 26%)"
      >
        <img className="Face" src={FacebookLogo} alt="facebooklogo" />
        Sign up with Facebook
      </SocialButton>
    </SocialContainer>
  );
}

export default SignUpSocial;
