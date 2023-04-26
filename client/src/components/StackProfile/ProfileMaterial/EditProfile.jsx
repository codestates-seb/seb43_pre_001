import styled from 'styled-components';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { changeName } from '../../../reducer/userSlice';
import axios from 'axios';

const EditProfileBlock = styled.div`
  #nickname {
    border: ${({ errorsNickname }) => (errorsNickname ? '1px solid #eb2c32' : 'border: 1px solid #bcbfc3')};

    &:focus {
      border: ${({ errorsNickname }) => (errorsNickname ? '1px solid #eb2c32' : '1px solid #7eb9f2')};
      outline: ${({ errorsNickname }) => (errorsNickname ? '4px solid #f8e1e0' : '4px solid #dae5f1')};
    }
  }

  .edit-txt {
    width: 133px;
    height: 27px;
    font-size: 15px;
    color: ${({ open }) => (open ? '#fff' : '#575F65')};
    text-shadow: ${({ open }) => (open ? '0 0 0 #fff' : '0 0 0 #575F65')};
    margin-top: 24px;
    font-weight: 0 0 0 #fff;
    background-color: ${({ open }) => (open ? '#f48224' : '#fff')};
    border-radius: 35px;
    transition: 0.07s ease-in;
  }

  .edit-input-form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .fieldset-name {
    width: 471px;
    height: 113px;
    margin-top: 21px;
    border: 1px solid #e7e8ea;
    border-radius: 5px;
    background-color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    p {
      color: #f15a59;
      text-shadow: 0 0 0 #f15a59;
      font-size: 12.5px;
      margin-top: 6.5px;
    }

    .required {
      transform: translateX(-154px);
    }
    .maxLength {
      transform: translateX(-128.5px);
    }
    .pattern {
      transform: translateX(-72px);
    }

    label {
      color: #0c0d0e;
      text-shadow: 0 0 0 #0c0d0e;
      font-size: 15px;
      margin: 26px 0 0 -325px;
    }

    input {
      width: 421px;
      height: 33px;
      border: 1px solid #c2c7cb;
      margin-top: 7px;
      border-radius: 3px;
      padding: 8px;

      &:focus {
        border: 1px solid #7eb9f2;
        outline: 4px solid #dae5f1;
      }
    }
  }

  .save-profile {
    width: 94px;
    height: 38px;
    border: 1px solid #0a95ff;
    border-radius: 3px;
    margin: 19px 0 0 -355px;
    background-color: #6cbfff;

    color: #fff;
    font-size: 12.5px;
    text-shadow: 0 0 0 #fff;

    &:hover {
      border: 1px solid #3272c6;
      background-color: #83aade;
      transition: 0.18s;
    }

    .save-profile-bg {
      width: 92px;
      height: 35px;
      border-radius: 2px;
      margin-top: 1px;
      background-color: #0a95ff;

      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: #3272c6;
        transition: 0.18s;
      }
    }
  }
`;

const EditProfile = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const { memberId } = useSelector((state) => state.user);
  const { accessToken } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const changeOpen = () => {
    setOpen(!open);
  };
  const baseURL = process.env.REACT_APP_BASE_URL;
  const onSubmitFn = (data) => {
    const reqBody = {
      memberId: memberId,
      nickname: data.nickname,
    };

    axios
      .patch(`${baseURL}/members/update/${memberId}`, reqBody, { headers: { Authorization: accessToken } })
      .then((res) => {
        dispatch(changeName({ nickname: res.data.nickname }));
      })
      .then(() => {
        setOpen(!open);
        reset({ nickname: '' });
      });
  };

  return (
    <EditProfileBlock errorsNickname={errors.nickname} open={open}>
      <button className='edit-txt' onClick={changeOpen}>
        <span>Edit your profile</span>
      </button>

      {open ? (
        <>
          <form className='edit-input-form' onSubmit={handleSubmit(onSubmitFn)}>
            <fieldset className='fieldset-name'>
              <label className='label-nickname' htmlFor='nickname'>
                Display name
              </label>
              <input
                type='text'
                id='nickname'
                name='nickname'
                {...register('nickname', { required: true, maxLength: 10, pattern: /^(?=.*[a-zA-Z0-9가-힣])[a-zA-Z0-9가-힣]{2,10}$/ })}
                autoComplete='nickname'
              />
              {errors.nickname && errors.nickname.type === 'required' && <p className='required'>필수 입력 항목입니다.</p>}
              {errors.nickname && errors.nickname.type === 'maxLength' && <p className='maxLength'>최대 10자 이하로 입력해주세요.</p>}
              {errors.nickname && errors.nickname.type === 'pattern' && (
                <p className='pattern'>2자 이상 10자 이하의 영문, 숫자, 한글로 작성해주세요.</p>
              )}
            </fieldset>

            <button className='save-profile'>
              <div className='save-profile-bg'>Save profile</div>
            </button>
          </form>
        </>
      ) : null}
    </EditProfileBlock>
  );
};

export default EditProfile;
