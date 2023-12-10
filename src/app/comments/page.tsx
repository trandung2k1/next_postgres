import React from 'react';
import Form from './components/Form';
import { Post } from './components/Post';
import { Comments } from './components/Comments';

const ListTodo = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 max-w-5xl mx-auto">
      <Post />
      <Comments />
      <Form />
    </div>
  );
};

export default ListTodo;
