import styled from 'styled-components';
import QuestionsCard from './QuestionsCard';
import Loading from './Loading';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect, useLayoutEffect } from 'react';
import { setQuestions, setPageInfo } from '../../../reducer/questionSlice';
import axios from 'axios';

// import usePromise from '../../../hooks/usePromise';

const QuestionsListBox = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(132px * 3);
`;
const QuestionsList = ({ page, setTotal }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  //token 받아오기
  const { accessToken } = useSelector((state) => state.auth);

  // questions 전역 상태관리
  const questions = useSelector((state) => state.questions);

  // page 정보 상태관리
  const pageInfo = useSelector((state) => state.pageInfo);

  const dispatch = useDispatch();

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`/api/questions?page=${page}&size=3`, {
          headers: {
            Authorization: accessToken,
          },
        });
        // 데이터를 전역 store에 저장하기위함
        dispatch(setQuestions(response.data.data));
        dispatch(setPageInfo(response.data.pageInfo));
        setTotal(response.data.pageInfo.totalPages);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    process();
  }, [page]);
  //최초 렌더링시 undefined, 렌더링 직후 useEffect로 데이터를 받기에 아래와 같이 분기처리
  // 로딩중이면 로딩컴포넌트 보여주기, 추후에 만들기
  if (loading) {
    return (
      <QuestionsListBox>
        <Loading />
      </QuestionsListBox>
    );
  }
  // 받아온 응답이 없다면
  if (!questions.questionsList) return null;
  // catch문의 Error처리
  if (error) {
    return <QuestionsListBox>에러 발생...</QuestionsListBox>;
  }
  return (
    <>
      <QuestionsListBox>
        {questions.questionsList &&
          questions.questionsList.map((el) => {
            return <QuestionsCard key={el.questionId} question={el} />;
          })}
      </QuestionsListBox>
    </>
  );
};

export default QuestionsList;
