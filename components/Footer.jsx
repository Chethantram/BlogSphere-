import { assets } from "@/Assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-gray-800 w-full p-5 text-center text-white mt-20 md:flex space-y-4 md:justify-evenly  items-center">
      <div className="flex items-center justify-center gap-5 md:gap-20 lg:gap-52 ">
        <h2 className=" text-lg md:text-2xl font-bold ">@ BlogSphere</h2>

        <p className="text-gray-400 font-medium">
          All right Reserved , &copy; BlogSphere
        </p>
      </div>

      <div className="flex items-center justify-center gap-3">
        <Image src={assets.facebook_icon} alt="image" width={40} height={40} />
        <Image
          src={assets.googleplus_icon}
          alt="image"
          width={40}
          height={40}
        />
        <Image src={assets.twitter_icon} alt="image" width={40} height={40} />
      </div>
    </div>
  );
};

export default Footer;
