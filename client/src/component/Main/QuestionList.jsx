import styled from "styled-components";
import Question from "./Question";

const Container = styled.div`
  width: 750px;
  height: 10901px;
`;
const QuestionWrapper = styled.div`
  width: 750px;
  height: 120px;
  padding: 16px;
  border-bottom: rgba(186, 191, 196) solid 1px;
`;

function QuestionList({ questions }) {
  return (
    <Container>
      <ul>
        {questions.map((question) => {
          return (
            <QuestionWrapper>
              <Question key={question.id} question={question} />
            </QuestionWrapper>
          );
        })}
      </ul>
    </Container>
  );
}

export default QuestionList;