import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import Profile from '../component/Profile';
import EditProfile from '../component/EditProfile';

function MyPage() {
  const [user, setuser] = useState({
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
      <EditProfile editMode={editMode}/>
    </MyPageContainer>
  )
}

const MyPageContainer = styled.div`
    margin: 20px;
    position: relative;
    max-width: 1400px;
`

export default MyPage