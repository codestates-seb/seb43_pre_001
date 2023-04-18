import styled from 'styled-components';
import QuestionsCard from './QuestionsCard';
import initialData from './initialData';

const QuestionsListBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const QuestionsList = () => {
  return (
    <>
      <QuestionsListBox>
        {initialData.map((el) => {
          return <QuestionsCard key={el.question_id} questions={el} />;
        })}
      </QuestionsListBox>
    </>
  );
};

export default QuestionsList;
