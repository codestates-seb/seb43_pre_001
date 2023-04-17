import TextEditor from './TextEditor';
import styled from 'styled-components';
import Notice from './Notice';
import AskPageNotice from './AskPageNotice';
import { ask, problem, tryAndExpect, tags, review } from '../../assets/askNoticeData';
import { ReactComponent as Background } from '../../assets/robot-img.svg';
import Input from './Input';

function MainContent() {
  return (
    <Main>
      <div>
        <Top>
          <h1>Ask a public question</h1>
          <BgImg />
        </Top>
        <AskPageNotice />
      </div>
      <InputSet>
        <Input title={ask.title} desc={ask.desc} />
        <Notice noticeTitle={ask.noticeTitle} noticeDesc={ask.noticeDesc} />
      </InputSet>
      <InputSet>
        <TextEditor title={problem.title} desc={problem.desc} />
        <Notice noticeTitle={problem.noticeTitle} noticeDesc={problem.noticeDesc} />
      </InputSet>
      <InputSet>
        <TextEditor title={tryAndExpect.title} desc={tryAndExpect.desc} />
        <Notice noticeTitle={tryAndExpect.noticeTitle} noticeDesc={tryAndExpect.noticeDesc} />
      </InputSet>
      <InputSet>
        <Input title={tags.title} desc={tags.desc} />
        <Notice noticeTitle={tags.noticeTitle} noticeDesc={tags.noticeDesc} />
      </InputSet>
      <InputSet>
        <Input title={review.title} desc={review.desc} />
        <Notice noticeTitle={review.noticeTitle} noticeDesc={review.noticeDesc} />
      </InputSet>
      <Button>Discard draft</Button>
    </Main>
  );
}

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

export default MainContent;
