import { createGlobalStyle } from 'styled-components';
import { useLocation } from 'react-router-dom';

const GlobalStyled = createGlobalStyle`
  body { //#F1F2F3
    background-color: ${({ backgroundColor }) => backgroundColor || '#FFF'};
  }
`;

export function BackgroundColor() {
  const location = useLocation();
  let backgroundColor;
  switch (location.pathname) {
    case '/login':
    case '/signup':
      backgroundColor = '#F1F2F3';
      break;
    default:
      backgroundColor = '#FFF';
  }

  return <GlobalStyled backgroundColor={backgroundColor} />;
}
