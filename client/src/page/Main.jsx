//질문 리스트 전체를 보여줄 수 있는 컴포넌트
import React from "react";
import styled from "styled-components";
import TopPart from "../component/Main/TopPart";
import QuestionList from "../component/Main/QuestionList";
import SideBar from "../component/Main/SideBar";
const questions = [
  {
    id: 1,
    title:
      "titletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitltitletitletitlletitletitletitletitletitletitleitlletitletitletitletitletititlt",
    contents: "contents1",
    tags: "c#",
  },
  {
    id: 2,
    title: "title22222",
    contents: "contents2",
    tags: "react",
  },
  { id: 3, title: "title33333", contents: "contents3", tags: "CSS" },
  {
    id: 4,
    title: "title44444",
    contents: "contents4",
    tags: ["python", "1123"],
  },
  { id: 5, title: "title11111", contents: "contents1" },
  { id: 6, title: "title11111", contents: "contents1" },
  { id: 7, title: "title11111", contents: "contents1" },
  { id: 8, title: "title11111", contents: "contents1" },
  { id: 9, title: "title11111", contents: "contents1" },
  { id: 10, title: "title11111", contents: "contents1" },
  { id: 11, title: "title11111", contents: "contents1" },
  { id: 12, title: "title11111", contents: "contents1" },
  { id: 13, title: "title11111", contents: "contents1" },
  { id: 14, title: "title11111", contents: "contents1" },
  { id: 15, title: "title11111", contents: "contents1" },
  { id: 16, title: "title11111", contents: "contents1" },
  { id: 17, title: "title11111", contents: "contents1" },
  { id: 18, title: "title11111", contents: "contents1" },
  { id: 19, title: "title11111", contents: "contents1" },
  { id: 20, title: "title11111", contents: "contents1" },
];
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
