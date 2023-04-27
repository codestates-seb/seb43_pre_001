import { useSelector } from 'react-redux';
import styled from 'styled-components';

function DetailButton({ editFunction, deleteFunction, questionMemberId, answerMemberId, type }) {
  const { loggedIn, memberId } = useSelector((state) => state.user);
  return (
    <ButtonWrapper>
      {type === 'question' ? (
        loggedIn && memberId === questionMemberId ? (
          <>
            <QuestionButton onClick={editFunction}>Edit</QuestionButton>
            <QuestionButton onClick={deleteFunction}>Delete</QuestionButton>
          </>
        ) : null
      ) : loggedIn && memberId === answerMemberId ? (
        <>
          <QuestionButton onClick={editFunction}>Edit</QuestionButton>
          <QuestionButton onClick={deleteFunction}>Delete</QuestionButton>
        </>
      ) : null}
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.div``;
const QuestionButton = styled.button`
  border: none;
  background-color: transparent;
  margin: 4px;
  color: hsl(210deg 8% 45%);
`;

export default DetailButton;
