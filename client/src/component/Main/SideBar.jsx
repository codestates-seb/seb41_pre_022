import styled from "styled-components";
import { HiPencil } from "react-icons/hi";
const Container = styled.div`
  width: 300px;
  height: 2672px;
  border-radius: 3px;
  margin: 24px 0 15px 24px;
`;
const Widzet = styled.div`
  width: 300px;
  height: 447.6px;
  background-color: yellow;

  .subTitle {
    width: 300px;
    height: 41.69px;
    padding: 12px 15px;
    background-color: #fbf3d5;
    font-size: 12px;
    font-weight: 700;
    color: rgb(82, 89, 96);
  }
  .wrapp {
    display: flex;
    margin: 12px 0;
    padding: 0 16px;
  }
  .text {
    font-size: 13px;
    color: rgb(59, 64, 69);
    width: 218px;
    height: 33px;
  }
`;
// const Container = styled.div`
//   width: 300px;
//   height: 95.46px;
// `;

function SideBar() {
  return (
    <Container>
      <Widzet>
        <ul>
          <li className="subTitle">The Overflow Blog</li>
          <li classname="wrapp">
            <HiPencil size={14} width={22.16} height={34} />
            <div className="text">
              Let’s talk about our favorite terminal tools (Ep. 521)
            </div>
          </li>

          <li classname="wrapp">
            <HiPencil size={14} />
            <div className="text">
              Best practices to increase the speed for Next.js apps
            </div>
          </li>

          <li className="subTitle">Featured on Meta</li>

          <li>
            <img className="chat-Img"></img>
            <div className="text">
              Help us identify new roles for community members
            </div>
          </li>
          <li>
            <img></img>
            <div className="text">Navigation and UI research starting soon</div>
          </li>
          <li>
            <img></img>
            <div className="text">
              2022 Community Moderator Election Results - now with two more
              mods!
            </div>
          </li>
          <li>
            <img></img>
            <div className="text">Temporary policy: ChatGPT is banned</div>
          </li>
          <li>
            <img></img>
            <div className="text">I'm standing down as a moderator</div>
          </li>
          <li>
            <img></img>
            <div className="text">
              Proposing a Community-Specific Closure Reason for non-English
              content
            </div>
          </li>
        </ul>
      </Widzet>
    </Container>
  );
}

export default SideBar;
