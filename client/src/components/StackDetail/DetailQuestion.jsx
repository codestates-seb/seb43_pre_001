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
import TextEditor from '../Ask/TextEditor';
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

  //answer 조회를 위한 상태
  const [answerList, setAnswerList] = useState([]);

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const responseQuestion = await axios.get(`/questions/${questionId}`, {
          headers: {
            Authorization: accessToken,
          },
        });
        const responseAnswer = await axios.get(`/answers/${questionId}`, {
          headers: {
            Authorization: accessToken,
          },
        });
        // 데이터를 전역 store에 저장하기위함
        dispatch(setDetailQuestion(responseQuestion.data.data));
        // console.log(responseQuestion.data);
        setAnswerList([responseAnswer.data]);
        console.log(responseAnswer.data);
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
    return <Container>로딩중...</Container>;
  }
  // 받아온 응답이 없다면
  if (!questions.question) return null;
  // catch문의 Error처리
  if (error) {
    return <Container>에러 발생...</Container>;
  }

  const stackFoot = <StackFoot num={980} />;

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
              <DetailAnswer answerList={answerList}></DetailAnswer>
            </MainBox>
          </div>
          <StackFoot />
        </Container>
      )}
    </>
  );
};

export default DetailQuestion;
