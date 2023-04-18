import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import QuestionsPage from './pages/QuestionsPage';
import DetailQuestionPage from './pages/DetailQuestion';
import AskPageContents from './components/Ask/AskPageContents';

import { useState, useCallback } from 'react';

const GlobalStyled = createGlobalStyle`
  body { //#F1F2F3
    background-color: ${({ backgroundColor }) => backgroundColor || '#FFF'};
  }
`;

function App() {
  //탭 메뉴 선택을 위한 state 설정
  const [curTab, setTab] = useState('home');
  const onTabSelect = useCallback((curTab) => setTab(curTab), []);
  return (
    <>
      <GlobalStyled />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<QuestionsPage curTab={curTab} onTabSelect={onTabSelect} />} />
          <Route path='/questions/:question_id' element={<DetailQuestionPage curTab={curTab} onTabSelect={onTabSelect} />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
