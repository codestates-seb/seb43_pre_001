import { Editor, Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setContent, setContentErrorMsg } from '../../reducer/askSlice';
import axios from 'axios';

import { AskBoxStyle } from './AskStyle';
import SharedButton from '../SharedButton';

const Div = styled(AskBoxStyle)``;
const EditorBox = styled(Editor)`
  height: 255px;
`;

function TextEditor({ title, desc }) {
  const editorRef = useRef(null);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const setContentText = () => {
    dispatch(setContent(editorRef.current?.getInstance().getMarkdown()));
    console.log(state.ask.content);
    editorRef.current?.getInstance().isViewer();
    //  console.log(editorRef.current?.getInstance().getHTML());
  };

  const showEditorData = () => {
    console.log(editorRef.current?.getInstance().getHTML());
  };

  let isContentValid = false;
  const validationContent = () => {
    if (!state.ask.content?.length) {
      isContentValid = false;
      dispatch(setContentErrorMsg('Body is missing'));
    } else {
      isContentValid = true;
      dispatch(setContentErrorMsg(''));
    }
  };
  useEffect(() => {
    validationContent();
    if (state.ask.titleErrorMsg) {
      console.log(state.ask.titleErrorMsg);
      editorRef.current.getInstance().blur();
    } else {
      editorRef.current.getInstance().focus();
    }
  }, [state]);
  return (
    <Div>
      <div>
        <label>{title}</label>
        <p>{desc}</p>
        <EditorBox previewStyle='vertical' initialEditType='wysiwyg' useCommandShortcut={true} ref={editorRef} onKeydown={setContentText} />
      </div>
      <SharedButton buttonText='Next' onClick={showEditorData}></SharedButton>
      {isContentValid ? null : <div>{state.ask.contentErrorMsg}</div>}
    </Div>
  );
}

export default TextEditor;
