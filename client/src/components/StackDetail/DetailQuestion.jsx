import styled from 'styled-components';
import DetailHead from './DetailMeterial/DetailHead';
import DetailView from './DetailMeterial/DetailView';
import LeftSideBar from '../StackSidebar/LeftSideBar';
import DetailAnswer from './DetailMeterial/DetailAnswer';
import StackFoot from '../StackFoot/StackFoot';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { setDetailQuestion } from '../../reducer/questionSlice';
import axios from 'axios';
import DetailButton from './DetailMeterial/DetailButton';
import { setContent } from '../../reducer/askSlice';

const Container = styled.div`
  position: relative;
  top: 50px;
  width: 100vw;
  height: 100vh;
  .wrapper {
    margin: 0 auto 50px;
    max-width: 1264px;
    display: flex;
  }
`;

const MainBox = styled.div`
  border-left: 1px solid #d6d9dc;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin-left: 150px;
  padding: 24px;
  min-width: 800px;
  div.hr-line {
    margin-top: 12px;
    border-bottom: 1.5px solid #d6d9dc;
  }
`;

const DetailQuestion = () => {
  //요청할 API 주소를 위함
  const { questionId } = useParams();
  //로딩 및 에러 처리
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { memberId } = useSelector((state) => state.user);
  const { accessToken } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  // questions 전역 상태관리
  const questions = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`/questions/${questionId}`, {
          headers: {
            Authorization: accessToken,
          },
        });

        // 데이터를 전역 store에 저장하기위함
        dispatch(setDetailQuestion(response.data.data));
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    process();
  }, []);
  if (loading) {
    return <Container>로딩중...</Container>;
  }
  if (!questions.question) return null;
  if (error) {
    return <Container>에러 발생...</Container>;
  }

  // 질문 수정 페이지 이동
  const navigateToEditPage = () => {
    navigate(`/questions/${questionId}/edit`, {
      state: { questions },
    });
    dispatch(setContent(questions.content));
  };

  // 질문 삭제
  const deletePost = async () => {
    if (confirm(`Delete this post?`)) {
      await axios.delete(`/questions/${questionId}`, {
        data: {
          memberId,
          questionId: questionId,
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: accessToken,
        },
        withCredentials: true,
      });
      navigate('/');
    } else {
      return false;
    }
  };

  return (
    <>
      {questions.question && (
        <Container>
          <div className='wrapper'>
            <LeftSideBar />
            <MainBox>
              <DetailHead question={questions.question} />
              <DetailView question={questions.question} />
              <DetailButton editFunction={navigateToEditPage} deleteFunction={deletePost} qMemberId={1} />
              <DetailAnswer questionId={questionId}></DetailAnswer>
            </MainBox>
          </div>
          <StackFoot />
        </Container>
      )}
    </>
  );
};

export default DetailQuestion;
