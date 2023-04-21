import styled from 'styled-components';
import profileBigImg from '../../../assets/profile-big-img.svg';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../reducer/userSlice';
import { useNavigate } from 'react-router-dom';

const ImgNameProfileBlock = styled.div`
  display: flex;

  .profile-img {
    width: 128px;
    margin-left: 1.5px;
  }

  .name-txt {
    width: 152px;
    height: 57px;
    margin: 48px 0 0 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .gray-bg {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 50px;
      height: 18px;
      color: #fff;
      margin-right: 25.5px;
      font-size: 10px;
      text-shadow: 0 0 0 #fff;
      letter-spacing: 0.6px;
      border-radius: 35px;
      background-color: #b9b9b9;

      &:hover {
        background-color: #9e9e9e;
        transition: 0.2s;
      }
    }

    .gray-txt {
      color: #9099a1;
      font-size: 15px;
      font-weight: 400;
      margin-top: 2px;
      display: flex;
      justify-content: space-between;
    }

    .txt-tata-logout {
      width: 152px;
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .bold-txt {
        color: #232629;
        font-size: 33px;
        font-weight: 500;
      }
    }
  }
`;

const ImgNameProfile = () => {
  const { nickname } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutFn = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <ImgNameProfileBlock>
      <div className='profile-img-name'>
        <div className='profile-img'>
          <img src={profileBigImg} alt='profile-img' />
        </div>

        <div className='name-txt'>
          <div className='gray-txt'>
            <span>user name</span>
            <button onClick={logoutFn} className='gray-bg'>
              log out
            </button>
          </div>

          <div className='txt-tata-logout'>
            <span className='bold-txt'>{nickname === null ? 'tata-v' : nickname}</span>
          </div>
        </div>
      </div>
    </ImgNameProfileBlock>
  );
};

export default ImgNameProfile;
