import styled from "styled-components";
const Container = styled.li`
  display: flex;
  margin-left: 40px;
  margin-top: 7px;
`;
const VoteAnswerView = styled.div`
  width: 108px;
  height: 80px;
  font-size: 13px;
  margin: 0 16px 4px 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  color: #6a737c;
  div {
    width: 64px;
    height: 19px;
    text-align: right;
  }
  .black {
    color: #0c0d0e;
  }
`;
const TitleTagAuthor = styled.div`
  width: 594px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.a`
  display: flex;
  flex-wrap: wrap;
  width: 594px;
  padding: 0 24px 0 0;
  margin: -1px 0 5px 0;
  color: #0074cc;
  cursor: pointer;
  hyphens: auto;
  font-size: 17px;
  font-weight: 400;
  line-height: 22.23px;
  font-family: -apple-system, "system-ui", "Sehoe UI Adjusted", "Segoe UI",
    "Liberation Sans", sans-serif;
  &:hover {
    color: hsl(206deg 100% 52%);
  }
`;
const Tags = styled.div`
  width: 594px;
  height: 38.6px;
  font-size: 13px;
  font-family: -apple-system, "system-ui", "Sehoe UI Adjusted", "Segoe UI",
    "Liberation Sans", sans-serif;
  line-height: 18px;
  margin-bottom: 13px;
  span {
    background-color: hsl(205deg 46% 92%);
    border-radius: 3px;
    color: #39739d;
    padding: 4.8px 6px;
    margin: 0 2px 2px 0;
    &:hover {
      cursor: pointer;
      background-color: hsl(205deg 54% 88%);
    }
  }
`;
const Author = styled.div`
  display: flex;
  justify-content: flex-end;
  div {
    margin-left: 10px;
    margin-top: 6px;
  }
`;
function Question({ question }) {
  return (
    <Container>
      <VoteAnswerView>
        <div className="black">0 votes</div>
        <div>1 answer</div>
        <div>8 views</div>
      </VoteAnswerView>
      <TitleTagAuthor>
        <Title>{question.title}</Title>
        <Tags>
          <span>{question.tags}</span>
          <Author>
            <div>img</div>
            <div>author</div>
            <div>createdAt</div>
          </Author>
        </Tags>
      </TitleTagAuthor>
    </Container>
  );
}

export default Question;
