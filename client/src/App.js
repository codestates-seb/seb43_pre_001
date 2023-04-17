import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`
  body {
    background-color: ${({ backgroundColor }) => backgroundColor || '#F1F2F3'};
  }
`;

function App() {
  return;
}

export default App;
