import AskPageContents from '../components/Ask/AskPageContents';
import styled from 'styled-components';
import HeadLogin from '../components/StackHead/HeadLogin';
import HeadNotLoginMain from '../components/StackHead/HeadNotLoginMain';
import StackFoot from '../components/StackFoot/StackFoot';
import { useSelector } from 'react-redux';

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  min-height: 750px;
  overflow: visible;
  background-color: transparent;
`;
function AskPage() {
  const { loggedIn } = useSelector((state) => state.user);

  return (
    <>
      {loggedIn ? <HeadLogin /> : <HeadNotLoginMain />}
      <Content>
        <AskPageContents />
      </Content>
      <StackFoot />
    </>
  );
}

export default AskPage;
