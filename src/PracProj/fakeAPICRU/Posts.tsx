import React, { useEffect, useState } from "react";
import Post from "./Post";
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState<any>([]);

  const fetchData = async () => {
    const re = await fetch("https://jsonplaceholder.typicode.com/posts");
    const d = await re.json();
    setPosts(d);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>
        {posts?.length > 0 &&
          posts?.map((post: any, index: number) => (
            <Link
              to={`/${post?.id}`}
              key={index}
              className="flex flex-col gap-4 border border-green-600"
            >
              <Post post={post} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Posts;
