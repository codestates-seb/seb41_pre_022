import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import Profile from '../component/MyPage/Profile';
import EditProfile from '../component/MyPage/EditProfile';

function MyPage() {
  const [user, ] = useState({
    name : "sehanKim",
    email : "rlatp1409@gmail.com"
  })
  const [editMode, setEditMode] = useState(false);

  const onClickEditBtn = () => {
    console.log('click')
    setEditMode(!editMode);
  } 
  useEffect(() => {
    console.log(editMode);
  }, [editMode])
  return (
    <MyPageContainer>
      <Profile user={user} onClickEditBtn={onClickEditBtn}/>
      <EditProfile userInfo={user} editMode={editMode} setEditMode={setEditMode}/>
    </MyPageContainer>
  )
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