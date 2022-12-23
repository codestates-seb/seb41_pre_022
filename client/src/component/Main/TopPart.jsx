import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  font-family: -apple-system, "system-ui", "Sehoe UI Adjusted", "Segoe UI",
    "Liberation Sans", sans-serif;
  border-bottom: rgba(186, 191, 196) solid 1px;
`;
const H1 = styled.h1`
  margin-left: 24px;
  width: 560px;
  height: 35px;
  font-size: 27px;
  font-weight: 400;
  line-height: 35.1px;
  font-family: -apple-system, "system-ui", "Sehoe UI Adjusted", "Segoe UI",
    "Liberation Sans", sans-serif;
`;
const BlueButton = styled.a`
  width: 105px;
  height: 38.5px;
  padding: 10.4px;
  border-radius: 3px;
  border: rgba(0, 0, 0, 0) solid 1.111px;
  box-shadow: rgba(255, 255, 255, 0.4) 0px 1px 0px 0px inset;
  background-color: #0a95ff;
  color: #fff;
  font-size: 13px;
  font-family: -apple-system, "system-ui", "Sehoe UI Adjusted", "Segoe UI",
    "Liberation Sans", sans-serif;
`;

function TopPart() {
  return (
    <Container>
      <H1>Top Questions</H1>
      <BlueButton href="">Ask Question</BlueButton>
    </Container>
  );
}

export default TopPart;
