import styled from 'styled-components';
import HeadLogin from '../components/StackHead/HeadLogin';
import StackProfile from '../components/StackProfile/StackProfile';
import StackFoot from '../components/StackFoot/StackFoot';

const ProfilePageBlock = styled.div`
  padding-top: 50px;
`;

const ProfilePage = () => {
  return (
    <>
      <HeadLogin />
      <ProfilePageBlock>
        <StackProfile />
        <StackFoot />
      </ProfilePageBlock>
    </>
  );
};
export default ProfilePage;
