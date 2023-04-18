import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import QuestionsPage from './pages/QuestionsPage';
import DetailQuestionPage from './pages/DetailQuestion';
import AskPageContents from './components/Ask/AskPageContents';

const GlobalStyled = createGlobalStyle`
  body { //#F1F2F3
    background-color: ${({ backgroundColor }) => backgroundColor || '#FFF'};
  }
`;

function App() {
  return (
    <>
      <GlobalStyled />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<QuestionsPage />} />
          <Route path='/questions' element={<DetailQuestionPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
