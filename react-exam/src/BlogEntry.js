import React from 'react';

const BlogEntry = ({ entry, deleteBlogEntry }) => {
  const handleDelete = () => {
    deleteBlogEntry(entry.id);
  };

  return (
    <div>
      <p>{entry.content}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default BlogEntry;
