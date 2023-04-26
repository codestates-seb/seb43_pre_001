import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Editor } from '@toast-ui/react-editor';
import Markdown from '../Markdown';
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
function EditAnswer() {
  const answerEdit = useSelector((state) => state.answer);
  const questionsEdit = useSelector((state) => state.questions);
  const { answerId } = answerEdit;
  const { memberId } = questionsEdit.question.member;
  const { questionId } = questionsEdit.question;
  const { accessToken } = useSelector((state) => state.auth);
  const [newContent, setNewContent] = useState(answerEdit.content);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const editorRef = useRef(null);
  const requestBody = {
    content: newContent,
    memberId,
  };

  // 질문 수정

  const baseURL = process.env.REACT_APP_BASE_URL;
  const patchHandler = async () => {
    await axios
      .patch(`${baseURL}/answers/${answerId}`, requestBody, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: accessToken,
        },
        withCredentials: true,
      })
      .then(function (response) {
        dispatch(setContent(null), setTitle(null), setAllTags(null));
        navigate(`/questions/${questionId}`);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleCancel = () => {
    navigate(`/questions/${questionId}`);
    dispatch(setContent(null), setTitle(null), setAllTags(null));
  };

  const onChangeEditor = () => {
    setNewContent(editorRef.current?.getInstance().getMarkdown());
  };

  return (
    <EditContentWrapper>
      <EditorBox title={'Body'} ref={editorRef} initialValue={newContent} hideModeSwitch={true} onChange={onChangeEditor} />
      <Preview content={newContent} />
      <SaveEditsOrCancel>
        <SharedButton buttonText='Save edits' functionHandler={patchHandler} />
        <CancelButton onClick={handleCancel}>Cancel</CancelButton>
      </SaveEditsOrCancel>{' '}
    </EditContentWrapper>
  );
}

export default EditAnswer;
