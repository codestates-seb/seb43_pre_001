import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import styled from 'styled-components';
import { useRef } from 'react';
import { AskBoxStyle } from './AskStyle';
function TextEditor({ title, desc }) {
  const editorRef = useRef(null);

  const showNotice = () => {
    console.log(editorRef.current?.getInstance().getHTML());
  };

  return (
    <Div>
      <div>
        <label>{title}</label>
        <p>{desc}</p>
        <EditorBox previewStyle='vertical' initialEditType='wysiwyg' useCommandShortcut={true} ref={editorRef} onFocus={showNotice} />
      </div>
      <button onClick={showNotice}>Next</button>
    </Div>
  );
}

const Div = styled(AskBoxStyle)``;

const EditorBox = styled(Editor)`
  height: 255px;
`;
export default TextEditor;
