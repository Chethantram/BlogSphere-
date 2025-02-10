"use client";
import BlogTableItems from "@/components/AdminComponents/BlogTableItems";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const page = ({ params }) => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await axios.get("/api/blog");
    setBlogs(response.data.blogs);
    console.log(response.data.blogs);
  };

  const deleteBlog = async (mongoId) => {
    const response = await axios.delete("/api/blog", {
      params: { id: mongoId },
    });
    toast.success(response.data.msg);
    fetchBlogs();
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="lg:px-32 md:px-10 px-5 py-5 mx-4 lg:mx-0 lg:py-20">
        <div className="border-2 min-h-[75vh] lg:w-auto w-[700px] border-black shadow-[-7px_7px_0px_#000000]">
          <table className="flex flex-col gap-5 ">
            <thead>
              <tr className="grid grid-cols-5 p-3">
                <th>AuthorName</th>
                <th className=" mx-auto col-span-2">Title</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {blogs.map((blog, index) => {
                return (
                  <BlogTableItems
                    deleteBlog={deleteBlog}
                    mongoId={blog._id}
                    key={index}
                    authorImg={blog.authorImg}
                    title={blog.title}
                    date={blog.date}
                    author={blog.author}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default page;
