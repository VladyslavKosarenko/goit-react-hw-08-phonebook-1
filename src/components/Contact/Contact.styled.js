import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;

  text-align: center;

  border: 1px solid black;

  padding: 10px 20px;

  border-radius: 10px;

  max-width: 320px;
  width: 100%;

  margin-left: auto;
  margin-right: auto;

  background-color: white;
`;

export const ContactItemContainer = styled.div`
  width: 220px;
`;

export const DeleteButton = styled.button`
  max-width: 208px;

  color: #fff;

  border-radius: 10px;

  padding: 5px 10px;
  border: none;
  background-color: #c64b41;

  transform: scale(1);
  transition: transform 250ms ease-in-out;

  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(1.2);
    transition: transform 250ms ease-in-out;
  }
`;
