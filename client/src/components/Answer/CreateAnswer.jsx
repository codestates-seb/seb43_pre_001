import styled from 'styled-components';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { useRef, useEffect, useState } from 'react';
import SharedButton from '../SharedButton';
import axios from 'axios';
import { ask } from '../../assets/askNoticeData';

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
  height: 255px;
`;

const EditorContainer = styled.div``;

function CreateAnswer({ question }) {
  const [text, setText] = useState('');
  const editorRef = useRef(null);
  // const { question_id } = question;

  const showEditorData = () => {
    console.log(editorRef.current?.getInstance().getMarkdown());
  };
  const onChangeEditor = () => {
    console.log(editorRef.current?.getInstance().getMarkdown());
  };
  /*
작성 
{
    "question_id" : long,
    "member_id" : long,
    "content" : String
}

수정
{
    "member_id" : long,
    "content" : String
}
*/

  const handleClick = () => {
    setText(editorRef.current?.getInstance().getMarkdown());
    axios
      .post('/questions', {
        // question_id,
        nickname: '',
        content: text,
      })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };
  return (
    <Container>
      <YourAnswer>Your Answer</YourAnswer>
      <EditorContainer>
        <EditorBox
          previewStyle='vertical'
          initialEditType='wysiwyg'
          useCommandShortcut={true}
          ref={editorRef}
          hideModeSwitch={true}
          onFocus={showEditorData}
          onChange={onChangeEditor}
        />
      </EditorContainer>

      <ButtonContainer>
        <SharedButton buttonText='Post Your Answer' />
      </ButtonContainer>
    </Container>
  );
}

export default CreateAnswer;
