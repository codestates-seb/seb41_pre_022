//질문 리스트 전체를 보여줄 수 있는 컴포넌트
import React from "react";
import styled from "styled-components";
import QuestionList from "../component/Main/QuestionList";
import SideBar from "../component/Main/SideBar";
import { questions } from "../static/dummyData/dummyData";
const Container = styled.div`
  display: flex;
  width: 85%;
`;
function Main() {
  return (
    <Container>
      <QuestionList questions={questions} />
      <SideBar />
    </Container>
  );
}

export default Main;
