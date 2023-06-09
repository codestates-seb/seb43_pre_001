import styled from 'styled-components';
import { ReactComponent as NoticeIcon } from '../../assets/noticeIcon.svg';
import { NoticeStyle } from './AskStyle';

const Div = styled(NoticeStyle)``;

function AskPageSideNotice({ noticeTitle, noticeDesc }) {
  return (
    <Div>
      <h5>{noticeTitle}</h5>
      <div>
        <div>
          <NoticeIcon />
        </div>
        <div>
          {noticeDesc.map((el, idx) => (
            <p key={idx}>{el}</p>
          ))}
        </div>
      </div>
    </Div>
  );
}

export default AskPageSideNotice;
