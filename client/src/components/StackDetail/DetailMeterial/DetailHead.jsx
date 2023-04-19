import styled from 'styled-components';

const DetailHeadBox = styled.div`
  /* min-width: 750px; */
  display: flex;
  justify-content: space-between;
  div {
    font-size: 27px;
    font-weight: 400;
    line-height: 36.45px;
    color: rgb(59, 64, 69);
  }
  button {
    flex-shrink: 0;
    width: 104px;
    height: 38px;
    text-shadow: 0 0 0 #fff;
    border: 1px solid #fff;
    color: #fff;
    background-color: rgb(10, 149, 255);
    border-radius: 4px;
    :hover {
      background-color: #3272c6;
    }
  }
`;
const DetailInfo = styled.div`
  margin-top: 6px;
  font-size: 13px;
  font-weight: 400;
  line-height: 17px;
  color: rgb(106, 115, 124);
  span {
    color: rgb(35, 38, 41);
    margin-right: 10px;
  }
`;

const DetailHead = ({ question }) => {
  return (
    <>
      <DetailHeadBox>
        <div>{question[0].title}</div>
        <button>Ask Question</button>
      </DetailHeadBox>
      <DetailInfo>
        Asked <span>today</span> Modified <span>today</span> Viewed <span>3 times</span>
      </DetailInfo>
      <div className='hr-line'></div>
    </>
  );
};

export default DetailHead;
