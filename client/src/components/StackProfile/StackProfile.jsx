import styled from 'styled-components';
import LeftSideBar from '../StackSidebar/LeftSideBar';
import ImgNameProfile from './ProfileMaterial/ImgNameProfile';
import EditProfile from './ProfileMaterial/EditProfile';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const StackProfileBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .wrapper {
    width: 1266px;
    height: 689px;
  }
`;

const RealProfileBlock = styled.div`
  width: 660px;
  height: 689px;
  display: flex;
  justify-content: space-between;

  .wrapper-profile {
    width: 496px;
    height: 689px;
    border-left: 1px solid #d6d9dc;
    // 여기만 수정
    margin-left: 150px;
  }

  .fixed {
    position: fixed;
  }
`;

const Profile = styled.div`
  width: 471px;
  height: 372px;
  margin: 24px 0 0 25px;

  .profile-img-name {
    display: flex;
  }
`;

const StackProfile = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, []);

  return (
    <StackProfileBlock>
      <div className='wrapper'>
        <RealProfileBlock>
          {/* nav 내비게이션 바 구역 */}
          <div className='fixed'>
            <LeftSideBar />
          </div>

          {/* 프로필 구역 */}
          <div className='wrapper-profile'>
            <Profile>
              {/* 큰 프로필 사진과 username이 있는 구역 => ImgNameProfile 컴포넌트 */}
              <div className='profile-img-name'>
                <ImgNameProfile />
              </div>

              {/* Edit your profile 구역 => EditProfile 컴포넌트 */}
              <EditProfile />
            </Profile>
          </div>
        </RealProfileBlock>
      </div>
    </StackProfileBlock>
  );
};

export default StackProfile;
