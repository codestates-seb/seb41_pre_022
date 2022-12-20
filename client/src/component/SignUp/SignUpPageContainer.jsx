import React from "react";
import styled from "styled-components";
import SignUpSocial from "./SignUpSocial";
import { FaQuestionCircle } from "react-icons/fa";

//SignUpPage 전체 화면
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  a {
    color: #007acc;
  }
  a:active {
    color: #007acc;
  }
`;
//좌측 텍스트컨테이너
const TextContainer = styled.div`
  width: 410px;
  height: 285px;
  text-align: left;
  margin: 0 48px 128px 0;
  h1 {
    width: 410px;
    font-size: 25.5px;
    margin-bottom: 32px;
    line-height: 1;
    font-weight: 400;
  }
  .leftText {
    display: flex;
    margin-bottom: 24px;
    font-size: 15px;
    span {
      margin-left: 7px;
      margin-top: 4px;
    }
  }
  .greyColor {
    color: hsl(210, 8%, 45%);
    font-size: 13px;
  }
`;
//우측 버튼/인풋 포함 컨테이너
const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: space-evenly;
  width: 316px;
  .rightsideFooter {
    text-align: center;
    font-size: 13px;
    line-height: 17px;
    padding: 16px;
    margin-bottom: 24px;
    font-weight: 350;
    font-family: -apple-system, "system-ui", "Sehoe UI Adjusted", "Segoe UI",
      "Liberation Sans", sans-serif;
  }
  div {
    margin-top: 6px;
  }
`;
//Input부터 Policy까지 컨테이너
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 316px;
  height: 660px;
  border-radius: 5px;
  padding: 24px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 24px 0px,
    rgba(0, 0, 0, 0.05) 0px 20px 48px 0px, rgba(0, 0, 0, 0.05) 0px 10px 24px 0px;
  background-color: white;

  .inputLabel {
    text-align: left;
    margin: 6px 2px 6px 0;

    label {
      cursor: pointer;
      margin: 2px 0px;
      padding: 0px 2px;
      font-size: 15px;
      font-weight: 600;
      font-family: -apple-system, "system-ui", "Sehoe UI Adjusted", "Segoe UI",
        "Liberation Sans", sans-serif;
    }
  }
  input {
    width: 268px;
    height: 32.26px;
    padding: 7.8px 9.1px;
    border: rgb(186, 191, 196) solid 1.1111px;
    border-radius: 3px;
    margin-top: 3px;
    font-size: 13px;
    font-family: -apple-system, "system-ui", "Sehoe UI Adjusted", "Segoe UI",
      "Liberation Sans", sans-serif;
  }
  .passwordComment {
    color: hsl(210, 8%, 45%);
    display: flex;
    flex-direction: column;
    text-align: left;
    line-height: 15.7px;
    font-size: 12px;
    font-weight: 400;
    margin: 4px 0px;
    font-family: -apple-system, "system-ui", "Sehoe UI Adjusted", "Segoe UI",
      "Liberation Sans", sans-serif;
  }
  .notrobotContainer {
    background-color: rgb(241, 242, 243);
    border: 1px solid rgb(214, 217, 220);
    width: 268px;
    height: 156px;
    padding: 6px 0 2px 0;
    margin: 6px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      border: 1px solid rgb(214, 217, 220);
      width: 156;
      height: 136;
      box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 4px 1px;
      /* margin: auto; */
    }
  }
  .checkboxContainer {
    display: flex;
    font-size: 12px;
    line-height: 15.7px;
    text-align: left;
    font-weight: 400;
    margin-bottom: 7px;
  }
  .checkboxContainer > #checkbox {
    cursor: pointer;
    border: rgba(186, 191, 196, 0.2) solid 1.1111px;
    border-radius: 20px;
    width: 15px;
    height: 12px;
    margin-top: 7px;
  }
  .checkboxContainer > button {
    width: 15px;
    height: 15px;
    margin-top: 5px;
  }
  .checkboxText > label {
    cursor: pointer;
    margin-left: 2px;

    border: rgb(214, 217, 220);
    font-family: -apple-system, "system-ui", "Sehoe UI Adjusted", "Segoe UI",
      "Liberation Sans", sans-serif;
  }
  .blueButton {
    cursor: pointer;
    width: 268px;
    height: 38px;
    padding: 10.4px;
    margin: 2px 0;
    background-color: #0a95ff;
    color: white;
    border-radius: 3px;
    border: none;
    border: rgba(0, 0, 0, 0) solid 1.111px;
    box-shadow: rgba(255, 255, 255, 0.4) 0px 1px 0px 0px inset;
  }
  .policy {
    font-size: 12px;
    width: 268px;
    height: 31.35px;
    margin-top: 32px;
    color: #6a737c;
    text-align: left;
    line-height: 15.7px;
    font-family: -apple-system, "system-ui", "Sehoe UI Adjusted", "Segoe UI",
      "Liberation Sans", sans-serif;
  }
`;

function SignUpPageContainer() {
  return (
    <Container>
      <TextContainer>
        <h1>Join the Stack Overflow community</h1>
        <div className="leftText">
          <img
            width="22"
            alt="signUp1"
            src="https://user-images.githubusercontent.com/110904866/208423983-8114ca89-8369-4882-98f6-f39de09cb009.png"
          />
          <span>Get unstuck - ask a question</span>
        </div>
        <div className="leftText">
          <img
            width="24"
            alt="signUp2"
            src="https://user-images.githubusercontent.com/110904866/208424246-eecb5b3f-4a67-4c7a-ad75-ac959a47bdd4.png"
          ></img>
          <span>Unlock new privileges like voting and commenting</span>
        </div>
        <div className="leftText">
          <img
            width="22"
            alt="signUp3"
            src="https://user-images.githubusercontent.com/110904866/208425134-7a814756-a674-4992-9f0d-333029f89380.png"
          />
          <span>Save your favorite tags, filters, and jobs</span>
        </div>
        <div className="leftText">
          <img
            width="24"
            alt="signUp4"
            src="https://user-images.githubusercontent.com/110904866/208425163-837510a0-46b2-405e-903d-e0fbac67dee7.png"
          />
          <span>Earn reputation and badges</span>
        </div>
        <div className="greyColor">
          Collaborate and share knowledge with a private group for FREE.
          <br />
          <a
            href="https://stackoverflow.co/teams/?utm_source=so-owned&utm_medium=product&utm_campaign=free-50&utm_content=public-sign-up"
            rel="noreferrer"
            target="_blank"
          >
            Get Stack Overflow for Teams free for up to 50 users.
          </a>
        </div>
      </TextContainer>
      <ContentsContainer>
        <SignUpSocial />
        <FormContainer>
          <div className="inputLabel">
            <label for="displayName">Display name</label>
            <input id="displayName" />
          </div>
          <div className="inputLabel">
            <label for="email">Email</label>
            <input id="email" />
          </div>
          <div className="inputLabel">
            <label for="password">Password</label>
            <input id="password" type="password" minLength="8" required />
          </div>

          <div className="passwordComment">
            Passwords must contain at least eight characters, including at least
            1 letter and 1 number.
          </div>
          <div className="notrobotContainer">
            <img
              alt="im not a robot"
              src="https://user-images.githubusercontent.com/110904866/208684791-1b5706d2-80f6-49d8-900f-6eb3e321e0af.png"
            ></img>
          </div>
          <div className="checkboxContainer">
            <input id="checkbox" type="checkbox" />
            <div className="checkboxText">
              <label for="checkbox">
                Opt-in to receive occasional product updates, user research
                invitations, company announcements, and digests.
              </label>
            </div>
            <FaQuestionCircle size="30" color="rgb(106,115,124)" />
          </div>
          <button className="blueButton">Sign up</button>
          <div className="policy">
            By clicking “Sign up”, you agree to our{" "}
            <a
              href="https://stackoverflow.com/legal/terms-of-service/public"
              target="_blank"
              rel="noreferrer"
            >
              terms of service, privacy policy
            </a>{" "}
            and{" "}
            <a
              href="https://stackoverflow.com/legal/cookie-policy"
              target="_blank"
              rel="noreferrer"
            >
              cookie policy
            </a>
          </div>
        </FormContainer>
        <div className="rightsideFooter">
          <div>
            Already have an account?
            <a href="https://stackoverflow.com/users/login?ssrc=head&returnurl=https%3a%2f%2fstackoverflow.com%2f">
              {" "}
              Log in
            </a>
          </div>
          <div>
            Are you an employer?
            <a href="https://stackoverflow.com/users/login?ssrc=head&returnurl=https%3a%2f%2fstackoverflow.com%2f">
              {" "}
              Sign up on Talent{" "}
              <svg
                aria-hidden="true"
                class="va-text-bottom sm:d-none svg-icon iconShareSm"
                width="14"
                height="14"
                viewBox="0 0 14 14"
              >
                <path d="M5 1H3a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V9h-2v2H3V3h2V1Zm2 0h6v6h-2V4.5L6.5 9 5 7.5 9.5 3H7V1Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </ContentsContainer>
    </Container>
  );
}

export default SignUpPageContainer;
