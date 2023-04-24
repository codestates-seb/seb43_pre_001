import styled from 'styled-components';
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';
import { setContent } from '../../reducer/answerSlice';
import { useDispatch, useSelector } from 'react-redux';
import Markdown from '../Markdown';
import axios from 'axios';
import DetailButton from '../StackDetail/DetailMeterial/DetailButton';

const AnswerContent = ({ answer, question, answers, setAnswers }) => {
  const { memberId } = useSelector((state) => state.user);
  const { accessToken } = useSelector((state) => state.auth);
  console.log(answer);
  let dispatch = useDispatch();
  const navigate = useNavigate();
  // 답변 수정 페이지 이동

  const navigateToEditPage = () => {
    navigate(`/answers/${answer.answerId}/edit`, {
      state: { answer, question },
    });
    dispatch(setContent(answer.content));
  };

  // 답변 삭제
  const deleteAnswer = async () => {
    if (confirm(`Delete this post?`)) {
      await axios
        .delete(`/answers`, {
          data: {
            memberId,
            answerId: answer.answerId,
          },
          headers: {
            'Content-Type': 'application/json',
            Authorization: accessToken,
          },
          withCredentials: true,
        })
        .then(() => {
          setAnswers(answers.filter((el) => el.answerId !== answer.answerId));
        });
    } else {
      return false;
    }
  };

  return (
    <Container>
      <VoteContainer>
        <VoteUpButton size='45px'></VoteUpButton>
        <VoteNum>0</VoteNum>
        <VoteDownButton size='45px'></VoteDownButton>
      </VoteContainer>
      <ContentContainer>
        <Markdown content={answer.content} />
        <ButtonsAndProfile>
          <DetailButton editFunction={navigateToEditPage} deleteFunction={deleteAnswer} aMemberId={answer.memberId} />
        </ButtonsAndProfile>
      </ContentContainer>
    </Container>
  );
};
const Container = styled.div`
  width: 727px;
  padding: 16px 0px;
  border-bottom: 1px solid hsl(210deg 8% 90%);
  display: flex;
`;
const VoteContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const VoteUpButton = styled(GoTriangleUp)`
  color: hsl(210deg 8% 75%);
  cursor: pointer;
`;
const VoteNum = styled.div`
  align-self: center;
  font-size: 21px;
  color: hsl(210deg 8% 45%);
`;
const VoteDownButton = styled(GoTriangleDown)`
  color: hsl(210deg 8% 75%);
  cursor: pointer;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-left: 25px;
  width: 657px;
  word-wrap: break-word;
`;

const ButtonsAndProfile = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
`;

export default AnswerContent;
