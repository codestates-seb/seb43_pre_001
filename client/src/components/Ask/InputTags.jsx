import styled from 'styled-components';
import SharedButton from '../SharedButton';
import { AskBoxStyle, InputStyle } from './AskStyle';

import { useDispatch, useSelector } from 'react-redux';
import { setTags, setTagsErrorMsg } from '../../reducer/askSlice';
import { useEffect } from 'react';
import { tags } from '../../assets/askNoticeData';

const Div = styled(AskBoxStyle)``;
const AskPageInput = styled(InputStyle)``;

function InputTags() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  //Tags
  const setTagsText = (e) => {
    dispatch(setTags(e.target.value));
  };

  let isTagsValid = false;
  const validationTags = () => {
    if (!state.ask.tags?.length) {
      isTagsValid = false;
      dispatch(setTagsErrorMsg('Please enter at least one tag; see a list of popular tags.'));
    } else {
      isTagsValid = true;
      dispatch(setTagsErrorMsg(''));
    }
  };

  useEffect(() => {
    validationTags();
  }, [state]);

  return (
    <Div>
      <div>
        <label>{tags.title}</label>
        <p>{tags.desc}</p>
        <AskPageInput onChange={setTagsText} />
      </div>
      {isTagsValid ? null : <div>{state.ask.tagsErrorMsg}</div>}
      <SharedButton buttonText='Next' />
    </Div>
  );
}

export default InputTags;
