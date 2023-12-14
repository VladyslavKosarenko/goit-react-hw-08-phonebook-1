import { NavLink } from 'react-router-dom';
import { AuthContainer, StyledLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthContainer>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Log In</StyledLink>
    </AuthContainer>
  );
};
