import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./page/Main";
import Login from "./page/Login";
import SignUp from "./page/SignUp";
import MyPage from "./page/MyPage";
import Ask from "./page/Ask";
import "./App.css";
import SideMenu from "./component/SideMenu";
import { useLocation } from "react-router-dom";
import Question from "./page/Question";
import { checkAuth } from './lib/auth';

function App() {
  //현 주소에 대한 path를 반환합니다.
  //path에 따라 사이드바에 표시 여부를 구현하기 위해 작성한 코드입니다.
  const location = useLocation();
  const [path, setPath] = useState();
  useEffect(() => {
    setPath(() => location.pathname.substring(1));
  }, [location, path]);

  //구현 예정 사항: App.js에서 받아와야하는 정보
  //Appjs에서는 쿠키에 따라 로그인 상태를 읽어올 줄 알아야함.
  //로그인 상태를 props로 전달받아야하는 컴포넌트
  // 1. header => 이미 로그인 되어있으면 있으면 login, signup 버튼을 지워야함
  // 2. login, signup page => 이미 로그인 되어있으면 해당 path로의 접근을 막고 main으로 리다이렉션 시켜야함
  // 질문 list를 받아와서 main에 뿌려줘야함.
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    checkAuth(setIsLogin, setUserInfo);
  }, [])
  useEffect(() => {
    console.log(isLogin, userInfo);
  })
  
  return (
    <div className="App">
      <Header isLogin={isLogin} setIsLogin={setIsLogin}></Header>
      <section className="main-container">
<<<<<<< HEAD
      {/* path가 login 이거나 signup일때 사이드바 숨기기 */}
      {!['login','signup', 'question/ask'].includes(path) ?
      <section className="side-menu-section">
        <SideMenu path={path} isLogin={isLogin}></SideMenu>
      </section> : <></>
      }
      <section className="main-view-section">
          <Routes>
            <Route path="*" element={<Main />}></Route>
            <Route path="/login" element={<Login isLogin={isLogin}/>}></Route>
            <Route path="/signup" element={<SignUp isLogin={isLogin}/>}></Route>
            <Route path="/mypage" element={<MyPage isLogin={isLogin} userInfo={userInfo}/>}></Route>
=======
        {/* path가 login 이거나 signup일때 사이드바 숨기기 */}
        {!["/login", "/signup", "/question/ask"].includes(path) ? (
          <section className="side-menu-section">
            <SideMenu path={path}></SideMenu>
          </section>
        ) : (
          <></>
        )}
        <section className="main-view-section">
          <Routes>
            <Route path="*" element={<Main />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/mypage" element={<MyPage />}></Route>
            <Route path="/question" element={<Question />}></Route>
>>>>>>> 9ccb649ddb23174c43210fb7b6c39a0fd3429a32
            <Route path="/question/ask" element={<Ask />}></Route>
            <Route path="/question/:questionId" element={<Question/>}></Route>
          </Routes>
        </section>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default App;
