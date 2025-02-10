import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="px-5 py-5 md:px-20 md:py-15 bg-gray-300">
      <nav className="flex justify-between items-center ">
        <Link href={"/"}>
          <div className="text-4xl font-bold cursor-pointer border-none outline-none">
            BlogSphere
          </div>
        </Link>
        <div className="cursor-pointer hover:scale-105">
          <SignedOut>
            <SignInButton>
              <button className="w-20 h-10 shadow-[-7px_7px_0px_#000000] bg-white  border-2 border-black">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10  rounded-full",
                  userButtonPopoverCard: "shadow-xl",
                  userPreviewMainIdentifier: "font-semibold",
                },
              }}
              afterSignOutUrl="/"
            />
          </SignedIn>
        </div>
      </nav>
      <div className="my-20">
        <h2 className="text-center text-6xl my-8 max-w-[900px] mx-auto font-bold">
          The Best Reads from Every Corner of the Internet
        </h2>
        <p className="text-center text-xl ">
          "Write your thoughts, Share your stories and Inspire the world."
        </p>
      </div>
      <div className="flex justify-center my-10">
        <Link href={'/sign-in'}>
        <button
          
          type="submit"
          className=" flex items-center justify-center gap-5 h-14 min-w-[300px] text-2xl border-2 bg-white border-black shadow-[-7px_7px_0px_#000000]"
        >
          Get Started <FaAngleRight />
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
