import React from "react";
import { Link } from "react-router-dom";

const PostItem = ({ post }) => {
  return (
    <div className="card" >
      <div className="card-body">
        <h5 className="card-title">{post.slug}</h5>
        <p className="card-text">{post.title}</p>
        <Link to={`/${post.id}`} className="btn btn-primary">
          Details
        </Link>
      </div>
    </div>
  );
};

export default PostItem;
