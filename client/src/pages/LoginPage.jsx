import styled from 'styled-components';
import HeadNotLogin from '../components/StackHead/HeadNotLogin';
import StackLogin from '../components/StackLogin/StackLogin';

const LoginPageBlock = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }

  & {
    overflow-y: scroll;
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */
  }
`;

const LoginPage = () => {
  return (
    <LoginPageBlock>
      <HeadNotLogin />
      <StackLogin />
    </LoginPageBlock>
  );
};

export default LoginPage;
