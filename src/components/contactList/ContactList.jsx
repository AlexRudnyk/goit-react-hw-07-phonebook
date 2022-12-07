import { ListItem, DeleteBtn } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
// import { deleteMyContact } from 'redux/contactsSlice';
import {
  // selectContacts,
  // selectError,
  // // selectFilter,
  // selectIsLoading,
  selectVisibleContacts,
} from 'redux/selectors';
import { deleteContact } from 'redux/operations';

// const filterContacts = (contacts, filter) => {
//   const normalizedFilter = filter.toLowerCase();
//   return contacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter)
//   );
// };

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  // const contacts = useSelector(selectContacts);
  // const error = useSelector(selectError);
  // const isLoading = useSelector(selectIsLoading);
  // const filter = useSelector(selectFilter);

  const handleDeleteContact = contactId => dispatch(deleteContact(contactId));

  return (
    <ul>
      {visibleContacts.map(({ name, number, id }) => (
        <ListItem key={id}>
          {name}: {number}
          <DeleteBtn type="button" onClick={() => handleDeleteContact(id)}>
            Delete
          </DeleteBtn>
        </ListItem>
      ))}
    </ul>
  );
};

export default ContactList;
