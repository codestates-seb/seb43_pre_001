import styled from 'styled-components';
import LeftSideBar from '../components/StackSidebar/LeftSideBar';
import RightSideBar from '../components/StackSidebar/RightSideBar';
import HeadLogin from '../components/StackHead/HeadLogin';
import EditAnswer from '../components/EditPost/EditAnswer';
const EditWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 1264px;
`;

const EditPageContent = styled.div`
  display: flex;
  min-height: 750px;
  overflow: visible;
  padding: 24px;
`;

const EditPageMain = styled.main`
  max-width: 662px;
`;

function AnswerEditPage() {
  return (
    <>
      <HeadLogin />
      <LeftSideBar curTab='questions' />
      <EditWrapper>
        <EditPageContent>
          <EditPageMain>
            <EditAnswer />
          </EditPageMain>
          <RightSideBar />
        </EditPageContent>
      </EditWrapper>
    </>
  );
}

export default AnswerEditPage;
