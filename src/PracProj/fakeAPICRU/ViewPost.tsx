import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewPost = () => {
  const { postId } = useParams();
  const [selectedPost, setSelectedPost] = useState<any>({});
  const handleFindPost = async () => {
    // console.log("Call")
    // const selec = posts?.find((item: any) => {console.log(item?.id,postId,"call");  return item?.id === Number(postId)});
    const re = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const selec = await re.json();
    setSelectedPost(selec);
  };
  useEffect(() => {
    handleFindPost();
  }, [postId]);
  console.log(selectedPost);
  return (
    <>
      <div>
        <p>{selectedPost?.title}</p>
      </div>
    </>
  );
};

export default ViewPost;
