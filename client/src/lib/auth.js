import axios from "axios";
import API_BASE_URL from "./API_BASE_URL";

//login
//IsLogin이라는 loginStatus를 확인하는 state를 true로 설정해줌!
const login = async (loginInfo, setIsLogin) => {
  // return axios.post(API_BASE_URL+'/login', {
  //         loginInfo
  //     }).then((res) => {
  //         setIsLogin(true);
  //     }).catch((err) => {
  //         console.log(err.message);
  //         console.log('로그인에 실패했습니다.');
  //         setIsLogin(false);
  //     })
};

//cookie 상태를 봐서 로그인에 관련한 쿠키가 있으면 auth성공
const checkAuth = async (setIsLogin, setUserInfo) => {
  //login이 되있다면
  // setIsLogin(true);
  // setUserInfo({
  //     email: 'rlatp1409@gmail.com',
  //     name: 'sehanKim'
  // });
  //login상태가 아니라면
  setIsLogin(false);
  setUserInfo(null);

  // return axios.get(API_BASE_URL+'/auth')
  //     .then((res) => {
  //         setUserInfo(res.data);
  //         setIsLogin(true);
  //     }).catch((err) => {
  //         console.log(err.message);
  //         //App.js 최상단에 useEffect를 활용하여 IsLogin 이 false일 시 userInfo를 {}로 초가화하는 함수가 필요
  //         setIsLogin(false);
  //     })
};

//로그아웃 기능 - 로그아웃이 성공적으로 되면 setIsLogin 을 false로 설정
const logout = async (setIsLogin) => {
  setIsLogin(false);
  // return axios.post(API_BASE_URL+'/logout')
  //     .then((res) => {
  //         setIsLogin(false);
  //     }).catch((err) => {
  //         console.log(err.message);
  //         console.log('logout failed');
  //     })
};

export { login, logout, checkAuth };
