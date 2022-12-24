//질문 리스트 전체를 보여줄 수 있는 컴포넌트
import React from "react";
import styled from "styled-components";
import TopPart from "../component/Main/TopPart";
import QuestionList from "../component/Main/QuestionList";
import SideBar from "../component/Main/SideBar";
import { questions } from "../static/dummyData/dummyData";
const Container = styled.div`
  display: flex;
`;
function Main() {
  //list element까지하고
  return (
    <Container>
      <div>
        <TopPart />
        <QuestionList questions={questions} />
      </div>
      <SideBar />
    </Container>
  );
}

export default Main;
