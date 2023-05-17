//Create router system and use it to create a new blog post.
//When the click one of the router blog open in a new page with the blog entry content and word count displayed.
import React, { useState } from 'react'


function BlogPage() {
    const [content,setContent] = useState('');
    const [blog,setBlog] = useState([]);
    const handleSubmit = (e) => { 
        e.preventDefault();
        setBlog([...blog,content]);
        setContent('');
    }

  return (
    <form>
        <h1>Blog Page</h1>
        <input type='text' placeholder='New Blog Entry' value={content} onChange={(e) => setContent(e.target.value)}></input>
        <button onClick={handleSubmit}>Submit</button>

    </form>
  )
}

export default BlogPage