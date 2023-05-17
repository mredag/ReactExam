import React from 'react';
import BlogEntry from './BlogEntry';


const BlogList = ({ entries, deleteBlogEntry }) => {
  return (
    <div>
      {entries.map((entry) => (
        <BlogEntry
          key={entry.id}
          entry={entry}
          deleteBlogEntry={deleteBlogEntry}
        />
      ))}
    </div>
  );
};

export default BlogList;
