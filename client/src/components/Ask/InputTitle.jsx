import styled from 'styled-components';
import { AskBoxStyle, InputStyle } from './AskStyle';
import SharedButton from '../SharedButton';
import { useDispatch, useSelector } from 'react-redux';
import { setTitle, setTitleErrorMsg } from '../../reducer/askSlice';
import { useEffect } from 'react';

const Div = styled(AskBoxStyle)``;
const AskPageInput = styled(InputStyle)``;

function InputTitle({ title, desc }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  // Title
  const setTitleText = (e) => {
    dispatch(setTitle(e.target.value));
  };

  let isTitleValid = false;
  const validationTitle = () => {
    if (!state.ask.title?.length) {
      isTitleValid = false;
      dispatch(setTitleErrorMsg('Title is missing.'));
    } else if (state.ask.title?.length < 15) {
      isTitleValid = false;
      dispatch(setTitleErrorMsg('Title must be at least 15 characters.'));
    } else {
      isTitleValid = true;
      dispatch(setTitleErrorMsg(''));
    }
  };

  useEffect(() => {
    validationTitle();
  }, [state]);

  return (
    <Div>
      <div>
        <label>{title}</label>
        <p>{desc}</p>
        <AskPageInput onChange={setTitleText} />
      </div>
      {isTitleValid ? null : <div>{state.ask.titleErrorMsg}</div>}
      <SharedButton buttonText='Next' />
    </Div>
  );
}

export default InputTitle;
