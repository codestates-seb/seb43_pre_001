import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BackgroundColor } from './GlobalStyle';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import QuestionsPage from './pages/QuestionsPage';
import DetailQuestionPage from './pages/DetailQuestion';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <BackgroundColor />
        <Routes>
          <Route path='/' element={<QuestionsPage />} />
          <Route path='/questions/:id' element={<DetailQuestionPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/profile' element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
