import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setAccessToken } from '../../../reducer/authSlice';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../reducer/userSlice';
import axios from 'axios';

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

  #email {
    border: ${({ errorsEmail }) => (errorsEmail ? '1px solid #eb2c32' : 'border: 1px solid #bcbfc3')};

    &:focus {
      border: ${({ errorsEmail }) => (errorsEmail ? '1px solid #eb2c32' : '1px solid #7eb9f2')};
      outline: ${({ errorsEmail }) => (errorsEmail ? '4px solid #f8e1e0' : '4px solid #dae5f1')};
    }
  }
  #pwd {
    border: ${({ errorsPwd }) => (errorsPwd ? '1px solid #eb2c32' : 'border: 1px solid #bcbfc3')};

    &:focus {
      border: ${({ errorsPwd }) => (errorsPwd ? '1px solid #eb2c32' : '1px solid #7eb9f2')};
      outline: ${({ errorsPwd }) => (errorsPwd ? '4px solid #f8e1e0' : '4px solid #dae5f1')};
    }
  }

  p {
    color: #f15a59;
    text-shadow: 0 0 0 #f15a59;
    font-size: 12px;
    transform: translateY(-11px);
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
      transition: 0.13s;
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
        transition: 0.13s;
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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // submit
  const onSubmitFn = (data) => {
    const { email, password } = data;

    axios
      .post('/api/members/login', { email, password })
      .then((res) => {
        dispatch(setAccessToken({ accessToken: res.data.AccessToken }));
        dispatch(login({ memberId: Number(res.data.memberId), nickname: res.data.nickname }));
      })
      .then(() => {
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
        alert('가입되지 않은 이메일이거나, 잘못된 비밀번호입니다.');
      });
  };

  return (
    <LoginFormBlock errorsPwd={errors.password} errorsEmail={errors.email} onSubmit={handleSubmit(onSubmitFn)}>
      <label className='label-email' htmlFor='email'>
        Email
      </label>
      <input
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
        type='password'
        id='pwd'
        name='password'
        {...register('password', { required: true, minLength: 8, pattern: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/ })}
        autoComplete='current-password'
      />
      {errors.password && errors.password.type === 'required' && <p>필수 입력 항목입니다.</p>}
      {errors.password && errors.password.type === 'minLength' && <p>최소 8자 이상으로 입력해주세요.</p>}
      {errors.password && errors.password.type === 'pattern' && <p>영문, 숫자, 특수문자 조합으로 8자리 이상 입력해주세요.</p>}

      <button className='submit-btn' type='submit'>
        <div className='submit-bg'>
          <span>Log in</span>
        </div>
      </button>
    </LoginFormBlock>
  );
};

export default LoginForm;
