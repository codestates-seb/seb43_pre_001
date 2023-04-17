import styled from 'styled-components';
import { AskBoxStyle, InputStyle } from './AskStyle';
function Input({ title, desc }) {
  return (
    <Div>
      <div>
        <label>{title}</label>
        <p>{desc}</p>
        <AskPageInput />
      </div>
      <button>Next</button>
    </Div>
  );
}

const Div = styled(AskBoxStyle)``;
const AskPageInput = styled(InputStyle)``;
export default Input;
