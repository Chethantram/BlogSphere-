import React, { useState, useEffect } from "react";
import BlogItem from "./BlogItem";
import axios from "axios";

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await axios.get("/api/blog");
    setBlogs(response.data.blogs);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="mx-5md:mx-14">
      <div className="flex  overflow-x-auto items-center snap-x snap-mandatory cursor-pointer  gap-14 md:gap-20 hide-scrollbar mx-5 md:mx-20 scroll-px-10 my-10 ">
        <button
          onClick={() => setMenu("All")}
          className={
            menu === "All"
              ? "h-10  border-2 px-3  bg-black text-white text-center"
              : ""
          }
        >
          All
        </button>
        <button
          onClick={() => setMenu("Technology")}
          className={
            menu === "Technology"
              ? "h-10  border-2 px-3  bg-black text-white text-center"
              : ""
          }
        >
          Technology
        </button>
        <button
          onClick={() => setMenu("Startup")}
          className={
            menu === "Startup"
              ? "h-10  border-2 px-3  bg-black text-white text-center"
              : ""
          }
        >
          Startup
        </button>
        <button
          onClick={() => setMenu("Lifestyle")}
          className={
            menu === "Lifestyle"
              ? "h-10  border-2 px-3  bg-black text-white text-center"
              : ""
          }
        >
          LifeStyle
        </button>
        <button
          onClick={() => setMenu("Health")}
          className={
            menu === "Health"
              ? "h-10  border-2 px-3  bg-black text-white text-center"
              : ""
          }
        >
          Health
        </button>
        <button
          onClick={() => setMenu("Travel")}
          className={
            menu === "Travel"
              ? "h-10  border-2 px-3  bg-black text-white text-center"
              : ""
          }
        >
          Travel
        </button>
        <button
          onClick={() => setMenu("Food")}
          className={
            menu === "Food"
              ? "h-10  border-2 px-3  bg-black text-white text-center"
              : ""
          }
        >
          Food
        </button>
        <button
          onClick={() => setMenu("Beauty")}
          className={
            menu === "Beauty"
              ? "h-10  border-2 px-3  bg-black text-white text-center"
              : ""
          }
        >
          Beauty
        </button>
        <button
          onClick={() => setMenu("Investment")}
          className={
            menu === "Investment"
              ? "h-10  border-2 px-3  bg-black text-white text-center"
              : ""
          }
        >
          Investment
        </button>
        <button
          onClick={() => setMenu("Political")}
          className={
            menu === "Political"
              ? "h-10  border-2 px-3  bg-black text-white text-center"
              : ""
          }
        >
          Political
        </button>
        <button
          onClick={() => setMenu("AI")}
          className={
            menu === "AI"
              ? "h-10  border-2 px-3  bg-black text-white text-center"
              : ""
          }
        >
          AI
        </button>
        <button
          onClick={() => setMenu("Art & Design")}
          className={
            menu === "Art & Design"
              ? "h-10  border-2 px-3  bg-black text-white text-center"
              : ""
          }
        >
          Art & Design
        </button>
        <button
          onClick={() => setMenu("Photography")}
          className={
            menu === "Photography"
              ? "h-10  border-2 px-3  bg-black text-white text-center"
              : ""
          }
        >
          Photography
        </button>
        <button
          onClick={() => setMenu("Music")}
          className={
            menu === "Music"
              ? "h-10  border-2 px-3  bg-black text-white text-center"
              : ""
          }
        >
          Music
        </button>
        <button
          onClick={() => setMenu("Education")}
          className={
            menu === "Education"
              ? "h-10  border-2 px-3  bg-black text-white text-center"
              : ""
          }
        >
          Education
        </button>
        <button
          onClick={() => setMenu("Science")}
          className={
            menu === "Science"
              ? "h-10  border-2 px-3  bg-black text-white text-center"
              : ""
          }
        >
          Science
        </button>
        <button
          onClick={() => setMenu("Gaming")}
          className={
            menu === "Gaming"
              ? "h-10  border-2 px-3  bg-black text-white text-center"
              : ""
          }
        >
          Gaming
        </button>
        <button
          onClick={() => setMenu("Environment")}
          className={
            menu === "Environment"
              ? "h-10  border-2 px-3  bg-black text-white text-center"
              : ""
          }
        >
          Environment
        </button>
        <button
          onClick={() => setMenu("Industry")}
          className={
            menu === "Industry"
              ? "h-10  border-2 px-3  bg-black text-white text-center"
              : ""
          }
        >
          Industry
        </button>
      </div>

      <div
        id="blog"
        className="mx-4 md:mx-5 lg:mx-14 p-5 grid grid-cols-1 md:grid-cols-2 gap-12 lg:grid-cols-3"
      >
        {blogs
          .filter((item) => (menu === "All" ? true : item.category === menu))
          .map((item, index) => {
            return (
              <BlogItem
                image={item.image}
                title={item.title}
                description={item.description}
                category={item.category}
                _id={item._id}
                key={index}
              />
            );
          })}
      </div>
    </div>
  );
};

export default BlogList;
