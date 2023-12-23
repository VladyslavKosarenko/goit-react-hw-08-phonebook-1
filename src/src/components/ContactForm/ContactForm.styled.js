import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const InputForm = styled.input`
  max-width: 280px;
  width: 100%;

  margin-left: auto;
  margin-right: auto;

  height: 40px;

  border-radius: 5px;
  border: none;
`;

export const FormGroup = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const SubmitButton = styled.button`
  max-width: 220px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  color: #fff;

  padding: 10px;
  border-radius: 20px;
  border: none;
  background-color: #729d68;

  transform: scale(1);
  transition: transform 250ms ease-in-out;

  margin-bottom: 30px;

  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(1.2);
    transition: transform 250ms ease-in-out;
  }
`;
