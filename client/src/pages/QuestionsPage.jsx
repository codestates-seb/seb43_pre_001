import HeadNotLoginMain from '../components/StackHead/HeadNotLoginMain';
import Questions from '../components/StackQuestions/Questions';

const QuestionsPage = ({ curTab, onTabSelect }) => {
  return (
    <>
      <HeadNotLoginMain />
      <Questions curTab={curTab} onTabSelect={onTabSelect} />
    </>
  );
};

export default QuestionsPage;
