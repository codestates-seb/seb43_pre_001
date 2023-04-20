import { Link } from 'react-router-dom';
import styled from 'styled-components';

const QuestionsCardBox = styled.div`
  border-top: 1px solid #d6d9dc;
  padding: 16px;
  display: flex;
  flex-direction: column;
  /* height: 98px; */
`;

const QuesionStatus = styled.div`
  display: flex;
  gap: 12px;
  margin: 3px 0 10px 0;
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
  //여기에 작성
  .content {
    height: 34px;
    overflow: hidden;
    font-size: 13px;
    font-weight: 400;
    line-height: 17px;
    color: rgb(59, 64, 69);
    margin: 6px 0;
    p {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
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

const QuestionsCard = ({ question, onTabSelect }) => {
  const { nickname, content, score, created_at, title, question_id, tag } = question;
  console.log(content);
  return (
    <>
      <QuestionsCardBox>
        <QuesionStatus>
          <div className='votes'>0 votes</div>
          <div className='answers'>0 answer</div>
          <div className='views'>0 views</div>
        </QuesionStatus>
        <QuesionContent>
          <CustomLink to={`/questions/${question_id}`}>
            <Content onClick={() => onTabSelect('questions')}>{title}</Content>
          </CustomLink>
          <div className='content'>
            <p>{content}</p>
          </div>
          <div className='meta'>
            <MetaTags>
              {tag &&
                tag.map((el, idx) => {
                  return (
                    <div className='tag' key={idx}>
                      {el}
                    </div>
                  );
                })}
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
