import React, { useRef } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor, Viewer } from '@toast-ui/react-editor';
import styled from 'styled-components';

import { AskBoxStyle } from './AskStyle';
import axios from 'axios';

const Div = styled(AskBoxStyle)``;
const EditorBox = styled(Editor)`
  height: 255px;
`;

function TextEditor({ title, desc }) {
  const editorRef = useRef(null);

  const showEditorData = () => {
    console.log(editorRef.current?.getInstance());
  };

  return (
    <Div>
      <div>
        <label>{title}</label>
        <p>{desc}</p>
        <EditorBox previewStyle='vertical' initialEditType='wysiwyg' useCommandShortcut={true} ref={editorRef} onFocus={showEditorData} />
      </div>
      <button onClick={showEditorData}>Next</button>
    </Div>
  );
}

export default TextEditor;
