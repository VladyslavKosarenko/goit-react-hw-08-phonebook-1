import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 15px;
`;

export const Label = styled.label`
  color: #171717;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 15.6px */

  max-width: 300px;
`;

export const Input = styled.input`
  height: 35px;
  width: 300px;
  border-radius: 5px;
  border: none;
`;

export const Button = styled.button`
  color: var(--white, #f6f6f6);
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-transform: uppercase;

  border-radius: 60px;
  background: #3a70da;

  max-width: 300px;
  width: 100%;

  padding: 10px;

  margin-left: auto;
  margin-right: auto;

  border: none;

  cursor: pointer;
`;
