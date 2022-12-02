import styled from 'styled-components';
import { StyledTheme } from 'theme';

export const IconWrapper = styled.div<{ haveOnClick?: boolean; nonFlex?: boolean }>`
  display: ${(props) => (props.nonFlex ? 'block' : 'flex')};
  align-items: center;

  &:hover {
    cursor: ${(props) => (props.haveOnClick ? 'pointer' : 'unset')};
  }
`;

export const TextWrapper = styled.span`
  &.icon-text {
    color: ${(props: StyledTheme) => props.theme.light};
    margin-left: 5px;
  }
`;
