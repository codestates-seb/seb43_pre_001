import styled from 'styled-components';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { useRef, useEffect, useState, useLayoutEffect } from 'react';
import SharedButton from '../SharedButton';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  width: 727px;
`;
const YourAnswer = styled.div`
  padding: 20px 0px;
  font-size: 19px;
  border-top: 1px solid hsl(210deg 8% 90%);
`;
const ButtonContainer = styled.div`
  display: flex;
  padding: 10px 0px 15px 0px;
`;

const EditorBox = styled(Editor)`
  /* height: 255px; */
`;

const EditorContainer = styled.div``;
const QuestionBottom = styled.span`
  margin-top: 15px;
  font-size: 17px;
`;
const QuestionBottomAsk = styled.span`
  margin-top: 15px;
  font-size: 17px;
  color: hsl(206deg 100% 40%);
  cursor: pointer;
  text-decoration: none;
  :hover {
    color: hsl(206deg 100% 52%);
  }
`;
function CreateAnswer({ questionId, initialValue = '' }) {
  const { memberId } = useSelector((state) => state.user);
  const { accessToken } = useSelector((state) => state.auth);
  const [isValid, setIsValid] = useState(false);
  const [text, setText] = useState('');
  const content = useSelector((state) => state.answerContent);
  const editorRef = useRef(null);
  const navigate = useNavigate();

  const requestBody = {
    memberId,
    questionId,
    content: text,
  };

  const onChangeEditor = () => {
    setText(editorRef.current?.getInstance().getMarkdown());
  };

  useEffect(() => {}, [text]);
  const baseURL = process.env.REACT_APP_BASE_URL;
  const postAnswer = async () => {
    // if (isValidHandler()) {
    // console.log(requestBody);
    if (text.length < 30) {
      setIsValid(false);
    } else {
      const response = await axios.post(`${baseURL}/answers`, requestBody, {
        headers: {
          'ngrok-skip-browser-warning': '69420',
          'Content-Type': 'application/json',
          Authorization: accessToken,
        },
        withCredentials: true,
      });
      console.log(response);
      setText('');
      setIsValid(true);
      window.scrollTo(0, 0);
      editorRef.current?.getInstance().reset();
      window.location.reload();
    }
  };
  const resetEditor = () => {
    editorRef.current?.getInstance().reset();
  };
  useLayoutEffect(() => {
    resetEditor();
  }, [initialValue]);
  return (
    <Container>
      <QuestionBottom>
        {`Know someone who can answer? Share a link to this `}
        <QuestionBottomAsk>{`question`}</QuestionBottomAsk>
        {` via `} <QuestionBottomAsk>{`email`}</QuestionBottomAsk>
        {`,`}
        <QuestionBottomAsk>{`Twitter`}</QuestionBottomAsk>
        {`, or `} <QuestionBottomAsk>{`Facebook`}</QuestionBottomAsk>
        {`.`}
      </QuestionBottom>
      <YourAnswer>Your Answer</YourAnswer>
      <EditorContainer>
        <EditorBox
          previewStyle='tab'
          initialEditType='markdown'
          initialValue=''
          hideModeSwitch={true}
          useCommandShortcut={true}
          ref={editorRef}
          onChange={onChangeEditor}
        />
      </EditorContainer>
      <ButtonContainer>
        <SharedButton buttonText='Post Your Answer' functionHandler={postAnswer} />
      </ButtonContainer>
    </Container>
  );
}

export default CreateAnswer;
