import ContactForm from './contactForm';
import ContactList from './contactList';
import Filter from './filter';
import { AppTitle, ListTitle, Container } from './App.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { RotatingLines } from 'react-loader-spinner';
import { selectError, selectIsLoading } from 'redux/selectors';

export default function App() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <AppTitle>Phonebook</AppTitle>
      <ContactForm />
      <ListTitle>Contacts</ListTitle>
      <Filter />
      {isLoading && !error && <RotatingLines />}
      <ContactList />
    </Container>
  );
}
