import styled from 'styled-components';
import earthIcon from '../../assets/earth-icon.svg';
const LeftSideBarBox = styled.nav`
  padding-top: 24px;
  border-right: 1px solid #d6d9dc;
  width: 164px;
  height: 100vh;
  font-size: 13px;
  position: fixed;

  ul {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    li {
      display: flex;
      color: rgb(106, 115, 124);
    }
    li.home {
      padding: 4px 4px 4px 8px;
      font-weight: 700;
      color: rgb(12, 13, 14);
      text-decoration: none solid rgb(12, 13, 14);
      text-align: left;
      height: 34px;
      display: flex;
      background-color: #f1f2f3;
      align-items: center;
      border-right: 3px solid #f48225;
      margin-bottom: 12px;
      cursor: pointer;
    }
    li.top {
      padding: 4px 4px 4px 8px;
      margin-bottom: 10px;
      font-size: 11px;
    }
    li.inner1 {
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 4px 4px 4px 8px;
      margin-bottom: 8px;
      color: rgb(106, 115, 124);
      img {
        margin-right: 5px;
      }
      :hover {
        color: #0c0d02;
      }
    }
    li.inner {
      cursor: pointer;
      padding: 4px 4px 4px 30px;
      margin-bottom: 8px;
      color: rgb(106, 115, 124);
      :hover {
        color: #0c0d02;
      }
    }
  }
`;

const LeftSideBar = () => {
  return (
    <>
      <LeftSideBarBox>
        <ul>
          <li className='home'>Home</li>
          <li className='top'>PUBLIC</li>
          <li className='inner1'>
            <img src={earthIcon} alt='earth-icon'></img>Questions
          </li>
          <li className='inner'>Tags</li>
          <li className='inner'>Users</li>
          <li className='inner'>Companies</li>
        </ul>
      </LeftSideBarBox>
    </>
  );
};

export default LeftSideBar;
