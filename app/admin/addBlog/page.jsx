"use client";
import { assets } from "@/Assets/assets";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";

const page = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Startup",
    author: "Chethan",
    authorImg: "/profile_icon.png",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
    console.log(data);
  };

  const onClickHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("authorImg", data.authorImg);
    formData.append("image", image);

    const response = await axios.post("/api/blog", formData);

    if (response.data.success) {
      toast.success(response.data.msg);
      setImage(false);
      setData({
        title: "",
        description: "",
        category: "Startup",
        author: "Chethan",
        authorImg: "/profile_icon.png",
      });
    } else {
      toast.error("Error");
    }
  };

  return (
    <>
      <form
        onSubmit={onClickHandler}
        className="p-5 mx-5 md:px-14 md:py-14 w-[100%]"
      >
        <p className="text-lg ">Upload Thumbnail</p>
        <div className="my-5">
          <label htmlFor="image">
            <Image
              src={!image ? assets.upload_area : URL.createObjectURL(image)}
              alt="upload"
              height={80}
              width={120}
              className="cursor-pointer"
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            name="image"
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <p className="text-lg mb-3  ">Blog Title</p>
        <input
          onChange={onChangeHandler}
          required
          name="title"
          value={data.title}
          type="text"
          placeholder="Type here"
          className="p-2 w-[90%] md:w-[60%] lg:w-[40%] cursor-pointer outline-none border-2 border-black  shadow-[-7px_7px_0px_#000000]"
        />
        <p className="text-lg my-3  ">Blog Description</p>
        <textarea
          onChange={onChangeHandler}
          required
          name="description"
          value={data.description}
          type="text"
          rows={4}
          placeholder="Write Comment here"
          className="p-2 w-[90%] md:w-[60%]  lg:w-[40%] cursor-pointer outline-none border-2 border-black  shadow-[-7px_7px_0px_#000000]"
        ></textarea>
        <p className="text-lg my-3  ">Blog Category</p>
        <select
          onChange={onChangeHandler}
          required
          name="category"
          value={data.category}
          className=" border-2 border-black cursor-pointer h-10 w-32 pl-2 shadow-[-7px_7px_0px_#000000]"
        >
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Health">Health</option>
          <option value="Travel">Travel</option>
          <option value="Food">Food</option>
          <option value="Beauty">Beauty</option>
          <option value="Investment">Investment</option>
          <option value="Political">Political</option>
          <option value="AI">AI</option>
          <option value="Art & Design">Art & Design</option>
          <option value="Photography">Photography</option>
          <option value="Music">Music</option>
          <option value="Education">Education</option>
          <option value="Science">Science</option>
          <option value="Gaming">Gaming</option>
          <option value="Environment">Environment</option>
          <option value="Industry">Industry</option>
        </select>
        <br />
        <button
          type="submit"
          className="px-3 text-lg mt-10 h-10 cursor-pointer bg-black text-white"
        >
          Add Blog
        </button>
      </form>
    </>
  );
};

export default page;
