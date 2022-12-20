import styled from "styled-components";

export const HeadButton = styled.button`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  border:1px solid hsl(206, 100%, 40%);
  width: 70px;
  height: 35px;
  margin: 4px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
  font-size: 13px;
  cursor: pointer;
  &:hover {
    background-color: ${(hover) => hover.hvColor};
  }
` 
export const SocialButton = styled.button`
height: 40px;
    display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bgColor};
  padding: 10px;
  margin: 4px 0;
  border: 1px solid ${(props) => props.border };
  border-radius: 5px;
  font-size: 13px;
  color: ${(props) => props.color};
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: ${(hover) => hover.hvColor};
  }
`