import styled from 'styled-components';
import earthIcon from '../../assets/earth-icon.svg';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSidebar } from '../../reducer/sidebarSlice';
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

const LeftSideBar = () => {
  const { loggedIn } = useSelector((state) => state.user);
  const sideBarState = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  //sidebar 색상 주기 위한 클릭함수
  const handelClick = (e) => {
    dispatch(setSidebar(e.target.textContent));
  };
  return (
    <>
      <LeftSideBarBox>
        <TabMenu>Home</TabMenu>
        <TabMenu className='public'>PUBLIC</TabMenu>
        <CustomLink to='/' onClick={handelClick}>
          <TabMenu className={sideBarState.menu === 'Questions' ? 'active' : ''}>
            <img src={earthIcon} alt='earth-img'></img>
            Questions
          </TabMenu>
        </CustomLink>

        <TabMenu className='inner'>Tags</TabMenu>
        {loggedIn ? (
          <CustomLink to='/profile' onClick={handelClick}>
            <TabMenu className={sideBarState.menu === 'Users' ? 'inner active' : 'inner'}>Users</TabMenu>
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
