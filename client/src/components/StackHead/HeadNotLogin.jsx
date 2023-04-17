import styled from 'styled-components';
import stackoverflowLogo from '../../assets/stackoverflow-logo.svg';
import searchIcon from '../../assets/search-icon.svg';
import ApfBtn from './HeadMaterial/ApfBtn';
import LoginSignupBtn from './HeadMaterial/LoginSignupBtn';
import { Link } from 'react-router-dom';

const HeadBlock = styled.header`
  height: 50px;
  width: 100%;
  background-color: #f8f9f9;
  box-shadow: 0 1px 7px 0 rgba(0, 0, 0, 0.15);
  position: fixed;

  .orange-line {
    height: 3px;
    background-color: #f48224;
  }
`;

const RealHeadBlock = styled.div`
  display: flex;
  justify-content: center;
`;

const HeadBg = styled.div`
  width: 1264px;
  height: 47px;
  display: flex;

  .menu-icon {
    width: 46px;
    height: 47px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 11.5px;
    cursor: pointer;

    &:hover {
      background-color: #e3e5e7;
    }
  }

  .logo {
    width: 163px;
    height: 47px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 2px;
    cursor: pointer;

    &:hover {
      background-color: #e3e5e7;
    }
  }
`;

const RowReverseBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
`;

const ReverseSearchApfBtn = styled.div`
  display: flex;

  .search-from {
    display: flex;
    width: 656px;
    height: 33px;
    justify-content: center;
    align-items: center;

    .search-input {
      width: 656px;
      height: 33px;
      border: 1px solid #bbc0c5;
      border-radius: 3.5px;
      padding-left: 33px;
      background: no-repeat url('${searchIcon}');
      background-color: #fff;
      background-position: 9px 7px;

      &::placeholder {
        font-size: 12.5px;
        color: #889099;
        text-shadow: 0 0 0 #889099;
      }

      &:focus {
        border: 1px solid #7eb9f2;
        outline: 4px solid #dae5f1;
      }
    }
  }
`;

const HeadNotLogin = () => {
  return (
    <HeadBlock>
      <div className='orange-line'></div>
      <RealHeadBlock>
        <HeadBg>
          <div className='menu-icon'>
            <i className='i-menu-icon' />
          </div>
          <Link to='/'>
            <div className='logo'>
              <img src={stackoverflowLogo} alt='logo' />
            </div>
          </Link>

          {/* row-reverse */}
          <RowReverseBlock>
            {/* Login, Signup 버튼 */}
            <LoginSignupBtn />

            <ReverseSearchApfBtn>
              {/* About, Products, For Teams 버튼 */}
              <ApfBtn />
              <form className='search-from'>
                {/* 검색창 */}
                <input className='search-input' type='search' placeholder='Search...' />
              </form>
            </ReverseSearchApfBtn>
          </RowReverseBlock>
        </HeadBg>
      </RealHeadBlock>
    </HeadBlock>
  );
};

export default HeadNotLogin;
