import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { ListItem, DeleteBtn, EditBtn } from './ContactItem.styled';
import Modal from 'components/modal/Modal';
import EditForm from 'components/editForm/EditForm';

export const ContactItem = ({ contact }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleDeleteContact = contactId => dispatch(deleteContact(contactId));

  return (
    <>
      <ListItem>
        {contact.name}: {contact.number}
        <div>
          <EditBtn onClick={toggleModal}>Edit</EditBtn>
          <DeleteBtn
            type="button"
            onClick={() => handleDeleteContact(contact.id)}
          >
            Delete
          </DeleteBtn>
        </div>
      </ListItem>
      {showModal && (
        <Modal onClose={toggleModal}>
          <EditForm />
        </Modal>
      )}
    </>
  );
};
