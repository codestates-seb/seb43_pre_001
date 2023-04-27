import styled from 'styled-components';
import stackoverflowLogo from '../../assets/stackoverflow-logo.svg';
import stacLogoNoTxt from '../../assets/stack-logo.svg';
import searchIcon from '../../assets/search-icon.svg';
import profileImg from '../../assets/profile-img.svg';
import { Link } from 'react-router-dom';
//헤더 로고 클릭시 sidebar 위치를 Users로 옮김
import { useDispatch } from 'react-redux';
import { setSidebar } from '../../reducer/sidebarSlice';

const HeadBlock = styled.header`
  height: 50px;
  width: 100%;
  background-color: #f8f9f9;
  box-shadow: 0 1px 7px 0 rgba(0, 0, 0, 0.15);
  position: fixed;
  z-index: 1;

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
  /* width: 1264px; */
  height: 47px;
  display: flex;

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

    .logo-no-txt {
      display: none;
      margin: 0 0 0 8px;
    }
  }

  @media screen and (max-width: 550px) {
    display: flex;
    justify-content: center;
    align-items: center;

    .logo {
      display: none;
    }

    .logo-no-txt {
      width: 26px;
      display: block;
    }

    .search-from {
      width: 120px;
      transition: 0.07s linear;

      input {
        width: 100%;
        transition: 0.3s linear;
      }
    }
  }

  @media screen and (min-width: 551px) and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;

    .logo {
      display: none;
    }

    .logo-no-txt {
      width: 26px;
      display: block;
    }

    .search-from {
      width: 300px;
      transition: 0.3s linear;

      input {
        width: 100%;
        transition: 0.3s linear;
      }
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;

    .logo-no-txt {
      display: none;
    }

    .search-from {
      width: 346px;
      transition: 0.3s linear;

      .logo-no-txt {
        display: none;
      }

      input {
        width: 100%;
        transition: 0.3s linear;
      }
    }
  }

  @media screen and (min-width: 1025px) {
    display: flex;
    justify-content: center;
    align-items: center;

    .logo-no-txt {
      display: none;
    }

    .search-from {
      width: 775px;
      transition: 0.3s linear;

      input {
        width: 100%;
        transition: 0.3s linear;
      }
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

  .products {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 9px 0 2px;
  }

  .products-btn {
    width: 77px;
    height: 29px;

    border-radius: 35px;
    color: #61696e;
    font-size: 12.5px;
    text-shadow: 0 0 0 #61696e;

    &:hover {
      background-color: #e3e5e7;
      color: #252729;
      text-shadow: 0 0 0 #252729;
    }
  }

  .search-from {
    display: flex;
    /* width: 773px; */
    height: 33px;
    justify-content: center;
    align-items: center;

    .search-input {
      /* width: 773px; */
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

const RightIcons = styled.div`
  width: 223px;
  height: 47px;
  margin-left: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    width: 40px;
    height: 47px;

    &:hover {
      background-color: #e4e5e7;
    }
  }

  .profile {
    width: 64px;
    height: 47px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #53595f;

    img {
      width: 24px;
    }

    span {
      font-size: 13px;
      font-weight: 700;
      margin-left: 4px;
    }

    &:hover {
      color: #242629;
    }
  }

  .inbox {
    margin-left: 4px;
    font-size: 17px;
    &:hover {
      i::before {
        color: #242629;
      }
    }
  }

  .trophy {
    margin-left: -1px;
    font-size: 17.6px;
    &:hover {
      i::before {
        color: #242629;
      }
    }
  }

  .ques {
    margin-left: -2px;
    font-size: 17px;
    &:hover {
      i::before {
        color: #242629;
      }
    }
  }

  .msg {
    /* margin-left: -2px; */
    font-size: 18px;
    &:hover {
      i::before {
        color: #242629;
      }
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const HeadLogin = () => {
  //헤더 로고 클릭시 sidebar 위치를 Users로 옮기기 위한 dispatch 적용
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setSidebar('Users'));
  };

  return (
    <HeadBlock>
      <div className='orange-line'></div>
      <RealHeadBlock>
        <HeadBg>
          <Link to='/'>
            <div className='logo'>
              <img src={stackoverflowLogo} alt='logo' />
            </div>
          </Link>
          <Link to='/'>
            <div className='logo-no-txt'>
              <img src={stacLogoNoTxt} alt='logo' />
            </div>
          </Link>

          {/* row-reverse */}
          <RowReverseBlock>
            {/* 프로필 사진, 아이콘들 */}
            <RightIcons>
              <StyledLink to='/profile' onClick={handleClick}>
                <button className='profile'>
                  <img src={profileImg} alt='profile-img' />
                  <span>1</span>
                </button>
              </StyledLink>
              <button className='inbox'>
                <i className='i-inbox-icon' />
              </button>
              <button className='trophy'>
                <i className='i-trophy-icon' />
              </button>
              <button className='ques'>
                <i className='i-ques-icon' />
              </button>
              <button className='msg'>
                <i className='i-msg-icon' />
              </button>
            </RightIcons>

            <ReverseSearchApfBtn>
              {/* Products 버튼 */}
              <div className='products'>
                <button className='products-btn'>Products</button>
              </div>
              {/* 검색창 */}
              <form className='search-from'>
                <input className='search-input' type='search' placeholder='Search...' />
              </form>
              <i className='i-throphy-icon' />
            </ReverseSearchApfBtn>
          </RowReverseBlock>
        </HeadBg>
      </RealHeadBlock>
    </HeadBlock>
  );
};

export default HeadLogin;
