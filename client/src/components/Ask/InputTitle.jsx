import styled from 'styled-components';
import { AskBoxStyle, InputStyle } from './AskStyle';
import SharedButton from '../SharedButton';
import { useDispatch, useSelector } from 'react-redux';
import { setTitle, setTitleFocus, setDiscardTitle } from '../../reducer/askSlice';
import { useEffect, useState, useRef } from 'react';

const Div = styled(AskBoxStyle)``;
const AskPageInput = styled(InputStyle)`
  :focus {
    border-color: ${(props) => {
      return props.titleErrorMsg ? 'hsl(358deg 68% 59%)' : 'hsl(206deg 90% 70%)';
    }};
    box-shadow: ${(props) => {
      return props.titleErrorMsg ? '0 0 0 4px hsl(0deg 46% 92%)' : '0 0 0 4px hsl(206deg 65% 91%)';
    }};
  }
`;
function InputTitle({ questionTitle, desc = null, defaultValue, onChange }) {
  const [titleErrorMsg, setTitleErrorMsg] = useState(null);
  const { title, discardTitle } = useSelector((state) => state.ask);
  const inputTitleRef = useRef(null);
  const dispatch = useDispatch();

  // Title
  const setTitleText = (e) => {
    dispatch(setTitle(e.target.value));
    onChange(e);
  };

  // 유효성 검사
  let isTitleValid = false;
  const validationTitle = () => {
    if (!title?.length) {
      isTitleValid = false;
      setTitleErrorMsg('Title is missing.');
    } else if (title?.length < 15) {
      isTitleValid = false;
      setTitleErrorMsg('Title must be at least 15 characters.');
    } else {
      setTitleErrorMsg('');
      isTitleValid = true;
    }
  };
  const resetInputTitle = () => {
    inputTitleRef.current.value = '';
    dispatch(setDiscardTitle(false));
  };

  useEffect(() => {
    validationTitle();
  }, [title]);

  useEffect(() => {
    if (discardTitle) resetInputTitle;
  }, [discardTitle]);
  //focus 상태 변경
  const onTitleFocus = () => {
    dispatch(setTitleFocus(true));
  };
  const onTitleBlur = () => {
    dispatch(setTitleFocus(false));
  };

  return (
    <Div>
      <div>
        <label>{questionTitle}</label>
        <p>{desc}</p>
        <AskPageInput
          defaultValue={defaultValue}
          onChange={setTitleText}
          titleErrorMsg={titleErrorMsg}
          onFocus={onTitleFocus}
          onBlur={onTitleBlur}
          ref={inputTitleRef}
        />
      </div>
      {isTitleValid ? null : <div>{titleErrorMsg}</div>}
      {/* <SharedButton buttonText='Next' /> */}
    </Div>
  );
}

export default InputTitle;
