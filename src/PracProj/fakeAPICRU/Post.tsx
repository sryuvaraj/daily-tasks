import React from "react";

const Post = ({ post }: any) => {
  return (
    <div>
      <div>
        <p>{post?.userId}</p>
        <p>{post?.id}</p>
        <p>{post?.title}</p>
        <p>{post?.body}</p>
      </div>
    </div>
  );
};

export default Post;
