import styled from 'styled-components';

const ApfBtnBlock = styled.div`
  display: flex;

  button {
    border-radius: 35px;
    color: #61696e;
    font-size: 12.5px;
    text-shadow: 0 0 0 #61696e;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: #e3e5e7;
      color: #252729;
      text-shadow: 0 0 0 #252729;
    }
  }

  .rev-apf-btn {
    width: 231px;
    margin: 0 10px 0 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;
  }

  .about {
    width: 59px;
    height: 29px;
  }
  .products {
    width: 77px;
    height: 29px;
  }
  .for-teams {
    width: 85px;
    height: 29px;
  }

  @media screen and (max-width: 768px) {
    width: 65px;
    transition: 0.3s linear;
    .products {
      display: block;
      transition: 0.3s linear;
    }

    .about,
    .for-teams {
      display: none;
      transition: 0.3s linear;
    }
  }
`;

const ApfBtn = () => {
  return (
    <ApfBtnBlock>
      <div className='rev-apf-btn'>
        <button className='about'>About</button>
        <button className='products'>Products</button>
        <button className='for-teams'>For Teams</button>
      </div>
    </ApfBtnBlock>
  );
};

export default ApfBtn;
