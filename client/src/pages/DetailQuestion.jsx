import HeadLogin from '../components/StackHead/HeadLogin';
import HeadNotLoginMain from '../components/StackHead/HeadNotLoginMain';
import DetailQuestion from '../components/StackDetail/DetailQuestion';
import StackFoot from '../components/StackFoot/StackFoot';
import { useSelector } from 'react-redux';


const DetailQuestionPage = ({ curTab, onTabSelect }) => {
  const { loggedIn } = useSelector((state) => state.user);

  return (
    <>
      {loggedIn ? <HeadLogin /> : <HeadNotLoginMain />}
      <DetailQuestion curTab={curTab} onTabSelect={onTabSelect} />
    </>
  );
};

export default DetailQuestionPage;
