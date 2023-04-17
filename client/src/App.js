import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import MainContent from './components/Ask/MainContent';

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
          <Route path='/' element={<MainPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
        </Routes>
      </BrowserRouter>
      <MainContent />
    </>
  );
}

export default App;
