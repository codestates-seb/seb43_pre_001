import AskPageContents from '../components/Ask/AskPageContents';
import styled from 'styled-components';
import HeadLogin from '../components/StackHead/HeadLogin';
import StackFoot from '../components/StackFoot/StackFoot';

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  min-height: 750px;
  overflow: visible;
  background-color: transparent;
`;
function Ask() {
  return (
    <>
      <HeadLogin />
      <Content>
        <AskPageContents />
      </Content>
      <StackFoot />
    </>
  );
}

export default Ask;
