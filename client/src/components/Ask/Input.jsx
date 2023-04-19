import styled from 'styled-components';
import { AskBoxStyle, InputStyle } from './AskStyle';
import SharedButton from '../SharedButton';
import { useDispatch, useSelector } from 'react-redux';
import { setTitle, setTitleErrorMsg, setTags, setTagsErrorMsg } from '../reducer/askSlice';
import { useEffect } from 'react';

const Div = styled(AskBoxStyle)``;
const AskPageInput = styled(InputStyle)``;

function Input({ title, desc }) {
  let dispatch = useDispatch();
  let state = useSelector((state) => state);

  // Title
  let setTitleText = (e) => {
    dispatch(setTitle(e.target.value));
  };

  let isTitleValid = false;
  let validationTitle = () => {
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

  //Tags
  let setTagsText = (e) => {
    dispatch(setTags(e.target.value));
  };

  let isTagsValid = false;
  let validationTags = () => {
    if (!state.ask.tags?.length) {
      isTagsValid = false;
      dispatch(setTagsErrorMsg('Please enter at least one tag; see a list of popular tags.'));
    } else {
      isTagsValid = true;
      dispatch(setTagsErrorMsg(''));
    }
  };

  useEffect(() => {
    validationTitle();
    validationTags();
  }, [state]);

  let setText = title === 'Title' ? setTitleText : setTagsText;
  let isValid = title === 'Title' ? isTitleValid : isTagsValid;
  let errorMsg = title === 'Title' ? state.ask.setTitleErrorMsg : state.ask.setTagsErrorMsg;

  return (
    <Div>
      <div>
        <label>{title}</label>
        <p>{desc}</p>
        <AskPageInput onChange={setText} />
      </div>
      {isValid ? null : <div>{errorMsg}</div>}
      <SharedButton buttonText='Next' />
    </Div>
  );
}

export default Input;
