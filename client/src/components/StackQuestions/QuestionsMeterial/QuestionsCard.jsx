import { Link } from 'react-router-dom';
import styled from 'styled-components';

const QuestionsCardBox = styled.div`
  border-top: 1px solid #d6d9dc;
  padding: 16px;
  display: flex;
`;

const QuesionStatus = styled.div`
  flex-basis: 108px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
  margin: 3px 16px 10px 0;
  font-size: 13px;
  color: rgb(106, 115, 124);
  .votes {
    color: rgb(12, 13, 14);
    font-weight: 500;
  }
`;

const QuesionContent = styled.div`
  flex-grow: 1;
  /* height: 125px; */
  display: flex;
  flex-direction: column;
  /* 카드의 내용 */
  .content {
    font-size: 13px;
    font-weight: 400;
    color: rgb(59, 64, 69);
    margin: 6px 0;
    height: 34px;
    line-height: 17px;
    /* 여기 */
    white-space: pre-line;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .meta {
    font-size: 12px;
    margin-top: 4px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 12px;
  }
`;
const CustomLink = styled(Link)`
  text-decoration: none;
`;
// 카드의 제목부분
const Content = styled.div`
  font-size: 17px;
  font-weight: 500;
  text-decoration: none solid rgb(10, 149, 255);
  color: #0063bf;
  white-space: pre-line;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  cursor: pointer;
  :hover {
    color: #0a95ff;
  }
`;
const MetaTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  .tag {
    padding: 4px;
    color: #2c5877;
    background-color: #d0e3f1;
    border-radius: 3px;
    cursor: pointer;
    :hover {
      color: #002847;
      background-color: #c7e0f4;
    }
  }
`;
const MetaUserCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  margin-left: auto;
  margin-top: 8px;
  gap: 4px;
  .nickname {
    color: #0063bf;
    cursor: pointer;
    :hover {
      color: #0a95ff;
    }
  }
  .create-at {
    color: #0063bf;
    cursor: pointer;
    :hover {
      color: rgb(82, 89, 96);
    }
  }
`;

const QuestionsCard = ({ question }) => {
  const { content, createdAt, title, questionId, member } = question;

  const showDate = (a) => {
    const milliSeconds = new Date() - new Date(a);
    const seconds = milliSeconds / 1000;
    if (seconds < 60) return `just before`;
    const minutes = seconds / 60;
    if (minutes < 60) return `${Math.floor(minutes)} mins ago`;
    const hours = minutes / 60;
    if (hours < 24) return `${Math.floor(hours)} hours ago`;
    const days = hours / 24;
    if (days < 7) return `${Math.floor(days)} days ago`;
    const weeks = days / 7;
    if (weeks < 5) return `${Math.floor(weeks)} weeks ago`;
    const months = days / 30;
    if (months < 12) return `${Math.floor(months)}months ago`;
    const years = days / 365;
    return `${Math.floor(years)} years ago`;
  };

  return (
    <>
      <QuestionsCardBox>
        <QuesionStatus>
          <div className='votes'>0 votes</div>
          <div className='answers'>0 answer</div>
          <div className='views'>0 views</div>
        </QuesionStatus>
        <QuesionContent>
          <CustomLink to={`/questions/${questionId}`}>
            <Content>{title}</Content>
          </CustomLink>
          <div className='content'>
            <p>{content}</p>
          </div>
          <div className='meta'>
            <MetaTags>
              <div className='tag'>tag1</div>
              <div className='tag'>tag2</div>
              <div className='tag'>tag3</div>
            </MetaTags>
            <MetaUserCard>
              <div className='nickname'>{member.nickname}</div>
              <span className='create-at'>asked {showDate(createdAt)}</span>
            </MetaUserCard>
          </div>
        </QuesionContent>
      </QuestionsCardBox>
    </>
  );
};

export default QuestionsCard;
