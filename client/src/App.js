import Header from './component/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './page/Main';
import Login from './page/Login';
import SignUp from './page/SignUp';
import MyPage from './page/MyPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <section className="main-view">
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Main />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/mypage" element={<MyPage/>}></Route>
          </Routes>
        </BrowserRouter>
      </section>
    </div>
  );
}

export default App;
