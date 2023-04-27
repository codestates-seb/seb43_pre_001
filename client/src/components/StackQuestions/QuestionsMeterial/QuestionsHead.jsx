import styled from 'styled-components';
import SharedButton from '../../SharedButton';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const QuestionsHeadBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 0 0 24px;
`;
const Section1 = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  margin-bottom: 27px;
  h1 {
    font-size: 27px;
    line-height: 35.1px;
    color: rgb(35, 38, 41);
  }
`;
const Section2 = styled.div`
  margin-bottom: 16px;
  ul {
    display: flex;
    justify-content: flex-end;
  }
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 38px;
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
      background-color: #e3e6e8;
    }
    &:last-child {
      border-right: 1px solid #838c95;
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
    }
    span {
      font-size: 11px;
      font-weight: 600;
      color: rgb(255, 255, 255);
      background-color: #0173cc;
      padding: 2.5px 2.5px 2.8px;
      margin-right: 6px;
    }
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;

const QuestionsHead = () => {
  const { loggedIn } = useSelector((state) => state.user);

  return (
    <>
      <QuestionsHeadBox>
        <Section1>
          <h1>Top Questions</h1>
          {loggedIn ? (
            <StyledLink to='/questions/ask'>
              <SharedButton buttonText='Ask Question' />
            </StyledLink>
          ) : (
            <StyledLink to='/login'>
              <SharedButton buttonText='Ask Question' />
            </StyledLink>
          )}
        </Section1>
        <Section2>
          <ul>
            <li>Interesting</li>
            <li>
              <span>231</span>Bountied
            </li>
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
