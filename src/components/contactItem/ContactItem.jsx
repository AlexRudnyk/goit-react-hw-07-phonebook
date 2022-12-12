import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { ListItem, DeleteBtn } from './ContactItem.styled';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = contactId => dispatch(deleteContact(contactId));

  return (
    <ListItem>
      {contact.name}: {contact.number}
      <DeleteBtn type="button" onClick={() => handleDeleteContact(contact.id)}>
        Delete
      </DeleteBtn>
    </ListItem>
  );
};
