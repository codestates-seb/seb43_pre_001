import styled from 'styled-components';
import earthIcon from '../../assets/earth-icon.svg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const LeftSideBarBox = styled.nav`
  margin-top: 24px;
  width: 150px;
  font-size: 13px;
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow: hidden;
`;

const TabMenu = styled.div`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
  color: rgb(106, 115, 124);
  padding: 4px 4px 4px 8px;
  height: 32px;
  cursor: pointer;
  :hover {
    color: #0c0d02;
  }
  &.public {
    font-size: 11px;
    cursor: auto;
  }
  &.inner {
    padding: 4px 4px 4px 30px;
  }
  &.active {
    font-weight: 700;
    background-color: #f1f2f3;
    border-right: 3px solid #f48225;
    color: rgb(12, 13, 14);
  }
`;
const CustomLink = styled(Link)`
  text-decoration: none;
`;

const LeftSideBar = ({ curTab, onTabSelect }) => {
  const { loggedIn } = useSelector((state) => state.user);

  return (
    <>
      <LeftSideBarBox>
        <CustomLink to='/'>
          <TabMenu
            className={curTab === 'home' ? 'active' : ''}
            onClick={() => {
              onTabSelect('home');
            }}
          >
            Home
          </TabMenu>
        </CustomLink>
        <TabMenu className='public'>PUBLIC</TabMenu>
        <TabMenu className={curTab === 'questions' ? 'active' : ''}>
          <img src={earthIcon} alt='earth-img'></img>
          Questions
        </TabMenu>
        <TabMenu className='inner' onClick={onTabSelect}>
          Tags
        </TabMenu>
        {loggedIn ? (
          <CustomLink to='/profile'>
            <TabMenu className='inner'>Users</TabMenu>
          </CustomLink>
        ) : (
          <CustomLink to='/login'>
            <TabMenu className='inner'>Users</TabMenu>
          </CustomLink>
        )}
        <TabMenu className='inner'>Companies</TabMenu>
      </LeftSideBarBox>
    </>
  );
};

export default LeftSideBar;
