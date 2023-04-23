import styled from 'styled-components';
// import LeftSideBarProfile from './ProfileMaterial/LeftSideBarProfile';
//사이드바 변경 (현아님것)
import LeftSideBar from '../StackSidebar/LeftSideBar';
import ImgNameProfile from './ProfileMaterial/ImgNameProfile';
import EditProfile from './ProfileMaterial/EditProfile';

const StackProfileBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .wrapper {
    width: 1266px;
    height: 741px;
    min-height: 264px;
  }
`;

const RealProfileBlock = styled.div`
  width: 660px;
  height: 741px;
  display: flex;
  justify-content: space-between;

  .wrapper-profile {
    width: 496px;
    height: 741px;
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
