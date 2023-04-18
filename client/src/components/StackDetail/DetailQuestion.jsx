import styled from 'styled-components';
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
  div.hr-line {
    margin-top: 12px;
    border-bottom: 1.5px solid #d6d9dc;
  }
`;

const DetailHead = styled.div`
  /* min-width: 750px; */
  display: flex;
  justify-content: space-between;
  div {
    font-size: 27px;
    font-weight: 400;
    line-height: 36.45px;
    color: rgb(59, 64, 69);
  }
  button {
    flex-shrink: 0;
    width: 104px;
    height: 38px;
    text-shadow: 0 0 0 #fff;
    border: 1px solid #fff;
    color: #fff;
    background-color: rgb(10, 149, 255);
    border-radius: 4px;
    :hover {
      background-color: #3272c6;
    }
  }
`;
const DetailInfo = styled.div`
  margin-top: 6px;
  font-size: 13px;
  font-weight: 400;
  line-height: 17px;
  color: rgb(106, 115, 124);
  span {
    color: rgb(35, 38, 41);
    margin-right: 10px;
  }
`;

const DetailQuestion = ({ curTab, onTabSelect }) => {
  const { question_id } = useParams();

  const [question, setQuestion] = useState();

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
              <DetailHead>
                <div>{question[0].title}</div>
                <button>Ask Question</button>
              </DetailHead>
              <DetailInfo>
                Asked <span>today</span> Modified <span>today</span> Viewed <span>3 times</span>
              </DetailInfo>
              <div className='hr-line'></div>
            </MainBox>
          </div>
        </Container>
      )}
    </>
  );
};

export default DetailQuestion;
