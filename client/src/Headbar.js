import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Headbar = styled.div`
  width: 100%;
  height: 50px;
  border: 2px solid red;
`;

function Head() {
  return (
    <Headbar>
      <FontAwesomeIcon icon="faBars" />
    </Headbar>
  );
}

export default Head;
