import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
function Ask({user}) {
    //질문하기 페이지
    const [step, setStep] = useState(1);
    const [question, setQuestion] = useState({
        user: user,
        title: "",
        detail: "",
        expect: "",
    })

    const onSubmitHandler = (event) => {
        event.preventDefault();
        //질문 작성 완료 시 수행
    }

    const onCancelHandler = (event) => {
        event.preventDefault();
        //질문 작성 취소 시 수행
    }

    const onNextHandler = (e) => {
        setStep(step+1);
        e.target.style.display = "none";
    }
    useEffect(() => {
      console.log(question);
      console.log(step);
    }, [question, step])
    
  return (
    <AskContainer>
        <div className="ask-body">
        <h1>Ask a public question</h1>
        <AskDescription>
            <h2>Writing a good question</h2>
            <p>You’re ready to ask a programming-related question and this form will help guide you through the process.</p><p>Looking to ask a non-programming question? See the topics here to find a relevant site.</p>
            <p>Steps</p>
            <ul>
                <li>Summarize your problem in a one-line title.</li>
                <li>Describe your problem in more detail.</li>
                <li>Describe what you tried and what you expected to happen.</li>
                <li>Add “tags” which help surface your question to members of the community.</li>
                <li>Review your question and post it to the site.</li>
            </ul>
        </AskDescription>
        <TitleInputBox question={question} setQuestion={setQuestion} onNextHandler={onNextHandler}></TitleInputBox>
        <DetailInputBox question={question} setQuestion={setQuestion} step={step} onNextHandler={onNextHandler}></DetailInputBox>
        <ExpectInputBox question={question} setQuestion={setQuestion} step={step} onNextHandler={onNextHandler}></ExpectInputBox>
            <div className="btn-group" style={step>3 ? {display: 'block'} : {display:'none'}}>
                <button className="btn-submit" type='submit' onClick={onSubmitHandler}>Post your question</button>
                <button className="btn-cancel" type='cancel' onClick={onCancelHandler}>Discard draft</button>
            </div>
        </div>
    </AskContainer>
  )
}

function TitleInputBox ({question, setQuestion ,onNextHandler}) {
    const onTitleHandler = (e) => {
        setQuestion({
            ...question,
            title: e.target.value
        })
    }
    return (
        <InputBoxContainer>
            <h4>Title</h4>
            <p>Be specific and imagine you’re asking a question to another person.</p>
            <input type='text' value={question.title} onChange={onTitleHandler}></input>
            <button className='btn-next' onClick={onNextHandler}>Next</button>
        </InputBoxContainer>
    )
}

function DetailInputBox ({question, setQuestion, step, onNextHandler}) {
    const disable = step > 1 ? false : true;
    return (
        <InputBoxContainer disable={disable}>
            <h4>What are the details of your problem?</h4>
            <p>introduce the problem and expand on what you put in the title. Minimum 20 characters.</p>
            <CKEditor
                    editor={ ClassicEditor }
                    data=""
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        editor.setData(question.detail);
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setQuestion({
                            ...question,
                            detail : data
                        });
                    } }
                    onBlur={ ( event, editor ) => {
                        // console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        // console.log( 'Focus.', editor );
                    } }
                />
                <button className='btn-next' onClick={onNextHandler}>Next</button>
        </InputBoxContainer>
    )
}

function ExpectInputBox ({question, setQuestion, step, onNextHandler}) {
    const disable = step > 2 ? false : true;
    return (
        <InputBoxContainer disable={disable}>
            <h4>What did you try and what were you expecting?</h4>
            <p>Describe what you tried, what you expected to happen, and what actually resulted. Minimum 20 characters.</p>
            <CKEditor
                    editor={ ClassicEditor }
                    data=""
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        editor.setData(question.expect);
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setQuestion({
                            ...question,
                            expect: data
                        });
                    } }
                    onBlur={ ( event, editor ) => {
                        // console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        // console.log( 'Focus.', editor );
                    } }
                />
                <button className='btn-next' onClick={onNextHandler}>Next</button>
        </InputBoxContainer>
    )
}

const AskContainer = styled.div`
    background-color: #f3f3f3;
    padding-bottom: 50px;
    .ask-body {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 20px;
        min-width: 1000px;
        margin-left: 200px;
    }
    h1 {
        font-size: 2rem;
        margin-top: 10px;
        padding-top: 30px;
        padding-bottom: 30px;
    }
    .btn-group {
        display:flex;
        flex-direction: row;
        gap: 20px;
    }
    .btn-submit {
        background-color: #2982f6;
        border: none;
        color : white;
        width: 10rem;
        height: 3rem;
        font-size: 1rem;
    }
    .btn-cancel {
        border: none;
        color : #f62929;
        width: 8rem;
        height: 3rem;
        font-size: 1rem;
    }
`

const AskDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    background-color: #e6f5ff;
    border: 1px solid #b3d9f3;
    padding: 20px;
    min-width: 1000px;
    ul {
        padding-left: 10px;
    }
    li {
        list-style: disc;
        font-size: 1rem;
        margin-top: 10px;
    }
    p {
        font-size: 1.1rem;
    }
`

const InputBoxContainer = styled.div`
    background-color: white;
    ${(props) => props.disable ? `
        background-color: lightgray;
        pointer-events: none;
        filter: saturate(30%) opacity(50%);
    `: ''}
    border: 1px solid gray;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-width: 1000px;
    h4 {
        font-size: 1.1rem;
    }
    p {
        font-size: 0.8rem;
    }
    input {
        background-color: white;
        border: 1px solid gray;
        width: 100%;
        height: 35px;
        outline: none;
        font-size: 1rem;
    }
    .blinder {
        display: block;
        width: 100%;
        height: auto;
        background-color: gray;
        opacity: 0.5;
    }
    .btn-next {
        background-color: #2982f6;
        border: none;
        color : white;
        width: 7rem;
        height: 2.5rem;
        font-size: 1rem;
    }
`

export default Ask