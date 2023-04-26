import React from 'react';
import styled from 'styled-components';
import upIcon from '../../../assets/up-icon.svg';
import downIcon from '../../../assets/down-icon.svg';
import DetailButton from './DetailButton';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAnswerContent, setAnswerId } from '../../../reducer/answerSlice';

const AnswerItemBox = styled.div`
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
  max-width: 710px;
  min-height: 300px;
  font-size: 15px;
  font-weight: 400;
  color: rgb(35, 38, 41);
`;

const AnswerItem = ({ el }) => {
  const { accessToken } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { answerId, content, memberId, questionId } = el;

  // 질문 수정 페이지 이동
  const navigateToEditPage = () => {
    dispatch(setAnswerContent(content));
    dispatch(setAnswerId(el.answerId));
    navigate(`/answers/${answerId}/edit`);
  };

  // // 질문 삭제
  const deletePost = async () => {
    if (confirm(`Delete this post?`)) {
      await axios
        .delete(`/api/answers/${answerId}`, {
          data: {
            memberId,
            content,
          },
          headers: {
            'Content-Type': 'application/json',
            Authorization: accessToken,
          },
          withCredentials: true,
        })
        .then((res) => {
          console.log(res);
          window.location.reload();
        });
    } else {
      return false;
    }
  };
  return (
    <AnswerItemBox>
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
        <AnswerContentBox>{content}</AnswerContentBox>
        <RightArea />
      </AnswerViewBox>
      <DetailButton editFunction={navigateToEditPage} deleteFunction={deletePost} qMemberId={memberId} />
    </AnswerItemBox>
  );
};

export default AnswerItem;
