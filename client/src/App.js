import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BackgroundColor } from './GlobalStyle';

import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import QuestionsPage from './pages/QuestionsPage';
import DetailQuestionPage from './pages/DetailQuestion';
import AskPage from './pages/AskPage';
import ProfilePage from './pages/ProfilePage';
import EditPage from './pages/EditPage';
import AnswerEditPage from './pages/AnswerEditPage';

function App() {
  //탭 메뉴 선택을 위한 state 설정
  return (
    <BrowserRouter>
      <BackgroundColor />
      <Routes>
        <Route path='/' element={<QuestionsPage />} />
        <Route path='/questions/:questionId' element={<DetailQuestionPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/questions/ask' element={<AskPage />} />
        <Route path='/questions/:id/edit' element={<EditPage />} />
        <Route path='/answers/:id/edit' element={<AnswerEditPage />} />

        <Route path='*' element={<QuestionsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
