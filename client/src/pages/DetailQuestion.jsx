import HeadLogin from '../components/StackHead/HeadLogin';
import DetailQuestion from '../components/StackDetail/DetailQuestion';
import { useParams } from 'react-router-dom';

const DetailQuestionPage = ({ curTab, onTabSelect }) => {
  return (
    <>
      <HeadLogin />
      <DetailQuestion curTab={curTab} onTabSelect={onTabSelect} />
    </>
  );
};

export default DetailQuestionPage;
