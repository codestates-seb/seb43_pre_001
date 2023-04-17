import styled from 'styled-components';
import QuestionsHead from '../components/Questions/QuestionsHead';
import QuestionsList from '../components/Questions/QuestionsList';
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
const LeftSideBar = styled.div`
  width: 166px;
  height: 100%;
  padding-top: 24px;
  margin-bottom: 8px;
  border-right: 1px solid #d6d9dc;
`;

const MainBox = styled.div`
  flex-grow: 1;
  /* padding: 24px; */
  display: flex;
`;

const QuestionsBox = styled.div`
  flex-grow: 1;
  min-width: 444px;
  display: flex;
  flex-direction: column;
`;

const SideBox = styled.div`
  width: 300px;
  margin: 0 0 15px 24px;
  border: 1px solid;
  padding: 24px 24px 0 0;
  height: 100%;
  background-color: blue;
`;

const Questions = () => {
  return (
    <>
      <Container>
        <div className='wrapper'>
          <LeftSideBar>사이드바 영역</LeftSideBar>
          <MainBox>
            <QuestionsBox>
              <QuestionsHead />
              <QuestionsList />
            </QuestionsBox>
            <SideBox>사이드바 영역</SideBox>
          </MainBox>
        </div>
      </Container>
    </>
  );
};

export default Questions;
