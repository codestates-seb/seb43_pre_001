import HeadLogin from '../components/StackHead/HeadLogin';
import HeadNotLoginMain from '../components/StackHead/HeadNotLoginMain';
import DetailQuestion from '../components/StackDetail/DetailQuestion';
import StackFoot from '../components/StackFoot/StackFoot';
import { useSelector } from 'react-redux';

const DetailQuestionPage = () => {
  const { loggedIn } = useSelector((state) => state.user);

  return (
    <>
      {loggedIn ? <HeadLogin /> : <HeadNotLoginMain />}
      <DetailQuestion />
    </>
  );
};

export default DetailQuestionPage;
