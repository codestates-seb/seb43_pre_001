import { createGlobalStyle } from 'styled-components';
import HeadNotLoginMain from './components/StackHead/HeadNotLoginMain';
import Questions from './pages/Questions';

const GlobalStyled = createGlobalStyle`
  body { //#F1F2F3
    background-color: ${({ backgroundColor }) => backgroundColor || '#FFF'};
  }
`;

function App() {
  return (
    <>
      <GlobalStyled />
      <HeadNotLoginMain />
      <Questions></Questions>
    </>
  );
}

export default App;
