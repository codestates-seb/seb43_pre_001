import styled from 'styled-components';
import RightSideBar from '../../StackSidebar/RightSideBar';
import upIcon from '../../../assets/up-icon.svg';
import downIcon from '../../../assets/down-icon.svg';
//좌측에 업다운 등 바 너비 36에 높이 뷰페이지 전체 + 마진 라이트 16 + 뷰 페이지 + 라이트 사이드바
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
  background-color: green;
  height: 500px;
`;

const DetailView = ({ question }) => {
  console.log(question);
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
        <DetailContentBox></DetailContentBox>
        <RightSideBar></RightSideBar>
      </DetailViewBox>
    </>
  );
};

export default DetailView;
