import styled from 'styled-components';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { useRef } from 'react';
function CreateAnswer({ title, desc }) {
  const editorRef = useRef(null);
  const showEditorData = () => {
    console.log(editorRef.current?.getInstance().getHTML());
  };

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
  const EditorContainer = styled(Editor)``;

  return (
    <Container>
      <YourAnswer>Yor Answer</YourAnswer>
      <EditorContainer>
        <EditorBox previewStyle='vertical' initialEditType='WYSIWYG' useCommandShortcut={true} ref={editorRef} onFocus={showEditorData} />
      </EditorContainer>
      <ButtonContainer>
        <button>Post Your Answer</button>
      </ButtonContainer>
    </Container>
  );
}

export default CreateAnswer;
