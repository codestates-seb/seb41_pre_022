import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { HeadButton } from './Login/buttons';
import React from 'react'
import styled from 'styled-components'
import stack from '../static/HeadIcon.svg';
// import { faStackOverflow } from '@fortawesome/fontawesome-free-brands';



const HeadBar = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: hsl(210 , 7%, 97.5%);
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  .menu {
    font-size: 19px;
    display: block;
  }
  .logo-img{
  }
 .stack {
  display: flex;
  width:50px
 }

`


const HeadUl = styled.ul`
  display: flex;
  list-style: none;
  cursor: pointer;
`
const HeadLi =styled.li`
  padding: 10px 15px 10px 15px;
  font-size: 14px;
  &:hover{
    background-color:hsl(210, 8%, 90%) ;
    border-radius: 15px;
  }
`
const HeadInput = styled.input`
  width: 600px;
  height: 35px;
`


function Header() {
  return (
    <HeadBar>
      <FontAwesomeIcon className='menu' icon={faBars} />
      <div className='stack'>
      {/* <FontAwesomeIcon icon={faStackOverflow} size="2x" /> */}
      <img className='stack' src={stack}/>
      <span>stack overflow</span>
      <FontAwesomeIcon icon="fab fa-stack-overflow" />
     
      </div>
      
      <HeadUl>
        <HeadLi>About</HeadLi>
        <HeadLi>Products</HeadLi>
        <HeadLi>For Teams</HeadLi>
      </HeadUl>

      <div >
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <HeadInput type="text" placeholder='Search' />
      
      </div>
      
      <HeadButton bgColor="hsl(205, 46%, 92%)" hvColor='hsl(206, 93%, 83.5%)'>Log in</HeadButton>
      <HeadButton bgColor="hsl(206, 100%, 52%)" color='white' hvColor="hsl(209, 100%, 37.5%)">sign up</HeadButton>
   
   
    </HeadBar>
  )
}

export default Header