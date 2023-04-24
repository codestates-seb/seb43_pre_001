import { useSelector } from 'react-redux';
import styled from 'styled-components';
function DetailButton({ editFunction, deleteFunction, qMemberId, aMemberId }) {
  const loggedIn = useSelector((state) => state.loggedIn);
  const member_id = useSelector((state) => state.member_id);
  const loginMemberId = Number(member_id);
  const QnAMemberId = qMemberId || aMemberId;

  return (
    <ButtonWrapper>
      <QuestionButton>Share</QuestionButton>
      {/* {loggedIn && loginMemberId === QnAMemberId ? ( */}
      <>
        <QuestionButton onClick={editFunction}>Edit</QuestionButton>
        <QuestionButton onClick={deleteFunction}>Delete</QuestionButton>
        <QuestionButton>Flag</QuestionButton>
      </>
      {/* ) : ( */}
      <QuestionButton>Follow</QuestionButton>
      {/* ) */}
      {/* } */}
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
