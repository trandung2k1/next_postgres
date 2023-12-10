'use client';
import React, { useEffect, useRef } from 'react';
import { createComment } from '../actions/createComment';
import { SubmitButton } from './SubmitButton';
import { useFormState } from 'react-dom';
export type initialState = {
  statusCode: number | undefined;
  message: string;
};
const Form = () => {
  const [state, formAction] = useFormState<initialState, FormData>(createComment, {
    statusCode: undefined,
    message: '',
  });
  const ref = useRef<HTMLFormElement>(null);
  useEffect(() => {
    if (state.statusCode !== 400) {
      ref.current?.reset();
    }
    console.log('Form', state);
  }, [state]);

  return (
    <div className="w-full p-6 bg-white rounded shadow">
      <p className="font-bold mb-3">Add New Comment</p>
      <form ref={ref} className="border p-3 rounded flex flex-col w-1/2" action={formAction}>
        <div className="mb-1">
          <label htmlFor="name" className="text-sm font-semibold">
            Name
          </label>
          <input type="text" name="name" id="name" className="border w-full" />
        </div>
        <div className="mb-1">
          <label htmlFor="content" className="text-sm font-semibold">
            Comment
          </label>
          <textarea name="content" id="content" className="border w-full h-20" />
        </div>
        <SubmitButton />
      </form>
    </div>
  );
};

export default Form;
