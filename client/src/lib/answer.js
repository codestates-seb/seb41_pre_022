import axios from "axios"
import API_BASE_URL from "./API_BASE_URL"

//questionId (qid) 로 답변 정보를 가져오는 api
//answer의 배열을 받아와야합니다.
const getAnswer = async (qid, setQuestion) => {
    const answers = await axios.get(API_BASE_URL+'/answer', {
            params: {qid}
        }).then((res) => res.data)
        .catch((err) => {
            console.log(err.message);
        })
    return answers;
}

//질문에다 답변 달기 api
//답변이 성공적으로 달리면 해당 질문 페이지를 리다이렉트 한 후, 
//getAnswer를 호출하여 작성한 답변이 업데이트된 답변 목록을 가져와야합니다.
const writeAnswer = async (qid, answer, callback) => {
    return axios.post(API_BASE_URL + '/answer', {
        qid, answer
    }).then((res) => console.log(res))
    .catch((err) => console.log(err.message))
}

//답변 수정 api
const putAnswer = async (aid, answer) => {
    //작성한 answer의 id를 가지고 answer를 수정하는 api
    //axios.put으로 작성 완료해야합니다.
}

//답변 삭제 api
const deleteAnswer = async (aid) => {
    //answer id를 가지고 answer를 삭제할 수 있어야합니다. 
}

export {
    getAnswer,
    writeAnswer,
    putAnswer,
    deleteAnswer
}