import styled from 'styled-components';

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const UserWelcomeText = styled.p`
  color: #101010;
`;

export const LogOutButton = styled.button`
  border: none;
  padding: 5px;

  border-radius: 5px;

  font-weight: 600;

  transition: color 0.3s ease, background 0.3s ease;

  cursor: pointer;

  &.active {
    color: #9146ff;
  }

  &:hover {
    color: #fff;
    background: #d20000;
  }
`;
