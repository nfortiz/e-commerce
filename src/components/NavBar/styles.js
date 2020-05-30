import styled from 'styled-components';
import { Container } from '../../styles/Grid';

export const Info = styled.nav`
  background: ${(props) => props.theme.colors.highlight};
  color: ${(props) => props.theme.colors.accent};
  height: 30px;
  width: 100vw;
`;

export const Group = styled(Container)`
  display: flex;
  margin: 0 auto;
  justify-content: ${(props) => props.content};
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

export const Search = styled.div`
  height: 80px;
  width: 100vw;
  & * {
    align-items: center;
  }
`;

export const NavSearch = styled.form`
  position: relative;
  height: 40px;
  width: 480px;
  display: flex;

  & > *:first-child {
    border-radius: 20px 0 0 20px;
  }

  & > *:last-child {
    border-radius: 0 20px 20px 0;
  }
  
`;

export const SearchInput = styled.input`
  border: 1px solid ${(props) => props.theme.colors.muted};
  height: inherit;
  left: 0;
  padding-left: 20px;
  width: 100%;

  &::placeholder {
    font-weight:  ${(props) => props.theme.fontWeights.light};
    font-size: ${(props) => props.theme.fontSizes[2]};
    align-items: center;
  }
`;

export const SearchButton = styled.button`
  background: ${(props) => props.theme.colors.primary};
  border: none;
  height: inherit;
  width: 70px;
`;
