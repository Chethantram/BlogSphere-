import Sidebar from "@/components/AdminComponents/Sidebar";
import Image from "next/image";
import { ToastContainer } from 'react-toastify';

export default function Layout({ children }) {
  return (
    <>
      <div className="flex">
      <ToastContainer/>
        <Sidebar />
        <div className="flex flex-col md:w-[100%] w-[800px]">
          <div className="flex justify-between items-center p-3 border-2 border-black border-l-0 ">
            <h3 className="font-semibold text-lg">Admin Panel</h3>
            <Image src={'/profile_icon.png'} alt="admin" height={40} width={40} />
          </div>
            
          {children}
         
        </div>
      </div>
            
        
    </>
  );
}
