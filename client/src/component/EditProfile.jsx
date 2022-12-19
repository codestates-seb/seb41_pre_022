import React from 'react'
import styled from 'styled-components'
function EditProfile({editMode}) {
  return (
    <EditProfileContainer editMode={editMode}>
        <EditProfileTitle>Edit your profile</EditProfileTitle>
        <form className='input-container'>
            <label>Display name</label>
            <input type='text'></input>
            <label>Public email</label>
            <input type='email'></input>
            <div class="btn-group">
                <button class="btn-submit"type='submit'>Save Profile</button>
                <button class="btn-cancel"type='submit'>Cancel</button>
            </div>
        </form>
    </EditProfileContainer> 
  )
}

const EditProfileContainer = styled.div`
    margin-top: 80px;
    border: 1px solid gray;
    border-radius: 15px;
    > .input-container {
        ${(props) => props.editMode ? '':'filter: blur(1rem);'}
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin: 20px;
        padding: 20px;
    }
    label {
        font-size: 1.2rem;
        font-weight: bold;
    }
    input {
        width: 50%;
        line-height: 2rem;
        font-size: 1.2rem;
        padding: 10px;
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
`

const EditProfileTitle = styled.div`
    font-size: 2rem;
    padding: 20px;
    border-bottom: 1px solid gray;
`



export default EditProfile