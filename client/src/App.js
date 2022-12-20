import Header from './component/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './page/Main';
import Login from './page/Login';
import SignUp from './page/SignUp';
import MyPage from './page/MyPage';
import './App.css';
import SideMenu from './component/SideMenu';
import Question from './page/Question';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
      <section className="main-container">
      <section className="side-menu-section">
        <SideMenu></SideMenu>
      </section>
      <section className="main-view-section">
          <Routes>
            <Route path="*" element={<Main />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/mypage" element={<MyPage/>}></Route>
          </Routes>
      </section>
      </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
