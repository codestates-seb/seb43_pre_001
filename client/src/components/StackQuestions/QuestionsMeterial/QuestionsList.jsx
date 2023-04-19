import styled from 'styled-components';
import QuestionsCard from './QuestionsCard';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { getAllQuestions } from '../../../reducer/questionSlice';

const QuestionsListBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const QuestionsList = ({ onTabSelect }) => {
  // 로딩중 / 완료 / 실패에 대한 상태 관리
  // const [loading, setLoading] = useState(false);
  // const [resolved, setResolved] = useState(null);
  // const [error, setError] = useState(null);

  // questions 전역 상태관리
  const questions = useSelector((state) => state.questions);
  // const dispatch = useDispatch(); // axios쓸 때 사용
  console.log(questions);
  return (
    <>
      <QuestionsListBox>
        {questions &&
          questions.map((el) => {
            return <QuestionsCard key={el.question_id} questions={el} onTabSelect={onTabSelect} />;
          })}
      </QuestionsListBox>
    </>
  );
};

export default QuestionsList;
