import React, { useEffect, useState, useTransition } from "react";
import Post from "./Post";
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState<any>([]);
  const [postsPerPage, setPostsPerPage] = useState<any>(10);
  const [currentPosts, setCurrentPosts] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState<any>(1);
  const [totalPages, setTotalPages] = useState<any>(0);
  const [pages, setPages] = useState<any>([]);

  const [is, func] = useTransition()



  const fetchData = async () => {
        console.log("be")
        func(()=>{
   for(let i=0; i<=1000; i++){
    console.log(i)
   }
        })

       console.log("fa")
    const re = await fetch("https://jsonplaceholder.typicode.com/posts");
    const d = await re.json();
    setPosts(d);
    const pags = Math.ceil((d?.length - 7) / 10);
    var temPages = []
    for (let i = 1; i <= pags; i++) {
        temPages.push(i)
    }
     setPages(temPages);
    setTotalPages(pags);
  };

  const handlePageChange = (page:any) => {
    setCurrentPage(page)
    var startPost = ((page-1)*postsPerPage)+1
    var endPost = (page*postsPerPage)
    var temPosts = posts.slice(startPost-1,endPost)
    setCurrentPosts(temPosts)
    // alert(startPost.toString()+endPost)
  }

  useEffect(() => {
    fetchData();
  }, []);

    useEffect(() => {
    handlePageChange(1);
  }, [posts]);


//   alert(currentPage)

  return (
    <div>
      <div className="flex gap-2">
        {pages?.length > 0 &&
          pages?.map((item: any, index: number) => <p onClick={() => handlePageChange(item)} className={`${currentPage === item ?"border-green-800" :"border-green-500"} border-4 px-2 cursor-pointer`} key={index}>{item}</p>)}
      </div>
      <div className="flex flex-col gap-4 ">
        {currentPosts?.length > 0 &&
          currentPosts?.map((post: any, index: number) => (
            <div key={index} className="border border-green-600 p-4 m-4">
              <Post post={post} setPosts={setPosts} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Posts;
