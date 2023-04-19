import styled from 'styled-components';
import { useState } from 'react';

const EditProfileBlock = styled.div`
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
      }
    }
  }
`;

const EditProfile = () => {
  const [open, setOpen] = useState(false);

  const changeOpen = () => {
    setOpen(!open);
  };

  return (
    <EditProfileBlock open={open}>
      <button className='edit-txt' onClick={changeOpen}>
        <span>Edit your profile</span>
      </button>

      {open ? (
        <>
          <form className='edit-input-form' onSubmit={changeOpen}>
            <fieldset className='fieldset-name'>
              <label className='label-nickname' htmlFor='nickname'>
                Display name
              </label>
              <input type='text' id='nickname' name='nickname' autoComplete='nickname' required />
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
