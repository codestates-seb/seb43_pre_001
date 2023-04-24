import styled from 'styled-components';
const PageBtnBox = styled.div`
  border-top: 1px solid #d6d9dc;
  padding: 16px;
  display: flex;
  /* justify-content: flex-start; */
  align-items: center;
  gap: 5px;
  padding-left: 70px;
`;

const BtnBox = styled.div`
  margin: 30px 0;
  border: 1px solid rgb(214, 217, 220);
  border-radius: 4px;
  font-size: 13px;
  font-weight: 400;
  line-height: 25px;
  padding: 0 8px;
  color: rgb(59, 64, 69);
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
    background-color: #d6d9dc;
  }
  &.active {
    background-color: #f48225;
    cursor: auto;
  }
`;
const PageBtn = ({ totalPage, page, clickPageNum }) => {
  const arr = [];
  if (totalPage !== 0) {
    for (let i = 1; i <= totalPage; i++) {
      arr.push(i);
    }
  }
  return (
    <>
      {arr && (
        <PageBtnBox>
          {Number(page) !== 1 ? <BtnBox onClick={clickPageNum}>prev</BtnBox> : null}
          {arr.map((el, idx) => {
            return (
              <BtnBox key={page + idx} className={el === Number(page) ? 'active' : ''} onClick={clickPageNum}>
                {el}
              </BtnBox>
            );
          })}
          {Number(page) !== arr.length ? <BtnBox onClick={clickPageNum}>next</BtnBox> : null}
        </PageBtnBox>
      )}
    </>
  );
};

export default PageBtn;
