import styled from 'styled-components';
//13/17/12
const QuestionsListBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const QuestionsCard = styled.div`
  border-top: 1px solid #d6d9dc;
  padding: 16px;
  display: flex;
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
  .content {
    font-size: 17px;
    color: #0063bf;
  }
  .meta {
    font-size: 12px;
    display: flex;
    flex-direction: column;
  }
`;
const MetaTags = styled.div`
  display: flex;
  gap: 6px;
  .tag {
    padding: 4px;
    margin-top: 4px;
    background-color: #d0e3f1;
    color: #2c5877;
    border-radius: 3px;
  }
`;
// 사용자 이미지 + 사용자 이름 + 사용자의 총 질문수 + 질문생성/수정여부 및 시간
const MetaUserCard = styled.div``;

const QuestionsList = () => {
  return (
    <>
      <QuestionsListBox>
        <QuestionsCard>
          <QuesionStatus>
            <div className='votes'>1 vote</div>
            <div className='answers'>1 answer</div>
            <div className='views'>216 views</div>
            <div className='bounty'>+50</div>
          </QuesionStatus>
          <QuesionContent>
            <div className='content'>Spring Boot Multi module project - Build issues due to compilation issues for imports from different module</div>
            <div className='meta'>
              <MetaTags>
                <div className='tag'>java</div>
                <div className='tag'>swift</div>
                <div className='tag'>node</div>
                <div className='tag'>spring-boot</div>
              </MetaTags>
              <MetaUserCard></MetaUserCard>
            </div>
          </QuesionContent>
        </QuestionsCard>
      </QuestionsListBox>
    </>
  );
};

export default QuestionsList;
