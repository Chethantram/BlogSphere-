import mongoose from "mongoose";

export const connectDb = async ()=>{
    await mongoose.connect("mongodb+srv://chethant426:7542500100@cluster1.mle9q.mongodb.net/blog-data");
    console.log("Db connected");
}
