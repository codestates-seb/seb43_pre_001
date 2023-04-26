import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CreateAnswer from '../../Answer/CreateAnswer';
import axios from 'axios';
import Loading from '../../StackQuestions/QuestionsMeterial/Loading';
import { useSelector, useDispatch } from 'react-redux';
import { setAnswers } from '../../../reducer/questionSlice';
import DetailAnswerItem from './DetailAnswerItem';

const AnswerBox = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
`;
const AnswerHead = styled.div`
  font-size: 19px;
  font-weight: 400;
  color: rgb(59, 64, 69);
`;

const AnswerItem = styled.div`
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #d6d9dc;
`;

const HrTag = styled.div`
  margin-top: 40px;
`;

const AnswerAnswer = ({ questionId }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { accessToken } = useSelector((state) => state.auth);

  const answerList = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  const baseURL = process.env.REACT_APP_BASE_URL;
  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${baseURL}/answers/${questionId}`, {
          headers: {
            Authorization: accessToken,
          },
        });
        dispatch(setAnswers(response.data.data));
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    process();
  }, []);

  if (loading) {
    return (
      <AnswerItem>
        <Loading />
      </AnswerItem>
    );
  }
  if (error) {
    return <AnswerItem>에러 발생...</AnswerItem>;
  }

  return (
    <AnswerBox>
      {answerList.answers.length === 0 ? null : (
        <>
          <AnswerHead>{answerList.answers.length} Answer</AnswerHead>
          {answerList.answers.map((el) => {
            return <DetailAnswerItem key={el.answerId} el={el} />;
          })}
        </>
      )}
      <HrTag />
      {/* Answer작성하는 폼 부분 */}
      <CreateAnswer questionId={questionId} />
    </AnswerBox>
  );
};

export default AnswerAnswer;
