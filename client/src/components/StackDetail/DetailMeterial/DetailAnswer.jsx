import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import upIcon from '../../../assets/up-icon.svg';
import downIcon from '../../../assets/down-icon.svg';
import SharedButton from '../../SharedButton';
import TextEditor from '../../Ask/TextEditor';
import CreateAnswer from '../../Answer/CreateAnswer';
import axios from 'axios';
import Loading from '../../StackQuestions/QuestionsMeterial/Loading';
import { useSelector, useDispatch } from 'react-redux';
import { setAnswers } from '../../../reducer/questionSlice';

const AnswerBox = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  .answer-desc {
    font-size: 17px;
    font-weight: 450;
    line-height: 23.8px;
    color: rgb(35, 38, 41);
    span {
      color: rgb(0, 116, 204);
    }
  }
  .answer-title {
    font-size: 19px;
    font-weight: 450;
    line-height: 24.7px;
    color: rgb(35, 38, 41);
    margin: 20px 0;
  }
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

const AnswerViewBox = styled.div`
  margin-top: 20px;
  display: flex;
`;

const RightArea = styled.div`
  min-width: 235px;
  width: 300px;
  height: 330px;
  margin: 24px 0;
`;

const AnswerSideBar = styled.div`
  margin: 24px 16px 0 0;
  width: 36px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  div.score {
    font-size: 21px;
    line-height: 27.5px;
    color: rgb(106, 115, 124);
  }
  div.arrow-img {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;
const AnswerContentBox = styled.div`
  margin: 24px 24px 0 0;
  flex-grow: 1;
  min-height: 300px;
  font-size: 15px;
  font-weight: 400;
  color: rgb(35, 38, 41);
  /* line-height: 22.5px; */
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

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`/answers/${questionId}`, {
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
            return (
              <React.Fragment key={el.answerId}>
                <AnswerItem>
                  <AnswerViewBox>
                    <AnswerSideBar>
                      <div className='arrow-img'>
                        <img src={upIcon} alt='up-icon'></img>
                      </div>
                      <div className='score'> 0</div>
                      <div className='arrow-img'>
                        <img src={downIcon} alt='down-icon'></img>
                      </div>
                    </AnswerSideBar>
                    {/* Answer의 content 내용이 담기는 부분 */}
                    <AnswerContentBox>{el.content}</AnswerContentBox>
                    <RightArea />
                  </AnswerViewBox>
                  <SharedButton></SharedButton>
                </AnswerItem>
              </React.Fragment>
            );
          })}
        </>
      )}
      <HrTag />
      {/* Answer작성하는 폼 부분 */}
      <div className='answer-desc'>
        Know someone who can answer? Share a link to this <span>question</span> via <span>email</span>, <span>Twitter</span>, or <span>Facebook</span>
      </div>
      <div className='answer-title'>Your Answer</div>
      <TextEditor></TextEditor>
      <CreateAnswer questionId={questionId} />
    </AnswerBox>
  );
};

export default AnswerAnswer;
