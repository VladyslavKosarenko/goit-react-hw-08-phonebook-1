import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { ContactsListTitle, PhonebookTitle } from 'components/App/GlobalStyle';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your tasks</title>
      </Helmet>
      <PhonebookTitle>Your Phonebook</PhonebookTitle>
      <ContactForm />
      <ContactsListTitle>Contacts</ContactsListTitle>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactsList />
    </>
  );
}
