import React, { useState } from 'react';

const BlogForm = ({ addBlogEntry }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim() !== '') {
      addBlogEntry(content);
      setContent('');
    }
  };

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const totalCharacters = content.length;

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={content} onChange={handleChange} />
      <div>Total Characters: {totalCharacters}</div>
      <button type="submit">Add Blog Entry</button>
    </form>
  );
};

export default BlogForm;
