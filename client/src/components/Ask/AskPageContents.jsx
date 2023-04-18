import Input from './Input';
import TextEditor from './TextEditor';
import styled from 'styled-components';
import AskPageSideNotice from './AskPageSideNotice';
import AskPageMainNotice from './AskPageMainNotice';
import { ask, tags, body } from '../../assets/askNoticeData';
import { ReactComponent as Background } from '../../assets/robot-img.svg';

const Main = styled.div`
  padding: 0 24px 24px 24px;
  max-width: 1240px;
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
  display: flex;
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
`;

const postAsk = () => {};

function AskPageContents() {
  return (
    <Main>
      <div>
        <Top>
          <h1>Ask a public question</h1>
          <BgImg />
        </Top>
        <AskPageMainNotice />
      </div>

      <InputSet>
        <Input title={ask.title} desc={ask.desc} />
        <AskPageSideNotice noticeTitle={ask.noticeTitle} noticeDesc={ask.noticeDesc} />
      </InputSet>

      <InputSet>
        <TextEditor title={body.title} desc={body.desc} />
        <AskPageSideNotice noticeTitle={body.noticeTitle} noticeDesc={body.noticeDesc} />
      </InputSet>

      {/* <InputSet>
        <TextEditor title={problem.title} desc={problem.desc} />
        <AskPageSideNotice noticeTitle={problem.noticeTitle} noticeDesc={problem.noticeDesc} />
      </InputSet> */}

      {/* 
      <InputSet>
        <TextEditor title={tryAndExpect.title} desc={tryAndExpect.desc} />
        <AskPageSideNotice noticeTitle={tryAndExpect.noticeTitle} noticeDesc={tryAndExpect.noticeDesc} />
      </InputSet> */}

      <InputSet>
        <Input title={tags.title} desc={tags.desc} />
        <AskPageSideNotice noticeTitle={tags.noticeTitle} noticeDesc={tags.noticeDesc} />
      </InputSet>
      {/* 
      <InputSet>
        <Input title={review.title} desc={review.desc} />
        <AskPageSideNotice noticeTitle={review.noticeTitle} noticeDesc={review.noticeDesc} />
      </InputSet> */}

      <PostOrDiscardButtons>
        <button onClick={postAsk}>Post your question</button>
        <Button>Discard draft</Button>
      </PostOrDiscardButtons>
    </Main>
  );
}

export default AskPageContents;
