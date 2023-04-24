import MoonLoader from 'react-spinners/MoonLoader';
import styled from 'styled-components';

const LoadingBox = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
`;
const Loader = styled(MoonLoader)``;
const Loading = () => {
  return (
    <>
      <LoadingBox>
        <Loader />
      </LoadingBox>
    </>
  );
};

export default Loading;
