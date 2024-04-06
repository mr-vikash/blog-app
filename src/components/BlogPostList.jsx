// BlogPostList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function BlogPostList() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    fetch('https://api.fakeserver.in/v1/posts')
      .then(response => response.json())
      .then(data => setBlogPosts(data))
      .catch(error => console.error('Error fetching blog posts:', error));
  }, []);

  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        {blogPosts.map(post => (
          <li key={post.id}>
            <div className="card"><div className="card-header">
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
            </div>
            <div className="card-body">{post.body}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogPostList;
