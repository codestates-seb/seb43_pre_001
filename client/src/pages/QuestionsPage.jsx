import HeadNotLoginMain from '../components/StackHead/HeadNotLoginMain';
import HeadLogin from '../components/StackHead/HeadLogin';
import Questions from '../components/StackQuestions/Questions';
import { useSelector } from 'react-redux';

const QuestionsPage = () => {
  const { loggedIn } = useSelector((state) => state.user);

  return (
    <>
      {loggedIn ? <HeadLogin /> : <HeadNotLoginMain />}
      <Questions />
    </>
  );
};

export default QuestionsPage;
