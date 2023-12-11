import { useDispatch } from 'react-redux';
import {
  ContactItem,
  ContactItemContainer,
  DeleteButton,
} from './Contact.styled';
import { deleteContact } from 'redux/operations';

export const Contact = ({ data: { name, phone, id } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <ContactItem key={id}>
      <ContactItemContainer>
        {name} <br /> {phone}
      </ContactItemContainer>
      <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
    </ContactItem>
  );
};
