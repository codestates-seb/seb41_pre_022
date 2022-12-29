import styled from "styled-components";
import Question from "./Question";
import TopPart from "./TopPart";

const Container = styled.div`
  width: 100%;
`;
const QuestionWrapper = styled.div`
  width: 100%;
  height: 120px;
  padding: 16px;
  border-bottom: rgba(186, 191, 196) solid 1px;
`;

function QuestionList({ questions }) {
  return (
    <Container>
      <TopPart />
      <ul>
        {questions.map((question) => {
          return (
            <QuestionWrapper key={question.id}>
              <Question question={question} />
            </QuestionWrapper>
          );
        })}
      </ul>
    </Container>
  );
}

export default QuestionList;
