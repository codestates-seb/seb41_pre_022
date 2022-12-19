import React, {useState} from 'react'
import styled from 'styled-components';
import Profile from '../component/Profile';
import EditProfile from '../component/EditProfile';

function MyPage({user}) {
  const [editMode, seteditMode] = useState(false);
  return (
    <MyPageContainer>
      <Profile/>
      <EditProfile editMode={editMode}/>
    </MyPageContainer>
  )
}

const MyPageContainer = styled.div`
    margin: 20px;
`

export default MyPage