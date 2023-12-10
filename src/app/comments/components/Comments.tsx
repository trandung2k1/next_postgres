import { unstable_noStore as noStore } from 'next/cache';
import React from 'react';
import { Comment } from './Comment';
import { sql } from '@vercel/postgres';

export const Comments = async () => {
  noStore();
  const data = await sql`SELECT * FROM comments`;
  const { rows: comments } = data;
  return (
    <div className="w-full p-6 bg-white rounded shadow mb-3">
      <p className="font-bold mb-3">Comments</p>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          name={comment.name}
          content={comment.content}
          createdAt={comment.createdat}
        />
      ))}
    </div>
  );
};
