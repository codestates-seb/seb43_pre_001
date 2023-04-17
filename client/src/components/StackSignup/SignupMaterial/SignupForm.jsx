import styled from 'styled-components';

const SignupFormBlock = styled.form`
  width: 317px;
  height: 411px;
  margin-top: 17px;
  border-radius: 7px;
  background-color: #fff;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15);

  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;

  label {
    color: #000;
    display: block;
    font-size: 14.5px;
    font-weight: 600;
    margin-top: 17px;
    margin-bottom: 6px;
  }

  input {
    display: block;
    width: 268px;
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
    width: 268px;
    height: 38px;
    color: #fff;
    text-shadow: 0 0 0 #fff;
    border: 1px solid #0a95ff;
    border-radius: 3px;
    margin-bottom: 17px;
    background-color: #6cbfff;

    &:hover {
      border: 1px solid #3272c6;
      background-color: #83aade;
    }

    .submit-bg {
      width: 268px;
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
      margin: 8px 0 0 62px;
      cursor: pointer;
    }
  }

  p {
    color: #7d848c;
    font-size: 12px;
    text-shadow: 0 0 0 #7d848c;
  }

  .p-pwd-txt {
    width: 268px;
    height: 45px;
    margin: 6px 0 17px 0;
    line-height: 15px;
  }

  .p-by-txt {
    width: 268px;
    height: 30px;
    margin: 4px 0 28px 0;
    line-height: 15px;

    .blue-txt {
      color: #0074cc;
      text-shadow: 0 0 0 #0074cc;
      cursor: pointer;

      &:hover {
        color: #4baafb;
      }
    }
  }

  .label-name {
    margin-top: 28px;
    margin-left: -172px;
  }

  .label-email {
    margin-left: -228px;
  }

  .label-pwd {
    margin-left: -197px;
  }
`;

const SignupForm = () => {
  return (
    <SignupFormBlock>
      <label className='label-name' htmlFor='username'>
        Display name
      </label>
      <input type='text' id='username' name='username' autoComplete='username' required />

      <label className='label-email' htmlFor='email'>
        Email
      </label>
      <input type='email' id='email' name='email' autoComplete='username' required />

      <label className='label-pwd' htmlFor='pwd'>
        Password
      </label>
      <input type='password' id='pwd' name='pwd' autoComplete='current-password' required />

      <div className='p-pwd-txt'>
        <p>Passwords must contain at least eight characters, including at least 1 letter and 1 number.</p>
      </div>

      <button className='submit-btn' type='submit'>
        <div className='submit-bg'>
          <span>Sign up</span>
        </div>
      </button>

      <div className='p-by-txt'>
        <p>
          By clicking “Sign up”, you agree to our <span className='blue-txt'>terms of service</span>, <span className='blue-txt'>privacy</span> policy
          and <span className='blue-txt'>cookie policy</span>
        </p>
      </div>
    </SignupFormBlock>
  );
};

export default SignupForm;
