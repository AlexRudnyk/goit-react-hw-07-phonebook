import { useSelector } from 'react-redux';
import { ContactItem } from 'components/contactItem/ContactItem';
import { selectVisibleContacts } from 'redux/selectors';

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ul>
      {visibleContacts.map(contact => (
        <ContactItem contact={contact} key={contact.id} />
      ))}
    </ul>
  );
};

export default ContactList;
