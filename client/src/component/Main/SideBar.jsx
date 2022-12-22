import styled from "styled-components";
import { HiPencil } from "react-icons/hi";
import { FaStackOverflow } from "react-icons/fa";
import SidebarIcon from "../../static/img/SidebarIcon.png";
import SidebarIcon2 from "../../static/img/SidebarIcon2.png";
import SidebarIcon3 from "../../static/img/SidebarIcon3.png";
const Container = styled.div`
  width: 300px;
  margin: 24px 0 15px 24px;
`;
const Widzet = styled.div`
  margin-bottom: 16px;
  width: 300px;
  height: 470.6px;
  background-color: hsl(45deg 93% 94%);
  border: 1px solid hsl(47, 65%, 84%);
  border-radius: 3px;
  .subTitle {
    width: 298px;
    height: 41.69px;
    padding: 12px 15px;
    background-color: #fbf3d5;
    font-size: 12px;
    font-weight: 700;
    color: rgb(82, 89, 96);
    border: 1px solid hsl(47, 65%, 84%);
  }
  .boxWrapper {
    display: flex;
    margin: 12px 0;
    padding: 0 16px;
    width: 298px;
  }
  .iconBox {
    width: 22.16px;
    height: 34px;
  }
  .textBox {
    font-size: 13px;
    color: rgb(59, 64, 69);
    width: 243.84px;
  }
`;
const ReUsed = styled.div`
  margin-bottom: 16px;
  border: hsl(210, 8%, 85%) solid 1px;
  border-radius: 3px;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  .title {
    background-color: #f8f9f9;
    padding: 12px 15px;
    font-size: 15px;
    color: #525960;
    border-bottom: hsl(210, 8%, 85%) solid 1px;
  }
  a {
    color: #0074cc;
    font-size: 13px;
  }
  .filterBox {
    height: 50px;
    padding: 4px 15px;
    display: flex;
    align-items: center;
  }
  .watchBody {
    padding: 16px 15px;
    height: 182.03px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }
  .watchText {
    width: 210.66px;
    height: 34px;
    font-size: 13px;
    margin: 8px 0;
    color: #6a737c;
  }
  .watchButton {
    width: 110px;
    height: 35px;
    padding: 9.6px;
    margin: 8px 0;
    font-size: 12px;
    background-color: #e1ecf4;
    color: #39739d;
    border: hsl(205, 41%, 63%) 1px solid;
    border-radius: 3px;
    display: flex;
  }
  .tag {
    margin-top: 1.5px;
  }
  .ignoreBox {
    padding: 16px 15px;
    height: 68px;
  }
  .ignoreButton {
    width: 128.7px;
    height: 35px;
    padding: 9.6px;
    margin: 0 69px;
    font-size: 12px;
    background-color: #e1ecf4;
    color: #39739d;
    border: hsl(205, 41%, 63%) 1px solid;
    border-radius: 3px;
    display: flex;
    align-items: center;
  }
`;

function SideBar() {
  return (
    <Container>
      <Widzet>
        <li className="subTitle">The Overflow Blog</li>
        <li className="boxWrapper">
          <div className="iconBox">
            <HiPencil size={14} width={22.16} height={34} />
          </div>
          <div className="textBox">
            Let’s talk about our favorite terminal tools (Ep. 521)
          </div>
        </li>
        <li className="boxWrapper">
          <div className="iconBox">
            <HiPencil size={14} />
          </div>
          <div className="textBox">
            Best practices to increase the speed for Next.js apps
          </div>
        </li>
        <li className="subTitle">Featured on Meta</li>
        <li className="boxWrapper">
          <div className="iconBox">
            <img alt="" src={SidebarIcon} height={16} />
          </div>
          <div className="textBox">
            Help us identify new roles for community members
          </div>
        </li>
        <li className="boxWrapper">
          <div className="iconBox">
            <img alt="" src={SidebarIcon} height={16} />
          </div>
          <div className="textBox">
            Navigation and UI research starting soon
          </div>
        </li>
        <li className="boxWrapper">
          <div className="iconBox">
            <FaStackOverflow size={14} />
          </div>
          <div className="textBox">
            2022 Community Moderator Election Results - now with two more mods!
          </div>
        </li>
        <li className="boxWrapper">
          <div className="iconBox">
            <FaStackOverflow size={14} />
          </div>
          <div className="textBox">Temporary policy: ChatGPT is banned</div>
        </li>
        <li className="boxWrapper">
          <div className="iconBox">
            <FaStackOverflow size={14} />
          </div>
          <div className="textBox">I'm standing down as a moderator</div>
        </li>
        <li className="boxWrapper">
          <div className="iconBox">
            <FaStackOverflow size={14} />
          </div>
          <div className="textBox">
            Proposing a Community-Specific Closure Reason for non-English
            content
          </div>
        </li>
      </Widzet>
      <ReUsed>
        <div className="title">Custom Filters</div>
        <div className="filterBox">
          <a href="https://stackoverflow.com/questions?edited=true">
            Create a custom filter
          </a>
        </div>
      </ReUsed>
      <ReUsed>
        <div className="title">Watched Tags</div>
        <div className="watchBody">
          <img alt="" src={SidebarIcon2} />
          <div className="watchText">
            Watch tags to curate your list of questons.
          </div>
          <button className="watchButton">
            <img alt="" src={SidebarIcon3} width={17} />
            <div className="tag">Watch a tag</div>
          </button>
        </div>
      </ReUsed>
      <ReUsed>
        <div className="title t3">Ignored Tags</div>
        <div className="ignoreBox">
          <button className="ignoreButton">Add an ignored tag</button>
        </div>
      </ReUsed>
    </Container>
  );
}

export default SideBar;
