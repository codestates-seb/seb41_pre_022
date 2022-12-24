import axios from "axios";
import API_BASE_URL from "./API_BASE_URL";
//회원가입 기능
//회원가입이 성공적으로 되었다면, 회원가입이 되었다는 것을 알리고, 
//로그인 페이지로 리다이렉션 시켜주어야합니다.
const signUp = async (userInfo, callback) => {
    return axios.post(API_BASE_URL+'/signup', {
        userInfo
    }).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err.message)
    })
}

//회원정보 수정 기능
const putAccount = async (userInfo, callback) => {
    const {email, name, password} = userInfo;
    //put 메서드를 사용
    //email이 계정별로 고유값이기 때문에 email을 params로 전달하거나 해야합니다.
}

// 회원계정 삭제 기능
const deleteAccount = async (email) => {
    //email을 주는 delete메서드를 구현해야합니다.
}

export {
    signUp, 
    putAccount, 
    deleteAccount
}