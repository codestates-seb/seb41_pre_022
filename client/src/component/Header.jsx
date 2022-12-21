import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { HeadButton } from "./Login/buttons";
import React from "react";
import styled from "styled-components";
import stackoverflow from "../static/img/stackoverflow.png";
import { useNavigate } from "react-router-dom";
// import { faStackOverflow } from '@fortawesome/fontawesome-free-brands';

const HeadBar = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 5px;
  background-color: hsl(210, 7%, 97.5%);
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  .menu {
    font-size: 19px;
    display: block;
  }
  .logo-img {
  }
  .stack {
    height: 50px;
  }
`;

const HeadUl = styled.ul`
  display: flex;
  list-style: none;
  cursor: pointer;
`;
const HeadLi = styled.li`
  padding: 10px 15px 10px 15px;
  font-size: 14px;
  &:hover {
    background-color: hsl(210, 8%, 90%);
    border-radius: 15px;
  }
`;
const HeadSearchBar = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 5px;
  background-color: white;
  border: 1px solid gray;
  border-radius: 3px;
  align-items: center;
`;
const HeadInput = styled.input`
  background-color: white;
  border: none;
  width: 600px;
  height: 35px;
  outline: none;
  font-size: 1rem;
`;

function Header() {
  const navigate = useNavigate();

  const toLoginHandler = () => {
    navigate("/login");
  };

  const toSignUpHandler = () => {
    navigate("/signup");
  };
  return (
    <HeadBar>
      <FontAwesomeIcon className="menu" icon={faBars} />
      {/* <FontAwesomeIcon icon={faStackOverflow} size="2x" /> */}
      <img className="stack" src={stackoverflow} alt="stackoverflow" />
      {/* <FontAwesomeIcon icon="fab fa-stack-overflow" /> */}

      <HeadUl>
        <HeadLi>About</HeadLi>
        <HeadLi>Products</HeadLi>
        <HeadLi>For Teams</HeadLi>
      </HeadUl>

      <HeadSearchBar>
        <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
        <HeadInput type="text" placeholder="Search" />
      </HeadSearchBar>

      <HeadButton
        onClick={toLoginHandler}
        bgColor="hsl(205, 46%, 92%)"
        hvColor="hsl(206, 93%, 83.5%)"
      >
        Log in
      </HeadButton>
      <HeadButton
        onClick={toSignUpHandler}
        bgColor="hsl(206, 100%, 52%)"
        color="white"
        hvColor="hsl(209, 100%, 37.5%)"
      >
        sign up
      </HeadButton>
    </HeadBar>
  );
}

export default Header;
