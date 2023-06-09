import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Editor } from '@toast-ui/react-editor';
import Markdown from '../Markdown';
import InputTitle from '../Ask/InputTitle';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setContent, setTitle, setAllTags } from '../../reducer/askSlice';
import SharedButton from '../SharedButton';
import { useState, useRef, useEffect } from 'react';

const EditContentWrapper = styled.div`
  margin-top: 50px;
  background-color: white;
  width: 662px;
  > div {
    border: none;
    width: 100%;
    padding: 0 0 15px;
  }
`;

const Preview = styled(Markdown)`
  white-space: normal;
  word-wrap: break-word;
  > p {
    margin-bottom: 16.5px;
  }
`;

const EditTitle = styled(InputTitle)``;

const EditorBox = styled(Editor)``;

const SaveEditsOrCancel = styled.div`
  display: flex;
`;

const QuestionTitle = styled.a`
  display: block;
  margin: 16px 0;
  color: hsl(209deg 100% 38%);
  font-size: 1.30769231rem;
  cursor: pointer;
`;

const CancelButton = styled.button`
  border: none;
  color: hsl(206deg 100% 40%);
  padding: 10.4px;
  background-color: transparent;
  letter-spacing: 0.03rem;
  cursor: pointer;
  :hover {
    background-color: hsl(210deg 100% 97%);
  }
`;
function EditQuestion() {
  const questionsEdit = useSelector((state) => state.questions);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { memberId } = questionsEdit.question.member;
  const { questionId, content } = questionsEdit.question;
  const { title } = useSelector((state) => state.questions.question);
  const { accessToken } = useSelector((state) => state.auth);
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);
  const editorRef = useRef(null);

  const requestBody = {
    content: newContent,
    title: newTitle,
    memberId,
  };

  // 질문 수정
  const baseURL = process.env.REACT_APP_BASE_URL;
  const patchHandler = async () => {
    if (!isValidHandler()) {
      return;
    } else {
      await axios
        .patch(`${baseURL}/questions/${questionId}`, requestBody, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: accessToken,
          },
          withCredentials: true,
        })
        .then(function (response) {
          navigate(`/questions/${questionId}`);
          dispatch(setContent(null), setTitle(null), setAllTags(null));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const handleCancel = () => {
    navigate(`/questions/${questionId}`);
    dispatch(setContent(null), setTitle(null), setAllTags(null));
  };

  const onChangeTitle = (e) => {
    setNewTitle(e.target.value);
    // setQuestions.question.title(e.target.value);
  };
  const onChangeEditor = () => {
    setNewContent(editorRef.current?.getInstance().getMarkdown());
  };
  const isValidHandler = () => {
    return newContent?.length >= 30;
  };
  return (
    <EditContentWrapper>
      <EditTitle quseiontTitle='Title' defaultValue={newTitle} onChange={onChangeTitle} />
      <EditorBox title={'Body'} ref={editorRef} initialValue={content} hideModeSwitch={true} onChange={onChangeEditor} />
      {!isValidHandler() ? <div style={{ color: 'red' }}>must be at least 30 characters.</div> : null}
      <Preview content={newContent} />
      <SaveEditsOrCancel>
        <SharedButton buttonText='Save edits' functionHandler={patchHandler} />
        <CancelButton onClick={handleCancel}>Cancel</CancelButton>
      </SaveEditsOrCancel>{' '}
    </EditContentWrapper>
  );
}

export default EditQuestion;
