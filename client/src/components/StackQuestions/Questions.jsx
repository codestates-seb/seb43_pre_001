import styled from 'styled-components';
import QuestionsHead from './QuestionsMeterial/QuestionsHead';
import QuestionsList from './QuestionsMeterial/QuestionsList';
import LeftSideBar from '../StackSidebar/LeftSideBar';
import RightSideBar from '../StackSidebar/RightSideBar';
import PageBtn from './QuestionsMeterial/PageBtn';
import StackFoot from '../StackFoot/StackFoot';

const Container = styled.div`
  position: relative;
  top: 50px;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .wrapper {
    margin: 0 auto;
    max-width: 1246px;
    display: flex;
  }
`;

const MainBox = styled.div`
  flex-grow: 1;
  display: flex;
  margin-left: 164px;
  border-left: 1px solid #d6d9dc;
`;

const QuestionsBox = styled.div`
  flex-grow: 1;
  min-width: 444px;
  max-width: 719px;
  display: flex;
  flex-direction: column;
  padding: 0 24px 24px 0;
`;

const Questions = ({ curTab, onTabSelect }) => {
  return (
    <>
      <Container>
        <div className='wrapper'>
          <LeftSideBar curTab={curTab} onTabSelect={onTabSelect} />
          <MainBox>
            <QuestionsBox>
              <QuestionsHead />
              <QuestionsList onTabSelect={onTabSelect} />
              <PageBtn />
            </QuestionsBox>
            <RightSideBar />
          </MainBox>
        </div>
        <StackFoot />
      </Container>
    </>
  );
};

export default Questions;
