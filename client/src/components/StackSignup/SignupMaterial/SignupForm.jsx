import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

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

  p {
    color: #f15a59;
    text-shadow: 0 0 0 #f15a59;
    font-size: 12px;
    margin: 6px 0 -10px 0;
  }

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

  .p-txt {
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
    /* margin: 4px 0 28px 0; */
    line-height: 15px;

    span {
      color: #7d848c;
      font-size: 12px;
      text-shadow: 0 0 0 #7d848c;
    }

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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // 이름
  const changeName = (e) => {
    setEmail(e.target.value);
  };
  // 이메일
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  // 비밀번호
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  // submit
  const onSubmit = () => {};

  return (
    <SignupFormBlock onSubmit={handleSubmit(onSubmit)}>
      <label className='label-name' htmlFor='nickname'>
        Display name
      </label>
      <input
        onChange={changeName}
        type='text'
        id='nickname'
        name='nickname'
        {...register('nickname', {
          required: true,
          maxLength: 10,
        })}
        autoComplete='nickname'
      />
      {errors.nickname && errors.nickname.type === 'required' && <p>필수 입력 항목입니다.</p>}
      {errors.nickname && errors.nickname.type === 'maxLength' && <p>최대 10자 이하로 입력해주세요.</p>}

      <label className='label-email' htmlFor='email'>
        Email
      </label>
      <input
        onChange={changeEmail}
        type='email'
        id='email'
        name='email'
        {...register('email', {
          required: true,
          maxLength: 50,
          pattern: /^\S+@\S+$/i,
        })}
        autoComplete='email'
      />
      {errors.email && errors.email.type === 'required' && <p>필수 입력 항목입니다.</p>}
      {errors.email && errors.email.type === 'maxLength' && <p>최대 50자 이하로 입력해주세요.</p>}
      {errors.email && errors.email.type === 'pattern' && <p>올바른 이메일 형식이 아닙니다.</p>}

      <label className='label-pwd' htmlFor='pwd'>
        Password
      </label>
      <input
        onChange={changePassword}
        type='password'
        id='pwd'
        name='password'
        {...register('password', { required: true, minLength: 8 })}
        autoComplete='current-password'
      />
      {errors.password && errors.password.type === 'required' && <p>필수 입력 항목입니다.</p>}
      {errors.password && errors.password.type === 'minLength' && <p>최소 8자 이상으로 입력해주세요.</p>}

      <div className='p-pwd-txt'>
        <p className='p-txt'>Passwords must contain at least eight characters, including at least 1 letter and 1 number.</p>
      </div>

      <button className='submit-btn' type='submit'>
        <div className='submit-bg'>
          <span>Sign up</span>
        </div>
      </button>

      <div className='p-by-txt'>
        <span>
          By clicking “Sign up”, you agree to our <span className='blue-txt'>terms of service</span>, <span className='blue-txt'>privacy</span> policy
          and <span className='blue-txt'>cookie policy</span>
        </span>
      </div>
    </SignupFormBlock>
  );
};

export default SignupForm;