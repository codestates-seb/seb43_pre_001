// import InputTags from '../../components/Ask/InputTags';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import Markdown from '../Markdown';
import InputTitle from '../Ask/InputTitle';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import TextEditor from '../Ask/TextEditor';
import { setContent, setTitle, setAllTags } from '../../reducer/askSlice';
import SharedButton from '../SharedButton';

const EditContentWrapper = styled.div`
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

const EditorBox = styled(TextEditor)``;

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
// 질문 수정: 질문 title, 질문 content, 질문 tags
// 답변 수정: 질문 title, 질문 content, 답변 content
function EditAsk() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { answer, question } = state;
  console.log(answer);
  let { title, allTags } = useSelector((state) => state.ask);
  let Qcontent = useSelector((state) => state.ask.content);
  let Acontent = useSelector((state) => state.answer.content);

  let requestBody = answer
    ? {
        content: Acontent,
        title,
        memberId: 1,
      }
    : {
        content: Qcontent,
        title,
        memberId: 1,
      };

  // 질문/답변 수정
  const url = answer ? `/answers.{answer_id}` : `/questions/{question_id}`;
  console.log(url);
  const patchHandler = async () => {
    await axios
      .patch(url, requestBody, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: ``,
        },
        withCredentials: true,
      })
      .then(function (response) {
        console.log(response);
        navigate(`/questions/${question.question_id}`);
        dispatch(setContent(null), setTitle(null), setAllTags(null));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleCancel = () => {
    navigate(`/questions/${question.question_id}`);
    dispatch(setContent(null), setTitle(null), setAllTags(null));
  };

  return (
    <EditContentWrapper>
      {answer ? null : <EditTitle quseiontTitle='Title' defaultValue={question.title} />}
      {answer ? (
        <>
          <QuestionTitle
            onClick={() => {
              navigate(`/questions/${question.question_id}`);
            }}
          >
            {question.title}
          </QuestionTitle>
          <Preview content={question.content} />
        </>
      ) : null}
      <EditorBox title={answer ? 'Answer' : 'Body'} initialValue={answer ? answer.content : question.content} />
      <Preview content={answer ? Acontent : Qcontent} />
      {/* {answer ? null : <InputTags defaultValue={question.tags} />} */}
      <SaveEditsOrCancel>
        <SharedButton buttonText='Save edits' functionHandler={patchHandler} />
        <CancelButton onClick={handleCancel}>Cancel</CancelButton>
      </SaveEditsOrCancel>
    </EditContentWrapper>
  );
}

export default EditAsk;
