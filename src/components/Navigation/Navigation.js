import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { Nav, StyledLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </Nav>
  );
};
