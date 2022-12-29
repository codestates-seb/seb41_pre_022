import axios from "axios";
import API_BASE_URL from "./API_BASE_URL";
//Main 메뉴에서 수행될 함수로 전체 questionList를 받아오는 api
const getQuestionList = async () => {
  const data = await axios
    .get(API_BASE_URL + "/엔드포인트")
    .then((res) => res.data)
    .catch((err) => console.log(err.message));
  return data;
};

//Ask 페이지에서 질문을 등록할 때 호출하는 함수
const postQuestion = async (question) => {
  //post 메소드에 맞게 변수명 설정 해주어야함!
  const { user, title, detail, expect } = question;
  return await axios
    .post(API_BASE_URL + "/엔드포인트", { user, title, detail })
    .then((res) => "success")
    .catch((err) => console.log(err.message));
};

//Question 수정
const putQuestion = async (question) => {
  //put 메서드로 질문을 수정하는 api
};

//Question 삭제
const deleteQuestion = async (qid) => {
  //delete 메서드로 질문을 삭제하는 api (questionId를 params로 전달)
};

export { getQuestionList, postQuestion };
