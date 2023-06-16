import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const Navigation = () => {
  return (
    <nav className="border-b h-16 p-5 xl:p-10 border-gray-200 flex justify-between items-center">
      <div className="relative focus-within:text-gray-400 max-w-sm w-full mr-3">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <button
            type="submit"
            className="p-1 focus:outline-none focus:shadow-outline text-gray-400"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </span>
        <input
          type="search"
          placeholder="Search for anything..."
          className="px-2 py-1 mr-2 max-w-sm w-full bg-gray-100 h-11 placeholder-gray-400 rounded text-sm font-normal pl-10"
        />
      </div>
      <div className="flex items-center">
        <Image
          height={40}
          width={100}
          alt="navbar"
          src={"/images/nav-items.svg"}
          className="w-auto h-6 hidden md:inline cursor-pointer mr-14"
        />
        <div className="flex items-center">
          <p className="text-dark-200 text-base text-right mr-3 hidden md:inline">
            Anima Agrawal,{" "}
            <span className="block text-gray-400">U.P, India</span>
          </p>
          <button className="flex btn items-center">
            <Image
              height={40}
              width={40}
              alt="navbar"
              src={"/images/profile-picture.svg"}
              className="h-10 w-10 mr-2"
            />
            <ChevronDownIcon className="h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
