import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import axios from 'axios';

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
    margin-bottom: -8px;
    transform: translateY(4px);
  }

  .pwd-p-required,
  .pwd-p-minLength,
  .pwd-p-pattern {
    margin-bottom: 1px;
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

  #nickname {
    border: ${({ errorsNickname }) => (errorsNickname ? '1px solid #eb2c32' : 'border: 1px solid #bcbfc3')};

    &:focus {
      border: ${({ errorsNickname }) => (errorsNickname ? '1px solid #eb2c32' : '1px solid #7eb9f2')};
      outline: ${({ errorsNickname }) => (errorsNickname ? '4px solid #f8e1e0' : '4px solid #dae5f1')};
    }
  }
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
      transition: 0.13s;
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const baseURL = process.env.REACT_APP_BASE_URL;
  const onSubmit = async (data) => {
    const { nickname, email, password } = data;

    try {
      await axios.post(
        `${process.env.REACT_APP_BASE_URL}/members/signup`,
        {
          nickname,
          name: nickname,
          email,
          password,
        },
        {
          headers: {
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Origin': 'http://e1i5.s3-website.ap-northeast-2.amazonaws.com',
          },
          withCredentials: true,
        },
      );
    } catch (err) {
      console.log(err);
      alert('이미 존재하는 회원입니다.');
    }
  };

  return (
    <SignupFormBlock errorsPwd={errors.password} errorsEmail={errors.email} errorsNickname={errors.nickname} onSubmit={handleSubmit(onSubmit)}>
      <label className='label-name' htmlFor='nickname'>
        Display name
      </label>
      <input
        type='text'
        id='nickname'
        name='nickname'
        {...register('nickname', {
          required: true,
          pattern: /^(?=.*[a-zA-Z0-9가-힣])[a-zA-Z0-9가-힣]{2,10}$/,
        })}
        autoComplete='nickname'
      />
      {errors.nickname && errors.nickname.type === 'required' && <p>필수 입력 항목입니다.</p>}
      {errors.nickname && errors.nickname.type === 'maxLength' && <p>최대 10자 이하로 입력해주세요.</p>}
      {errors.nickname && errors.nickname.type === 'pattern' && <p>2자 이상 10자 이하의 영문, 숫자, 한글로 작성해주세요.</p>}

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

      <label className='label-pwd' htmlFor='pwd'>
        Password
      </label>
      <input
        type='password'
        id='pwd'
        name='password'
        {...register('password', { required: true, minLength: 8, pattern: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/ })}
        autoComplete='current-password'
      />
      {errors.password && errors.password.type === 'required' && <p className='pwd-p-required'>필수 입력 항목입니다.</p>}
      {errors.password && errors.password.type === 'minLength' && <p className='pwd-p-minLength'>최소 8자 이상으로 입력해주세요.</p>}
      {errors.password && errors.password.type === 'pattern' && (
        <p className='pwd-p-pattern'>영문, 숫자, 특수문자 조합으로 8자리 이상 입력해주세요.</p>
      )}

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
