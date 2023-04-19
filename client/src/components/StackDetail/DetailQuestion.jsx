import styled from 'styled-components';
import DetailHead from './DetailMeterial/DetailHead';
import DetailView from './DetailMeterial/DetailView';
import LeftSideBar from '../StackSidebar/LeftSideBar';
import RightSideBar from '../StackSidebar/RightSideBar';
import initialData from '../initialData';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Container = styled.div`
  position: relative;
  top: 50px;
  width: 100vw;
  height: 100vh;
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
  flex-direction: column;
  margin-left: 164px;
  padding: 24px;
  min-width: 800px;
  div.hr-line {
    margin-top: 12px;
    border-bottom: 1.5px solid #d6d9dc;
  }
`;

const DetailQuestion = ({ curTab, onTabSelect }) => {
  const { question_id } = useParams();

  const [question, setQuestion] = useState();
  console.log(question);
  useEffect(() => {
    const data = initialData.filter((el) => el.question_id === Number(question_id));
    if (!data) console.log('error');
    setQuestion(data);
  }, []);
  return (
    <>
      {question && (
        <Container>
          <div className='wrapper'>
            <LeftSideBar curTab={curTab} onTabSelect={onTabSelect} />
            <MainBox>
              <DetailHead question={question} />
              <DetailView question={question}></DetailView>
            </MainBox>
          </div>
        </Container>
      )}
    </>
  );
};

export default DetailQuestion;
