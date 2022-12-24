import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import _ from 'lodash';
function EditProfile({editMode, setEditMode,userInfo}) {
    const [user, setUser] = useState(_.cloneDeep(userInfo));

    const onNameHandler = (e) => {
        setUser({
            ...user,
            name: e.currentTarget.value,
        })
    }

    const onPasswordHandler = (e) => {
        setUser({
            ...user,
            password: e.currentTarget.value
        })
    }

    //수정 정보 전달
    const onSubmitHandler = (event) => {
        event.preventDefault();
        //회원정보를 수정하는 api를 불러와야합니다.
        //putAccount 메소드를 호출하고, 수정 성공 후 동작, 수정 실패 후 동작을 구현
    }

    //수정 취소
    const onCancelHandler = (event) => {
        event.preventDefault();
        setEditMode(false);
    }

    //삭제버튼 클릭
    const onDeleteHandler = (event) => {
        event.preventDefault();
        //삭제 구현 필요
        //deleteAccount 메소드를 호출해서 계정을 삭제할 수 있어야합니다.
    }
  return (
    <div>
    <Setting isClicked={true}>Setting</Setting>
    <EditProfileContainer editMode={editMode}>
        <EditProfileTitle>Edit your profile</EditProfileTitle>
        <form className='input-container'>
            <label>Display name</label>
            <input className='text-input' type='text' value={user.name} onChange={onNameHandler}></input>
            <label>Password</label>
            <input className='text-input' type='password' onChange={onPasswordHandler}></input>
            <label>Public email</label>
            <input className='text-input' type='email' value={user.email} disabled></input>
            <div className="btn-group">
                <button className="btn-submit" type='submit' onClick={onSubmitHandler}>Save Profile</button>
                <button className="btn-cancel" type='cancel' onClick={onCancelHandler}>Cancel</button>
            </div>
        </form>
    </EditProfileContainer> 
    <EditProfileContainer>
        <EditProfileTitle>Delete profile</EditProfileTitle>
        <form className='input-container'>
            <p>Before confirming that you would like your profile deleted, we'd like to take a moment to explain the implications of deletion:</p>
            <ul>
                <li>Deletion is irreversible, and you will have no way to regain any of your original content, should this deletion be carried out and you change your mind later on.</li>
                <li>Your questions and answers will remain on the site, but will be disassociated and anonymized (the author will be listed as "user20813757") and will not indicate your authorship even if you later return to the site.</li>
            </ul>
            <p>Confirming deletion will only delete your profile on Stack Overflow - it will not affect any of your other profiles on the Stack Exchange network. If you want to delete multiple profiles, you'll need to visit each site separately and request deletion of those individual profiles.</p>
            <div className='checkbox-container'>
            <input className='checkbox' type='checkbox'></input><p>I have read the information stated above and understand the implications of having my profile deleted. I wish to proceed with the deletion of my profile.</p>
            </div>
            <button className="btn-delete" type='submit' onClick={onDeleteHandler}>Delete</button>
        </form>
    </EditProfileContainer>
    </div>
  )
}

const EditProfileContainer = styled.div`
    > .input-container {
        ${(props) => props.editMode ? '':'filter: blur(1rem);'}
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 20px;
        padding: 30px;
        border: 1px solid gray;
        border-radius: 15px;
    }
    label {
        margin-bottom: 10px;
        font-size: 1.2rem;
        font-weight: bold;
    }
    ul {
        padding-left: 10px;
    }
    li {
        list-style: disc;
        font-size: 1.2rem;
        margin-top: 10px;
    }
    p {
        font-size: 1.2rem;
    }
    .text-input {
        width: 640px;
        line-height: 2rem;
        font-size: 1.2rem;
        padding: 10px;
        margin-bottom: 20px;
    }
    .checkbox-container {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: 20px;
    }
    .checkbox {
        width: 30px; /*Desired width*/
        height: 30px; /*Desired height*/
    }
    .btn-group {
        margin-top: 20px;
        display: flex;
        flex-direction: row;
    }
    .btn-submit {
        background-color: #2982f6;
        border: none;
        color : white;
        width: 8rem;
        height: 3rem;
        font-size: 1rem;
    }
    .btn-cancel {
        border: none;
        background-color: white;
        color : #2982f6;
        width: 8rem;
        height: 3rem;
        font-size: 1rem;
    }
    .btn-delete {
        background-color: #f62929;
        border: none;
        color : white;
        width: 8rem;
        height: 3rem;
        font-size: 1rem;
    }
`

const EditProfileTitle = styled.div`
    margin-top: 10px;
    font-size: 2rem;
    padding: 20px;
    border-bottom: 1px solid gray;
`
const Setting = styled.div`
    font-size: 1.2rem;
    display: inline;
    padding: 5px 15px 5px 15px;
    border-radius: 15px;
    ${(props) => props.isClicked ? `
        background-color: #f28603;
        color: white
    ` : `
        background-color: white;
        color: black;
    `}
`



export default EditProfile