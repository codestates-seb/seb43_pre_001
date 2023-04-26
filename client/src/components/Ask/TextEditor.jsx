import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import styled from 'styled-components';
import { useRef, useEffect, useState, useLayoutEffect } from 'react';
import { AskBoxStyle } from './AskStyle';
import { useDispatch, useSelector } from 'react-redux';
import { setContent, setContentFocus, setDiscardEditor } from '../../reducer/askSlice';
import { setAnswerContent } from '../../reducer/answerSlice';
import SharedButton from '../SharedButton';

const Div = styled(AskBoxStyle)`
  ${(props) => (props.desc ? '.toastui-editor-defaultUI' : '.toastui-editor-main-container')} {
    border-width: 1px;
    border-style: solid;
    border-color: ${(props) => {
      if (props.contentFocus) {
        return props.contentErrorMsg ? 'hsl(358deg 68% 59%)' : 'hsl(206deg 90% 70%)';
      }
    }};
    box-shadow: ${(props) => {
      if (props.contentFocus) {
        return props.contentErrorMsg ? '0 0 0 4px hsl(0deg 46% 92%)' : '0 0 0 4px hsl(206deg 65% 91%)';
      }
    }};
  }

  .toastui-editor-main-container {
    border: ${(props) => {
      if (!props.contentFocus) return 'none';
    }};
  }
`;

const EditorBox = styled(Editor)`
  height: 255px;
`;

function TextEditor({ title, desc = null, initialValue = '', onChange, ref }) {
  const [contentErrorMsg, setContentErrorMsg] = useState(null);
  const { contentFocus, discardEditor } = useSelector((state) => state.ask);
  const editorRef = useRef(null);
  const dispatch = useDispatch();
  const content = title === 'Body' ? useSelector((state) => state.ask) : useSelector((state) => state.answerContent);

  const setContentText = () => {
    title === 'Body'
      ? dispatch(setContent(editorRef.current?.getInstance().getMarkdown()))
      : dispatch(setAnswerContent(editorRef.current?.getInstance().getMarkdown()));
  };

  //유효성 검사
  let isContentValid = false;
  let validationContent = () => {
    if (!content?.length) {
      isContentValid = false;
      setContentErrorMsg('Body is missing.');
    } else if (content?.length < 30) {
      isContentValid = false;
      setContentErrorMsg('Body must be at least 30 characters.');
    } else {
      isContentValid = true;
      setContentErrorMsg('');
    }
  };

  useEffect(() => {
    validationContent();
  }, [content]);

  // focus 상태 변경
  const onEditorFocus = () => {
    dispatch(setContentFocus(true));
  };
  const onEditorBlur = () => {
    dispatch(setContentFocus(false));
  };
  const resetEditor = () => {
    editorRef.current?.getInstance().reset();
    dispatch(setDiscardEditor(false));
  };
  useEffect(() => {
    if (discardEditor) {
      resetEditor();
    }
  }, [discardEditor]);

  //에디터 초기값 초기화되지 않는 문제 해결
  useLayoutEffect(() => {
    resetEditor();
  }, [initialValue]);

  return (
    <Div contentErrorMsg={contentErrorMsg} contentFocus={contentFocus} desc={desc}>
      <div>
        <label>{title}</label>
        <p>{desc}</p>

        <EditorBox
          previewStyle='tab'
          initialEditType='markdown'
          hideModeSwitch={true}
          useCommandShortcut={true}
          ref={editorRef}
          onKeyup={setContentText}
          onFocus={onEditorFocus}
          onBlur={onEditorBlur}
          initialValue={initialValue}
          onChange={onChange}
        />
      </div>
      {/* <MainButton buttonText="Next" /> */}
      {isContentValid ? null : <div>{contentErrorMsg}</div>}
    </Div>
  );
}

export default TextEditor;
