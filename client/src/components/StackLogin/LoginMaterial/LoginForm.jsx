import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../../reducer/userSlice';
import { useNavigate } from 'react-router-dom';

const LoginFormBlock = styled.form`
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

  p {
    color: #f15a59;
    text-shadow: 0 0 0 #f15a59;
    font-size: 12px;
    margin: -8px 0 10px 0;
  }

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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispath = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    console.log(email);
  }, []);

  // 이메일
  const changeEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
    console.log(email);
  };
  // 비밀번호
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  // submit
  const onSubmit = () => {
    // 서버에 데이터가 있는지.. 일치하면 login쪽으로 dispatch하고 아니면 에러 메시지 띄워야 함
    // 일단 그냥 테스트용으로 작성해 봄
    console.log(email, password);
    const user = { name: 'tata', email: email, password: password, loggedIn: true };
    dispath(login(user));
    // 제출이 되면 메인페이지로 이동 됨
    navigate('/');
  };

  return (
    <LoginFormBlock onSubmit={handleSubmit(onSubmit)}>
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

      <div className='pwd-label-span'>
        <label className='label-pwd' htmlFor='pwd'>
          Password
        </label>
        <span>Forgot password?</span>
      </div>
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

      <button className='submit-btn' type='submit'>
        <div className='submit-bg'>
          <span>Log in</span>
        </div>
      </button>
    </LoginFormBlock>
  );
};

export default LoginForm;
