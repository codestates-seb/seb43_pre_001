import styled from 'styled-components';
import RightSideBar from '../../StackSidebar/RightSideBar';
import upIcon from '../../../assets/up-icon.svg';
import downIcon from '../../../assets/down-icon.svg';
// toast ui Viewer 컴포넌트 사용
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';
import CreateAnswer from '../../Answer/CreateAnswer';
import Markdwon from '../../Markdown';

const DetailViewBox = styled.div`
  display: flex;
`;

const DetailSideBar = styled.div`
  margin: 24px 16px 0 0;
  width: 36px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  div.score {
    font-size: 21px;
    line-height: 27.5px;
    color: rgb(106, 115, 124);
  }
  div.arrow-img {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;
const DetailContentBox = styled.div`
  margin: 24px 24px 0 0;
  flex-grow: 1;
  height: 500px;
`;

const DetailView = ({ question }) => {
  return (
    <>
      <DetailViewBox>
        <DetailSideBar>
          <div className='arrow-img'>
            <img src={upIcon} alt='up-icon'></img>
          </div>
          <div className='score'> 0</div>
          <div className='arrow-img'>
            <img src={downIcon} alt='down-icon'></img>
          </div>
        </DetailSideBar>
        <DetailContentBox>
          <Markdwon content={question.content} />
        </DetailContentBox>
        <RightSideBar></RightSideBar>
      </DetailViewBox>
      {/* <CreateAnswer /> */}
    </>
  );
};

export default DetailView;
