'use client';
import { useFormStatus } from 'react-dom';
export function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="bg-black text-white p-1 rounded" disabled={pending}>
      Submit
    </button>
  );
}
