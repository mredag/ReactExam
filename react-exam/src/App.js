import React, { useState } from 'react';
import BlogForm from './BlogForm';
import BlogList from './BlogList';

const App = () => {
  const [entries, setEntries] = useState([]);

  const addBlogEntry = (content) => {
    const newEntry = {
      id: Date.now(),
      content: content,
    };
    setEntries([newEntry, ...entries]);
  };

  const deleteBlogEntry = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  const getTotalCharacterCount = () => {
    let totalCharacterCount = 0;
    entries.forEach((entry) => {
      totalCharacterCount += entry.content.length;
    });
    return totalCharacterCount;
  };

  return (
    <div>
      <h1>My Blog</h1>
      <BlogForm addBlogEntry={addBlogEntry} />
      <h2>Total Character Count: {getTotalCharacterCount()}</h2>
      <BlogList entries={entries} deleteBlogEntry={deleteBlogEntry} />
    </div>
  );
};

export default App;
