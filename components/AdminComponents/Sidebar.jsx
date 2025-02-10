import { IoIosAddCircleOutline } from "react-icons/io";
import { FaClipboardList } from "react-icons/fa";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="bg-gray-300 min-w-[90px] md:min-w-[20%] border-2 min-h-[120vh]  border-black">
      <div className="text-sm px-1 md:text-2xl lg:text-4xl font-bold text-center py-5 md:p-3 border-black  border-b-2 outline-none">
        BlogSphere
      </div>

      <div className="mt-32 md:mt-32 w-full flex flex-col  items-end gap-8">
        <Link
          href={"/admin/addBlog"}
          className="border-2  w-[50%] md:w-[80%] outline-none cursor-pointer border-black border-r-0 rounded-md rounded-r-none shadow-[-7px_7px_0px_#000000]  bg-white text-xl font-medium p-2 md:p-3 flex justify-center items-center gap-5"
        >
          <IoIosAddCircleOutline />
          <p className="hidden md:block">AddBlogs</p>
        </Link>
        <Link
          href={"/admin/blogList"}
          className="border-2  w-[50%] md:w-[80%] border-black cursor-pointer border-r-0 rounded-md rounded-r-none shadow-[-7px_7px_0px_#000000]  bg-white text-xl font-medium p-2 md:p-3 flex justify-center items-center gap-5"
        >
          <FaClipboardList />
          <p className="hidden md:block">BlogList</p>
        </Link>
        
      </div>
    </div>
  );
};

export default Sidebar;
