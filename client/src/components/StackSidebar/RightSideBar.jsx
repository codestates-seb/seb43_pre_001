import styled from 'styled-components';
import fePencilImg from '../../assets/fePencil2.svg';
import stackgrayImg from '../../assets/stack-gray-icon.svg';

const RightSideBox = styled.div`
  min-width: 235px;
  width: 300px;
  height: 330px;
  margin: 24px 0;
  background-color: #fdf7e2;
  border-radius: 3px;
  border: solid 1px #f1e5bc;

  li {
    font-size: 13px;
    font-weight: 450;
    line-height: 17px;
    color: #3b4045;
    text-decoration: none solid rgb(82, 89, 96);
    padding: 0 16px;
    margin: 12px 0;
    cursor: pointer;
    img {
      margin-right: 5px;
    }
  }
  li.sub-title {
    cursor: auto;
    font-size: 12px;
    font-weight: 700;
    background-color: #fbf3d5;
    border-top: 1px solid #f1e5bc;
    border-bottom: 1px solid #f1e5bc;
    padding: 12px 15px;
    margin: 0;
  }
`;

const RightSideBar = () => {
  return (
    <>
      <RightSideBox>
        <ul>
          <li className='sub-title'>The Overflow Blog</li>
          <li>
            <img src={fePencilImg} alt='pen-img' />
            Community is the future of AI
          </li>
          <li>
            <img src={fePencilImg} alt='pen-img' />
            The philosopher who believes in Web Assembly
          </li>
          <li className='sub-title'>Featured on Meta</li>

          <li>
            <img src={stackgrayImg} alt='stackgray-img' />
            Content Discovery initiative 4/13 update: Related questions using a Machine...
          </li>
          <li>
            <img src={stackgrayImg} alt='stackgray-img' />
            The [protection] tag is being burninated
          </li>
          <li>
            <img src={stackgrayImg} alt='stackgray-img' />
            Temporary policy: ChatGPT is banned
          </li>
        </ul>
      </RightSideBox>
    </>
  );
};

export default RightSideBar;
