import styled from 'styled-components';
import QuestionsHead from './QuestionsMeterial/QuestionsHead';
import QuestionsList from './QuestionsMeterial/QuestionsList';
import LeftSideBar from '../StackSidebar/LeftSideBar';
import RightSideBar from '../StackSidebar/RightSideBar';
const Container = styled.div`
  position: relative;
  top: 50px;
  width: 100vw;
  height: 100vh;
  border-top: 2.5px solid #e8e8e8;
  .wrapper {
    margin: 0 auto;
    max-width: 1246px;
    height: 100%;
    display: flex;
  }
`;

const MainBox = styled.div`
  flex-grow: 1;
  display: flex;
  padding-left: 164px;
`;

const QuestionsBox = styled.div`
  flex-grow: 1;
  min-width: 444px;
  max-width: 719px;
  display: flex;
  flex-direction: column;
  padding: 0 24px 24px 0;
`;

const Questions = () => {
  return (
    <>
      <Container>
        <div className='wrapper'>
          <LeftSideBar />
          <MainBox>
            <QuestionsBox>
              <QuestionsHead />
              <QuestionsList />
            </QuestionsBox>
            <RightSideBar />
          </MainBox>
        </div>
      </Container>
    </>
  );
};

export default Questions;
