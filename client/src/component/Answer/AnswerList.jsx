import React from "react";
import styled from "styled-components";
import Answer from "./Answer";
import UpDownButton from "./UpDownButton";
const Container = styled.div`
  margin-top: 95px;
  width: 100%;
`;
const AnswerWrapper = styled.div`
  border-bottom: 1px solid hsl(210, 8%, 90%);
  padding-bottom: 20px;
  display: flex;
`;
const Counter = styled.div`
  width: 400px;
  height: 24px;
  font-size: 19px;
  margin-bottom: 20px;
`;
const CounterSorted = styled.div`
  display: flex;
  justify-content: space-between;
  .sorted {
    margin-right: 20px;
  }
  .sorted-input {
    width: 259px;
    height: 32px;
    color: #000;
    border: 0.5px solid #ccc;
    padding: 7.8px 32px 7, 8px 9px;
    font-size: 13px;
    outline: none;
    border-radius: 5px;
  }
`;
function AnswerList({ AnswerDummy }) {
  return (
    <Container>
      <CounterSorted>
        <Counter>{AnswerDummy.data.length} Answers</Counter>
        <div className="sorted">
          Sorted by:{" "}
          <select className="sorted-input">
            <option>Highest score (default)</option>
            <option>Trending (recent votes count more)</option>
            <option>Date modified (newest first)</option>
            <option>Date reated (oldest first)</option>
          </select>
        </div>
      </CounterSorted>

      <ul>
        {AnswerDummy.data.map((AnswerDummy) => {
          return (
            <AnswerWrapper key={AnswerDummy.id}>
              <UpDownButton />
              <Answer AnswerDummy={AnswerDummy}></Answer>
            </AnswerWrapper>
          );
        })}
      </ul>
    </Container>
  );
}

export default AnswerList;
