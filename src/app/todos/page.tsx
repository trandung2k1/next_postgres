import React from 'react';
import { SubmitButton } from './components/SubmitButton';
import { createInvoice } from './actions/createInvoice';

const ListTodo = () => {
  return (
    <form action={createInvoice}>
      <input type="text" name="amount" />
      <input type="text" name="status" />
      <SubmitButton />
    </form>
  );
};

export default ListTodo;
