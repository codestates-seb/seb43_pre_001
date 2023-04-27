import styled, { css } from 'styled-components';

const Button = styled.button`
  display: block;
  padding: 8px 10px;
  margin: 2px;
  border: 1px solid hsl(205, 40%, 60%);
  border-radius: 3px;
  box-shadow: inset 0 1px 0 0 hsla(0, 0%, 100%, 0.7);
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  ${(props) => {
    return (
      (props.text === 'Ask Question' ||
        props.text === 'Post your question' ||
        props.text === 'Post Your Answer' ||
        props.text === 'Next' ||
        props.text === 'Save edits') &&
      css`
        height: ${(props) => (props.text === 'Ask Question' || props.text === 'Post Your Answer' ? '40px' : 'auto')};
        color: hsl(0, 0%, 100%);
        background-color: hsl(206, 100%, 52%);
        cursor: pointer;
        :hover {
          background-color: hsl(206, 111%, 41%);
        }
      `
    );
  }}
`;

function SharedButton({ buttonText, functionHandler = (value) => value }) {
  return (
    <Button text={buttonText} onClick={functionHandler}>
      <div>{buttonText}</div>
    </Button>
  );
}

export default SharedButton;
