import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LoginSignupBtnBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .rev-login-signup {
    width: 132px;
    height: 33px;
    margin-left: 8px;
    display: flex;
    justify-content: space-between;
  }

  .login {
    width: 60px;
    height: 33px;
    color: #5083a7;
    text-shadow: 0 0 0 #5083a7;
    background-color: #fff;
    border: 1px solid #7aa7c7;
    border-radius: 4px;

    .login-bg {
      width: 58px;
      height: 30px;
      margin-top: 1px;
      background-color: #e1ecf4;
      border-radius: 3px;
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        margin-bottom: 1px;
      }

      &:hover {
        background-color: #b9d2e8;
      }
    }

    &:hover {
      color: #375773;
      border: 1px solid #7aa7c7;
    }
  }

  .signup {
    width: 68px;
    height: 33px;
    color: #fff;
    text-shadow: 0 0 0 #fff;
    background-color: #6cbfff;
    border: 1px solid #0a95ff;
    border-radius: 4px;

    .signup-bg {
      width: 66px;
      height: 30px;
      margin-top: 1px;
      background-color: #0a95ff;
      border-radius: 3px;
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        margin-bottom: 1px;
      }

      &:hover {
        background-color: #3272c6;
      }
    }

    &:hover {
      border: 1px solid #3272c6;
      background-color: #83aade;
    }
  }
`;

const LoginSignupBtn = () => {
  return (
    <LoginSignupBtnBlock>
      <div className='rev-login-signup'>
        <Link to='/login'>
          <button className='login'>
            <div className='login-bg'>
              <span>Log in</span>
            </div>
          </button>
        </Link>

        <Link to='/signup'>
          <button className='signup'>
            <div className='signup-bg'>
              <span>Sign up</span>
            </div>
          </button>
        </Link>
      </div>
    </LoginSignupBtnBlock>
  );
};

export default LoginSignupBtn;
