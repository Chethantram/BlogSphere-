"use client";

import { assets } from "@/Assets/assets";
import Footer from "@/components/Footer";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const page = ({ params }) => {
  const [data, setData] = useState({});

  const fetchBlogData = async () => {
    const response = await axios.get("/api/blog", {
      params: {
        id: params.id,
      },
    });
    setData(response.data);
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  return data ? (
    <>
      <div className=" max-h-[500px] bg-gray-300">
        <nav className="flex justify-between items-center px-5 py-5 md:px-20 md:py-15 ">
          <Link href={"/"}>
            <div className="text-2xl md:text-4xl font-bold border-none outline-none">
              BlogSphere
            </div>
          </Link>
          <div>
            <button className="px-3 bg-white h-12 shadow-[-7px_7px_0px_#000000]  border-2 border-black">
              Get Started
            </button>
          </div>
        </nav>
        <div className="flex justify-center mt-20">
          <h2 className="text-2xl md:text-4xl font-bold text-center mx-8 md:max-w-[700px]">
            {data.title}
          </h2>
        </div>
        <div className="flex justify-center items-center gap-7 mt-10">
          <Image
            src={data.authorImg ? data.authorImg : null}
            alt="author"
            width={50}
            height={50}
            className="border-2 rounded-full"
          />
          <h3 className="text-xl text-gray-700 ">{data.author}</h3>
        </div>
        <div>
          <Image
            src={data.image ? data.image : null}
            alt="image"
            width={900}
            height={720}
            className="mx-auto my-16 object-cover border-2"
          />
        </div>
        <div className=" mx-5 md:mx-8 lg:mx-auto max-w-[900px] text-gray-800">
          <h2 className="text-3xl font-bold my-20">Introduction:</h2>
          <div
            className="blog-content  "
            dangerouslySetInnerHTML={{ __html: data.description }}
          ></div>
        </div>

        <div className="mt-32  space-y-5 text-gray-800 mx-4 md:mx-8 lg:mx-auto max-w-[900px]">
          <p className="text-md text-semibold">You Can Share on Social Media</p>
          <div className="flex items-center gap-4">
            <Image
              src={assets.facebook_icon}
              className="border-2  rounded-full  border-black"
              height={40}
              width={40}
              alt="image"
            />
            <Image
              src={assets.googleplus_icon}
              className="border-2 rounded-full  border-black"
              height={40}
              width={40}
              alt="image"
            />
            <Image
              src={assets.twitter_icon}
              className="border-2 rounded-full border-black"
              height={40}
              width={40}
              alt="image"
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  ) : (
    <></>
  );
};

export default page;
