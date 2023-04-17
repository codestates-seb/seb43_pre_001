import { createGlobalStyle } from 'styled-components';
import HeadNotLoginMain from './components/StackHead/HeadNotLoginMain';
const GlobalStyled = createGlobalStyle`
  body {
    background-color: ${({ backgroundColor }) => backgroundColor || '#F1F2F3'};
  }
`;

function App() {
  return (
    <>
      <GlobalStyled />
      <HeadNotLoginMain />
    </>
  );
}

export default App;
