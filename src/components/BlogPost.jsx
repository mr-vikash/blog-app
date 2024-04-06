import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://api.fakeserver.in/v1/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.error("Error fetching blog post:", error));
  }, [id]);

  return (
    <div>
      {post ? (
        <div className="card">
          <div className="card-header">
            <h2>{post.title}</h2>
          </div>
          <div className="card-body">
            <p>{post.body}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <div className="mt-2">
        <Link to={`/blog`}>
          <Button>Back</Button>
        </Link>
      </div>
    </div>
  );
}

export default BlogPost;
