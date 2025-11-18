import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post, setPosts }: any) => {
  const handlePostDelete = async (postId: any) => {
    // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`,{
    //     method:"DELETE"
    // })
    // const da = await res.json()

    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: "newTiltel" }),
      }
    );
    const updatedPost = await res.json();
    // console.log(updatedPost,"nwififu")
    setPosts((prev: any) =>
      prev.map((p: any) => (p.id === postId ? { ...p, ...updatedPost } : p))
    );
  };
  return (
    <div>
      <div>
        <p>{post?.id}</p>
        <p>{post?.title}</p>
        <p>{post?.body}</p>
        <Link to={`/${post?.id}`}>ViewPost</Link>
        <p onClick={() => handlePostDelete(post?.id)}>Delete</p>
        <p>Edit</p>
      </div>
    </div>
  );
};

export default Post;
