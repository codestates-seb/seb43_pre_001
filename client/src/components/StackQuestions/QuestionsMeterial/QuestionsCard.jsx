import { Link } from 'react-router-dom';
import styled from 'styled-components';

const QuestionsCardBox = styled.div`
  border-top: 1px solid #d6d9dc;
  padding: 16px;
  display: flex;
  height: 98px;
`;

const QuesionStatus = styled.div`
  display: flex;
  gap: 9px;
  flex-direction: column;
  align-items: flex-end;
  margin: 0 16px 4px 0;
  font-size: 13px;
  width: 108px;
  height: 102px;
  color: rgb(106, 115, 124);
  .votes {
    color: rgb(12, 13, 14);
  }
  .bounty {
    display: none;
  }
`;

const QuesionContent = styled.div`
  flex-grow: 1;
  height: 106px;
  display: flex;
  flex-direction: column;

  .meta {
    font-size: 12px;
    margin-top: 4px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
  }
`;
const CustomLink = styled(Link)`
  text-decoration: none;
`;

const Content = styled.div`
  font-size: 17px;
  font-weight: 500;
  text-decoration: none solid rgb(10, 149, 255);
  color: #0063bf;
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
  .score {
    font-weight: 700;
    color: rgb(82, 89, 96);
  }
  .create-at {
    color: #0063bf;
    cursor: pointer;
    :hover {
      color: rgb(82, 89, 96);
    }
  }
`;

const QuestionsCard = ({ questions, onTabSelect }) => {
  const { nickname, score, created_at, title, question_id } = questions;
  return (
    <>
      <QuestionsCardBox>
        <QuesionStatus>
          <div className='votes'>0 votes</div>
          <div className='answers'>0 answer</div>
          <div className='views'>0 views</div>
          {/* <div className='bounty'>+50</div> */}
        </QuesionStatus>
        <QuesionContent>
          <CustomLink to={`/questions/${question_id}`}>
            <Content onClick={() => onTabSelect('questions')}>{title}</Content>
          </CustomLink>
          <div className='meta'>
            <MetaTags>
              <div className='tag'>java</div>
              <div className='tag'>swift</div>
              <div className='tag'>node</div>
              <div className='tag'>spring-boot</div>
            </MetaTags>
            <MetaUserCard>
              <div className='nickname'>{nickname}</div>
              <span className='score'>{score}</span>
              <span className='create-at'>asked {created_at} secs ago</span>
            </MetaUserCard>
          </div>
        </QuesionContent>
      </QuestionsCardBox>
    </>
  );
};

export default QuestionsCard;
