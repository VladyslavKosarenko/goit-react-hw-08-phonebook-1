import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const { name, phone } = form.elements;

    if (
      contacts.find(
        item =>
          item.name.toLowerCase().trim() === name.value.toLowerCase().trim()
      )
    ) {
      alert(`${name.value} is already in contacts`);
      return;
    }

    dispatch(addContact({ name: name.value, phone: phone.value }));
    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter name" />
        <input type="tel" name="phone" placeholder="Enter phone number" />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};
