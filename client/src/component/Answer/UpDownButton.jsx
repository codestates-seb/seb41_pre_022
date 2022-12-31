import styled from "styled-components";
import React, { useState } from "react";
const Menu = styled.div`
  width: 50px;
  /* margin-left: 30px; */
`;
const MenuButton = styled.button`
  border: 0;
  background: none;
  font-size: 2rem;
  color: #888;
  text-align: center;
  padding: 0;
  cursor: pointer;
`;
const MenuItem = styled.div`
  text-align: center;
  width: 40px;
  padding: 5px 0 7px;
  font-size: 1.4rem;
  line-height: 1.4rem;
  color: #888;
  margin-top: 15px;
  margin-bottom: 15px;
`;
const DownButton = styled.div`
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 20px solid #bbb;
`;
const UpButton = styled.div`
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 20px solid #bbb;
  margin-top: 30px;
`;

function UpDownButton() {
  const [upDown, setUpDown] = useState(0);
  return (
    <Menu>
      <MenuButton onClick={() => setUpDown(upDown + 1)}>
        <UpButton />
      </MenuButton>
      <MenuItem>{upDown}</MenuItem>
      <MenuButton onClick={() => setUpDown(upDown - 1)}>
        <DownButton />
      </MenuButton>
    </Menu>
  );
}

export default UpDownButton;
