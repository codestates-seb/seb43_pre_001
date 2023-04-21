import styled from 'styled-components';

const PageBtnBox = styled.div`
  border-top: 1px solid #d6d9dc;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BtnBox = styled.div`
  margin: 30px 0;
`;
const PageBtn = () => {
  return (
    <>
      <PageBtnBox>
        <BtnBox>버튼영역입니다</BtnBox>
      </PageBtnBox>
    </>
  );
};

export default PageBtn;
