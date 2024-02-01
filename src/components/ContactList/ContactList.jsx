// ContactList.js
import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { deleteContact } from '../contactsSlice';

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 5px 8px;
  font-size: 0.8em;
`;

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <List>
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          <span>{contact.name}:</span>
          <span>{contact.number}</span>
          <Button type="button" onClick={() => handleDelete(contact.id)}>
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;
