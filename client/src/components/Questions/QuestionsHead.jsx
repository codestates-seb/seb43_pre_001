import styled from 'styled-components';

const QuestionsHeadBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 0 0 24px;
`;
const Section1 = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 430;
  margin-bottom: 27px;
  h1 {
    font-size: 27px;
    line-height: 35.1px;
    color: rgb(35, 38, 41);
  }
  button {
    width: 104px;
    height: 38px;
    color: #fff;
    background-color: rgb(10, 149, 255);
    border-radius: 3px;
    :hover {
      background-color: #3272c6;
    }
  }
`;
const Section2 = styled.div`
  margin-bottom: 16px;
  ul {
    display: flex;
    justify-content: flex-end;
  }
  li {
    font-size: 13px;
    padding: 10px;
    border-top: 1px solid #838c95;
    border-left: 1px solid #838c95;
    border-bottom: 1px solid #838c95;
    color: #3b4045;
    :hover {
      background-color: #e3e6e8;
    }
    &:first-child {
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }
    &:last-child {
      border-right: 1px solid #838c95;
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
    }
  }
`;
const QuestionsHead = () => {
  return (
    <>
      <QuestionsHeadBox>
        <Section1>
          <h1>Top Questions</h1>
          <button>Ask Questions</button>
        </Section1>
        <Section2>
          <ul>
            <li>Interesting</li>
            <li>Bountied</li>
            <li>Hot</li>
            <li>Week</li>
            <li>Month</li>
          </ul>
        </Section2>
      </QuestionsHeadBox>
    </>
  );
};

export default QuestionsHead;
