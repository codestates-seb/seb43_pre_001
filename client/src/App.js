import { createGlobalStyle } from 'styled-components';
import MainContent from './components/ask/MainContent.jsx';
import HeadLogin from './components/StackHead/HeadLogin.jsx';

const GlobalStyled = createGlobalStyle`
  body {
    background-color: ${({ backgroundColor }) => backgroundColor || '#F1F2F3'};
  }
`;

function App() {
  return (
    <>
      <GlobalStyled />
      <HeadLogin />
      <MainContent />
    </>
  );
}

export default App;
