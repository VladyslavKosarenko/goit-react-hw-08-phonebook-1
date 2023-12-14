import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import {
  LogOutButton,
  UserContainer,
  UserWelcomeText,
} from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserContainer>
      <UserWelcomeText>Welcome, {user.name}</UserWelcomeText>
      <LogOutButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LogOutButton>
    </UserContainer>
  );
};
