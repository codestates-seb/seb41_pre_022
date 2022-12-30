import axios from "axios";
import { useNavigate } from "react-router-dom";
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
const DeleteQuestion = async (qid) => {
  //delete 메서드로 질문을 삭제하는 api (questionId를 params로 전달)
  //question/questionId >> questionId이 qid이다 qid와 동일한 question을 삭제 하는거 같다 그러면 삭제 버튼도 있어야 겠지?
  //버튼으로 삼항연산자로 로그인시 (isLogin?) true면 버튼 나오고 아니면 버튼은 안보이게 해보기!
  // navigat으로 홈 화면으로 가게 한거 같은데 확인이 안되어서 확실하지 않다...
  const navigate = useNavigate();

  axios
    .delete(`http://localhost:8080/questions/${qid}`)
    .then((res) => {
      console.log(res);
      navigate("/");
    })
    .catch((err) => console.log(err));
};

export { getQuestionList, postQuestion, DeleteQuestion };
