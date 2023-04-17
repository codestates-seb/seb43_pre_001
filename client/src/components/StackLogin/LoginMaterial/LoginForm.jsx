import styled from 'styled-components';

const LoginFormBlock = styled.div`
  width: 288px;
  height: 236px;
  margin-top: 19px;
  border-radius: 7px;
  background-color: #fff;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  label {
    color: #000;
    display: block;
    font-size: 14.5px;
    font-weight: 600;
    margin-bottom: 5px;
  }

  #email {
    margin-bottom: 17px;
  }

  #pwd {
    margin-bottom: 16px;
  }

  input {
    display: block;
    width: 240px;
    height: 33px;
    border: 1px solid #bcbfc3;
    border-radius: 3px;
    padding: 8px;

    &:focus {
      border: 1px solid #7eb9f2;
      outline: 4px solid #dae5f1;
    }
  }

  .submit-btn {
    width: 240px;
    height: 38px;
    color: #fff;
    text-shadow: 0 0 0 #fff;
    border: 1px solid #0a95ff;
    border-radius: 3px;
    margin-bottom: 26px;
    background-color: #6cbfff;

    &:hover {
      border: 1px solid #3272c6;
      background-color: #83aade;
    }

    .submit-bg {
      width: 238px;
      height: 35px;
      margin-top: 1px;
      border-radius: 2px;
      background-color: #0a95ff;

      display: flex;
      justify-content: center;
      align-items: center;

      span {
        margin-top: 1px;
      }

      &:hover {
        background-color: #3272c6;
      }
    }
  }

  .pwd-label-span {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      color: #0074cc;
      font-size: 12px;
      font-weight: 500;
      margin: -7px 0 0 67px;
      cursor: pointer;

      &:hover {
        color: #4baafb;
      }
    }
  }

  .label-email {
    margin-top: 27px;
    margin-left: -199px;
  }

  .label-pwd {
    margin-left: 1px;
  }
`;

const LoginForm = () => {
  return (
    <LoginFormBlock>
      <label className='label-email' htmlFor='email'>
        Email
      </label>
      <input type='email' id='email' name='email' autoComplete='username' required />

      <div className='pwd-label-span'>
        <label className='label-pwd' htmlFor='pwd'>
          Password
        </label>
        <span>Forgot password?</span>
      </div>
      <input type='password' id='pwd' name='pwd' autoComplete='current-password' required />

      <button className='submit-btn' type='submit'>
        <div className='submit-bg'>
          <span>Log in</span>
        </div>
      </button>
    </LoginFormBlock>
  );
};

export default LoginForm;
