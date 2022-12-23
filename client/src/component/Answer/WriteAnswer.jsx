import React, { react, useState } from "react";
import styled from "styled-components";
import { AskButton, HrLine } from "../../page/Question";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Link } from "react-router-dom";

const Total = styled.div`
  margin-top: 40px;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;

  .ck.ck-editor__editable:not(.ck-editor__nested-editable) {
    min-height: 400px;
    margin-bottom: 20px;
    width: 995px;
  }

  h2 {
    margin-bottom: 30px;
  }
`;
const ClickAnswer = styled.div`
  /* width: 100%; */
  ul {
    height: 210px;
    padding: 20px;
    background-color: hsl(47, 83%, 91%);
    border: 1px solid hsl(47, 79%, 58%);
  }
  li {
    list-style: disc;
    margin-left: 30px;
  }
  p {
    padding: 9px;
  }
`;
const LoginSpan = styled.span`
  /* display: flex; */
  font-size: 15px;
  font-weight: 400;
  margin-left: 10px;

  .link {
    color: hsl(206, 100%, 40%);
  }
`;
function WriteAnswer() {
  const [Answer, setAnswer] = useState(false);

  const onClick = (e) => {
    setAnswer(true);
    e.preventDefault();
    console.log(Answer);
  };

  return (
    <Total>
      <div>
        {/* <HrLine top="20px" width="100%" /> */}

        <h2>Your Answer</h2>
        <CKEditor
          editor={ClassicEditor}
          data=""
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          config={{
            toolbar: {
              items: [
                "heading",
                "|",
                "bold",
                "italic",
                "link",
                "bulletedList",
                "numberedList",
                "|",
                "|",
                "imageUpload",
                "blockQuote",
                "insertTable",
                "mediaEmbed",
                "undo",
                "redo",
                "alignment",
                "fontSize",
                "highlight",
              ],
            },
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
        <ClickAnswer>
          {Answer ? (
            <ul>
              <p>Thanks for contributing an answer to Stack Overflow!</p>

              <li>
                Please be sure to answer the question. Provide details and share
                your research!
              </li>
              <p>But avoid …</p>

              <li>
                Asking for help, clarification, or responding to other answers.
              </li>
              <li>
                Making statements based on opinion; back them up with references
                or personal experience.
              </li>
              <p>To learn more, see our tips on writing great answers.</p>
            </ul>
          ) : null}
          <AskButton
            width="140px"
            height="55px"
            bottom="20px"
            top="20px"
            disabled=""
            onClick={onClick}
            // alert('댓글이 등록되었습니다'); e.target.style.display = "none";
          >
            Post Your Answer
          </AskButton>
        </ClickAnswer>
        <LoginSpan>
          <Link to="/login" className="link">
            Log in
          </Link>
          &nbsp;or&nbsp;
          <Link to="/signup" className="link">
            Sign Up
          </Link>
        </LoginSpan>
      </div>
    </Total>
  );
}

export default WriteAnswer;
