import styled from 'styled-components';
import QuestionsCard from './QuestionsCard';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { setQuestions } from '../../../reducer/questionSlice';
import axios from 'axios';
// import usePromise from '../../../hooks/usePromise';

const QuestionsListBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const QuestionsList = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // questions 전역 상태관리
  const questions = useSelector((state) => state.questions);
  const dispatch = useDispatch();
  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`/questions?page=1&size=10`, {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJVU0VSIl0sInVzZXJuYW1lIjoidzFAbmF2ZXIuY29tIiwic3ViIjoidzFAbmF2ZXIuY29tIiwiaWF0IjoxNjgyMDU3MDYwLCJleHAiOjE2ODIwNTg4NjB9.X94BTkTPpDEMfAjIOmzGWq6ungtCJGrN4W-cs5qbAYo',
          },
        });
        // 데이터를 전역 store에 저장하기위함
        dispatch(setQuestions(response.data.data));
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    process();
  }, []);
  //최초 렌더링시 undefined, 렌더링 직후 useEffect로 데이터를 받기에 아래와 같이 분기처리
  // 로딩중이면 로딩컴포넌트 보여주기, 추후에 만들기
  if (loading) {
    return <QuestionsListBox>로딩중...</QuestionsListBox>;
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
