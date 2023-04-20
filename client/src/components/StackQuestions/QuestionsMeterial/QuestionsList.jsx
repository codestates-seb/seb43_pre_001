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
const QuestionsList = ({ onTabSelect }) => {
  /*
  usePromist이용해보기
  API에서 응답값 들고오기
  각 action명, axious메서드, 의존성배열 넘겨주기
  const [loading, resolved, error] = usePromise(
    () => {
      return axios.get(`http://localhost:4000/questions`);
    },
    [],
    setQuestions(),
  );
  */

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // questions 전역 상태관리
  const questions = useSelector((state) => state.questions);
  const dispatch = useDispatch();
  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:4000/questions`);
        // 데이터를 전역 store에 저장하기위함
        dispatch(setQuestions(response.data));
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
            return <QuestionsCard key={el.question_id} question={el} onTabSelect={onTabSelect} />;
          })}
      </QuestionsListBox>
    </>
  );
};

export default QuestionsList;
