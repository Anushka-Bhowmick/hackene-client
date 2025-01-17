import React, { useEffect, useState } from "react";
import axios from "axios";
import Blog from "./Blog";

function Blogs() {
  const [blogs, setBlogs] = useState();
  const sendRequest = async () => {
    const res = await axios
      .get("http://localhost:8000/api/blog")
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => {
      setBlogs(data.events)
      console.log(data)
    });
  }, []);

  return (
      <>
       {/* <div className="row row-cols-1 row-cols-md-3 g-4 "> */}

        {blogs &&
          blogs.map((blog, index) => (
            <Blog
              id={blog._id}
              isUser={localStorage.getItem("userId") === blog.user._id}
              title={blog.title}
              content={blog.content}
              image={blog.image}
              userName={blog.user.name}
              key={blog.id}
            />
          ))}
       {/* </div> */}
      </>
  );
}

export default Blogs;
