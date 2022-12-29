import React from "react";
import styled from "styled-components";
import stackoverflowBottom from "../static/img/stackoverflowBottom.png";
function Footer() {
  return (
    <FooterArea>
      <img src={stackoverflowBottom}></img>
      <div className="container">
        <Title>STACK OVERFLOW</Title>
        <Content>Questions</Content>
        <Content>Help</Content>
      </div>
      <div className="container">
        <Title>PRODUCTS</Title>
        <Content>Teams</Content>
        <Content>Advertising</Content>
        <Content>Collectives</Content>
        <Content>Talent</Content>
      </div>
      <div className="container">
        <Title>COMPANY</Title>
        <Content>About</Content>
        <Content>Press</Content>
        <Content>Work Here</Content>
        <Content>Legal</Content>
        <Content>Privacy Policy</Content>
        <Content>Terms of Service</Content>
        <Content>Contact Us</Content>
        <Content>Cookie Settings</Content>
        <Content>Cookie Policy</Content>
      </div>
      <div className="container">
        <Title>STACK EXCHANGE NETWORK</Title>
        <Content>Technology</Content>
        <Content>Culture & recreation</Content>
        <Content>Life & arts</Content>
        <Content>Science</Content>
        <Content>Professional</Content>
        <Content>Business</Content> <br />
        <Content>API</Content>
        <Content>Date</Content>
      </div>
      <div className="container right">
        <div className="link">
          <div>Blog</div>
          <div>Facebook</div>
          <div>Twitter</div>
          <div>Linkdin</div>
          <div>Instagram</div>
        </div>
        <div className="inc">
          Site design / logo © 2022 Stack Exchange Inc; user contributions
          licensed under CC BY-SA. rev 2022.12.21.43127
        </div>
      </div>
    </FooterArea>
  );
}
const FooterArea = styled.div`
  padding: 20px 90px;
  width: 100vw;
  height: 100%;
  background-color: #232629;
  display: flex;
  justify-content: space-between;
  img {
    width: 40px;
    height: 47px;
  }
  .container {
    padding-right: 24px;
    margin-top: 10px;
  }
  .right {
    width: 313px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .inc {
    color: #9199a1;
    font-size: 11px;
  }
  .link {
    display: flex;
    flex-direction: row;
    color: #9199a1;
    font-size: 11px;
    > div {
      padding: 4px 6px;
      :hover {
        cursor: pointer;
        color: #b2bcc6;
      }
    }
  }
`;
const Title = styled.div`
  color: #babfc4;
  font-size: 13px;
  margin-bottom: 24px;
`;
const Content = styled.div`
  color: #9199a1;
  font-size: 13px;
  margin-bottom: 7px;
  :hover {
    cursor: pointer;
    color: #b2bcc6;
  }
`;
export default Footer;
