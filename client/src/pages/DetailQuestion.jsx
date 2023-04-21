import HeadLogin from '../components/StackHead/HeadLogin';
import DetailQuestion from '../components/StackDetail/DetailQuestion';
import StackFoot from '../components/StackFoot/StackFoot';

const DetailQuestionPage = ({ curTab, onTabSelect }) => {
  return (
    <>
      <HeadLogin />
      <DetailQuestion curTab={curTab} onTabSelect={onTabSelect} />
    </>
  );
};

export default DetailQuestionPage;
