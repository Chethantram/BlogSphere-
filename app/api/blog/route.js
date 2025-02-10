const { NextResponse } = require("next/server");
import { connectDb } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import { writeFile } from "fs/promises";
import fs from 'fs';

const loadDb = async () => {
  await connectDb();
};

loadDb();

export async function GET(request) {
  const blogId = request.nextUrl.searchParams.get("id");

  if (blogId) {
    const blog = await BlogModel.findById(blogId);
    return NextResponse.json(blog);
  } else {
    const blogs = await BlogModel.find({});
    return NextResponse.json({ blogs });
  }
}

export async function POST(request) {
  const formData = await request.formData();
  const timestamps = Date.now();

  //Access of Image
  const image = formData.get("image");
  const imageByteData = await image.arrayBuffer();
  const buffer = Buffer.from(imageByteData);
  const path = `./public/${timestamps}_${image.name}`;
  await writeFile(path, buffer);

  const imageUrl = `/${timestamps}_${image.name}`;

  //Access Blog Data
  const blogData = {
    title: `${formData.get("title")}`,
    description: `${formData.get("description")}`,
    author: `${formData.get("author")}`,
    authorImg: `${formData.get("authorImg")}`,
    category: `${formData.get("category")}`,
    subCategory: `${formData.get("subCategory")}`,
    image: `${imageUrl}`,
  };

  //save in database
  await BlogModel.create(blogData);
  console.log("Blog Saved");

  return NextResponse.json({ success: true, msg: "Blog Added Successfully" });
}



export async function DELETE(request) {
    const id = await request.nextUrl.searchParams.get("id");
    const blog = await BlogModel.findById(id);
    fs.unlink(`./public/${blog.image}`,()=>{});
    await BlogModel.findByIdAndDelete(blog);
    return NextResponse.json({msg:"Removed Successfully"});
}