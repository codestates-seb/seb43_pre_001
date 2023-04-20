import styled from 'styled-components';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { useRef } from 'react';
import SharedButton from '../SharedButton';

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

function CreateAnswer({ title, desc }) {
  const editorRef = useRef(null);
  const showEditorData = () => {
    console.log(editorRef.current?.getInstance().getHTML());
  };

  return (
    <Container>
      <YourAnswer>Your Answer</YourAnswer>
      <EditorContainer>
        <label>{title}</label>
        <p>{desc}</p>
        <EditorBox previewStyle='vertical' initialEditType='wysiwyg' useCommandShortcut={true} ref={editorRef} onFocus={showEditorData} />
      </EditorContainer>
      <ButtonContainer>
        <SharedButton buttonText='Post Your Answer' />
      </ButtonContainer>
    </Container>
  );
}

export default CreateAnswer;
