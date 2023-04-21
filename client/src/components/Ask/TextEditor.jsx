import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import styled from 'styled-components';
import { useRef, useEffect, useState } from 'react';
import { AskBoxStyle } from './AskStyle';
import { useDispatch, useSelector } from 'react-redux';
import { setContent, setContentFocus, setDiscardEditor } from '../../reducer/askSlice';
import { setContent as setAnswerContent } from '../../reducer/answerSlice';
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
  height: 254.664px;
`;

function TextEditor({ title, desc = null, initialValue = '' }) {
  const [contentErrorMsg, setContentErrorMsg] = useState(null);
  const { contentFocus, discardEditor } = useSelector((state) => state.ask);
  const editorRef = useRef(null);
  const dispatch = useDispatch();
  const { content } = desc ? useSelector((state) => state.ask) : useSelector((state) => state.answer);

  const setContentText = () => {
    desc
      ? dispatch(setContent(editorRef.current?.getInstance().getMarkdown()))
      : dispatch(setAnswerContent(editorRef.current?.getInstance().getMarkdown()));
  };

  // const showEditorData = () => {
  //   console.log(editorRef.current?.getInstance().getHTML());
  // };

  //유효성 검사
  let isContentValid = false;
  let validationContent = () => {
    if (!content?.length) {
      isContentValid = false;
      setContentErrorMsg('Body is missing.');
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
        />
      </div>
      {/* <MainButton buttonText="Next" /> */}
      {isContentValid ? null : <div>{contentErrorMsg}</div>}
    </Div>
  );
}

export default TextEditor;
