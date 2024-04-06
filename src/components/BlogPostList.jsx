import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {Row, Col} from 'reactstrap'

function BlogPostList() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    fetch("https://api.fakeserver.in/v1/posts")
      .then((response) => response.json())
      .then((data) => setBlogPosts(data))
      .catch((error) => console.error("Error fetching blog posts:", error));
  }, []);

  return (
    <div className="blog-card">
      <h2>Blog Posts</h2>
      {blogPosts.map((post) => (
        <div key={post.id} >
          <Row>
            <Col>
              <div className="card mt-5">
                <div className="card-header">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </div>
                <div className="card-body">{post.body}</div>
              </div>
            </Col>
          </Row>
        </div>
      ))}
    </div>
  );
}

export default BlogPostList;
