import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;

  color: #101010;

  font-size: 20px;
  font-weight: 800;

  transition: color 0.3s ease;

  &.active {
    color: #3a70da;
  }

  &:hover {
    color: #3a70da;
  }
`;
