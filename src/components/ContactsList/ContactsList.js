import { Contact } from 'components/Contact/Contact';
import { ListWithContacts } from './ContactsList.styled';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactsList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  return (
    <ListWithContacts>
      {visibleContacts.map(contact => (
        <Contact data={contact} key={contact.id} />
      ))}
    </ListWithContacts>
  );
};
