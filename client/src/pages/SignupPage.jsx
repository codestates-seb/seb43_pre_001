import styled from 'styled-components';
import HeadNotLogin from '../components/StackHead/HeadNotLogin';
import StackSignup from '../components/StackSignup/StackSignup';

const SignupPageBlock = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }

  & {
    overflow-y: scroll;
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */
  }
`;

const SignupPage = () => {
  return (
    <SignupPageBlock>
      <HeadNotLogin />
      <StackSignup />
    </SignupPageBlock>
  );
};

export default SignupPage;
