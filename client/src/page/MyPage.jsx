import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import Profile from '../component/MyPage/Profile';
import EditProfile from '../component/MyPage/EditProfile';

function MyPage({isLogin, userInfo}) {
  useEffect(() => {
    if(!isLogin) {
      window.location.replace('/')
    }
  }, [isLogin])
  const [editMode, setEditMode] = useState(false);

  const onClickEditBtn = () => {
    console.log('click')
    setEditMode(!editMode);
  } 
  useEffect(() => {
    console.log(editMode);
  }, [editMode]);
  if (isLogin && userInfo) {
    return (
      <MyPageContainer>
      <Profile user={userInfo} onClickEditBtn={onClickEditBtn}/>
      <EditProfile userInfo={userInfo} editMode={editMode} setEditMode={setEditMode}/>
      </MyPageContainer> 
      )
  }
  return <></>
}

const MyPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin: 20px;
    position: relative;
    max-width: 1400px;
`

export default MyPage