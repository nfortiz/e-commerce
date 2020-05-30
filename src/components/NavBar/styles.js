import styled from 'styled-components';
import { Container } from '../../styles/Grid';

export const Info = styled.div`
  background: ${(props) => props.theme.colors.highlight};
  color: ${(props) => props.theme.colors.accent};
  height: 30px;
  width: 100vw;
`;

export const InfoGroup = styled(Container)`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  height: inherit;
`;

export const InfoList = styled.ul`
  align-items: center;
  display: inherit;
  height: 100%;
  margin: 0;
`;

export const InfoItem = styled.li`
  color: ${(props) => props.theme.colors.accent};
  display: inherit;

  &:not(:first-child) {
    margin-left: 30px;
  }
`;
