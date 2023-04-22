import InputTitle from './InputTitle';
import InputTags from './InputTags';
import TextEditor from './TextEditor';
import styled from 'styled-components';
import AskPageMainNotice from './AskPageMainNotice';
import AskPageSideNotice from './AskPageSideNotice';
import { ask, tags, body } from '../../assets/askNoticeData';
import { ReactComponent as Background } from '../../assets/robot-img.svg';
import axios from 'axios';
import SharedButton from '../SharedButton';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
// import { useCookie } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { setDiscardEditor, setDiscardTitle, setDiscardTags } from '../../reducer/askSlice';

const Main = styled.div`
  padding: 0 24px 50px 24px;
  max-width: 1264px;
  flex-grow: 1;

  > div {
    min-height: 750px;
    overflow: visible;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > h1 {
    font-weight: 700;
    font-size: 1.7rem;
    margin: 24px 0 27px;
    line-height: 1.3;
  }
`;

const BgImg = styled(Background)`
  width: 550px;
`;

const InputSet = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  row-gap: 16px;
  :not(:last-child) {
    margin-bottom: 12px;
  }
`;

const Button = styled.button`
  border: none;
  color: hsl(358deg 62% 47%);
  padding: 10.4px;
  background-color: transparent;
  letter-spacing: 0.03rem;
  cursor: pointer;
  :hover {
    background-color: hsl(358deg 75% 97%);
  }
`;

const PostOrDiscardButtons = styled.div`
  display: flex;
  & + div {
    color: #c04848;
    font-weight: 900;
    font-size: small;
    margin: 16px 0 10px;
  }
`;

function AskPageContents() {
  const { content, title, allTags, titleFocus, contentFocus, tagsFocus } = useSelector((state) => state.ask);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const postAsk = async () => {
    if (!isValidHandler()) {
      await axios
        .post('http://localhost:8080/questions/ask', {
          member: {
            memberId: 1,
            nickname: '555',
            name: '55',
            email: '555',
          },
          questionId: 5,
          title: '55',
          content: 'asdfasdf',
          createdAt: 'd-04-df:05:41.555',
          modifiedAt: 'df-04-ad:05:41.555',
        })
        .then((response) => {
          console.log(response);
          // navigate('/');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const getAsk = async () => {
    await axios('http://localhost:4000/data').then((res) => {
      const member = res;

      console.log(member);
    });
  };

  const isValidHandler = () => {
    return title?.length >= 15 && content?.length && allTags?.length && allTags?.length <= 5;
  };

  const discardHandler = () => {
    if (confirm(`Are you sure you want to discard this question? This cannot be undone.`)) {
      dispatch(setDiscardTitle(true));
      dispatch(setDiscardEditor(true));
      dispatch(setDiscardTags(true));
    } else return false;
  };

  useEffect(() => {
    isValidHandler();
  }, [title, content, allTags]);
  // console.log(isValidHandler());

  return (
    <Main>
      <div>
        <div>
          <Top>
            <h1>Ask a public question</h1>
            <BgImg />
          </Top>
          <AskPageMainNotice />
        </div>
        <InputSet>
          <InputTitle quseiontTitle={ask.title} desc={ask.desc} />
          {titleFocus ? <AskPageSideNotice noticeTitle={ask.noticeTitle} noticeDesc={ask.noticeDesc} /> : null}
        </InputSet>
        <InputSet>
          <TextEditor title={body.title} desc={body.desc} />
          {contentFocus ? <AskPageSideNotice noticeTitle={body.noticeTitle} noticeDesc={body.noticeDesc} /> : null}
        </InputSet>
        <InputSet>
          <InputTags title={tags.title} desc={tags.desc} />
          {tagsFocus ? <AskPageSideNotice noticeTitle={tags.noticeTitle} noticeDesc={tags.noticeDesc} /> : null}
        </InputSet>
        <PostOrDiscardButtons>
          <SharedButton buttonText='Post your question' functionHandler={postAsk}></SharedButton>
          <Button onClick={discardHandler}>Discard draft</Button>
        </PostOrDiscardButtons>
        {!isValidHandler() ? <div>Your question couldn&apos;t be submitted. Please see the error above.</div> : null}
      </div>
    </Main>
  );
}

export default AskPageContents;
