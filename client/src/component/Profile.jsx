import React from 'react'
import styled from 'styled-components';
import {MdEdit} from 'react-icons/md'
function Profile({user}) {
    // const {email, name} = user;
  return (
    <ProfileContainer>
      <AvatarImg>사진</AvatarImg>
      <NameEmailContainer>
        <Name>sehanKim</Name>
        <Email>rlatp1409@gmail.com</Email>
      </NameEmailContainer>
      <EditBtn>
        <i style={{verticalAlign: 'middle'}}><MdEdit size="20"/></i>
        <span> Edit Profile</span>
      </EditBtn>
    </ProfileContainer>
  )
}

const ProfileContainer = styled.div`
  position: relative;
  max-width: 1400px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding : 5px;
`

const AvatarImg = styled.div`
  width: 10rem;
  height: 10rem;
  border: 1px solid black;
`

const NameEmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Name = styled.div`
  font-size: 2rem;
`

const Email = styled.div`
  font-size: 1rem;
`

const EditBtn = styled.button`
  background-color: white;
  border: 1px solid grey;
  position: absolute;
  right: 5px;
  width: 8rem;
  height: 3rem;
  font-size: 1rem;
`

export default Profile