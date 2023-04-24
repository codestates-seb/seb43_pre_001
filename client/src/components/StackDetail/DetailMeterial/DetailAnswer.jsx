import styled from 'styled-components';
import upIcon from '../../../assets/up-icon.svg';
import downIcon from '../../../assets/down-icon.svg';
import SharedButton from '../../SharedButton';
import { setContent } from '../../../reducer/askSlice';
import TextEditor from '../../Ask/TextEditor';
import CreateAnswer from '../../Answer/CreateAnswer';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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

const AnswerAnswer = ({ questionId, answerList }) => {
  // let dispatch = useDispatch();
  // const navigate = useNavigate();
  // // 답변 수정 페이지 이동
  // const navigateToEditPage = () => {
  //   navigate(`/answers/${answer.answerId}/edit`, {
  //     state: { answer, question },
  //   });
  //   dispatch(setContent(answer.content));
  // };

  return (
    <AnswerBox>
      {answerList.length === 0 ? <AnswerHead> Answer</AnswerHead> : <AnswerHead>{answerList.length} Answer</AnswerHead>}
      {/* 엔서아이템 맵처리해야함 */}
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
          <AnswerContentBox>asd</AnswerContentBox>
          <RightArea></RightArea>
        </AnswerViewBox>
      </AnswerItem>
      <HrTag />
      <CreateAnswer questionId={questionId} />
    </AnswerBox>
  );
};

export default AnswerAnswer;
