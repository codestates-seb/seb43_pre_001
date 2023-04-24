import styled from 'styled-components';
import QuestionsHead from './QuestionsMeterial/QuestionsHead';
import QuestionsList from './QuestionsMeterial/QuestionsList';
import LeftSideBar from '../StackSidebar/LeftSideBar';
import RightSideBar from '../StackSidebar/RightSideBar';
import PageBtn from './QuestionsMeterial/PageBtn';
import StackFoot from '../StackFoot/StackFoot';

import { useState } from 'react';
import { useSelector } from 'react-redux';
const Container = styled.div`
  position: relative;
  top: 50px;
  width: 100vw;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  .wrapper {
    margin: 0 auto;
    min-width: 1264px;
    display: flex;
  }
`;

const MainBox = styled.div`
  flex-grow: 1;
  display: flex;
  margin-left: 150px;
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

const Box = styled.div``;

const Questions = () => {
  //페이지 네이션 버튼관리
  const { accessToken } = useSelector((state) => state.auth);
  // console.log(accessToken);
  const [page, setPage] = useState('1');
  const [totalPage, setTotalPage] = useState(0);
  const clickPageNum = (e) => {
    if (e.target.textContent === 'prev') {
      setPage(String(page - 1));
    } else if (e.target.textContent === 'next') {
      // console.log(typeof (Number(page) + 1));
      setPage(String(Number(page) + 1));
    } else {
      setPage(e.target.textContent);
    }
    window.scrollTo(0, 0);
  };
  const setTotal = (num) => {
    setTotalPage(num);
  };
  return (
    <>
      <Container>
        <div className='wrapper'>
          <LeftSideBar />
          <MainBox>
            <QuestionsBox>
              <QuestionsHead />
              <QuestionsList page={page} setTotal={setTotal} />
              <PageBtn totalPage={totalPage} page={page} clickPageNum={clickPageNum} />
            </QuestionsBox>
            <RightSideBar />
          </MainBox>
        </div>
      </Container>
      <Box>
        <StackFoot />
      </Box>
    </>
  );
};

export default Questions;
