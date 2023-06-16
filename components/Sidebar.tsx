import Image from "next/image";
import { useState } from "react";
import { SidebarItems } from "./SidebarItems";
import { MyProjects } from "./MyProjects";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`max-w-sidebar bg-white border-r border-gray-200 min-h-screen ${
        isOpen ? "md:w-20 w-24" : "md:inline md:w-20 lg:w-60 xl:w-full"
      }`}
    >
      <h5
        className={`text-xl flex justify-between items-center font-semibold border-b border-gray-200 h-16 px-4 py-10`}
      >
        <span className="flex">
          <Image
            height={24}
            width={24}
            className="h-6 mr-3"
            alt="sidebar"
            src={"/images/sidebar.png"}
          />
          {!isOpen && <span className="hidden lg:inline">Project M.</span>}
        </span>
        <Image
          height={20}
          width={26}
          className={`h-5 cursor-pointer hidden lg:inline ${
            isOpen ? "rotate-180 transform" : ""
          }`}
          alt="toggler"
          src={"/images/toggler.svg"}
          onClick={toggleSidebar}
        />
      </h5>
      <SidebarItems isOpen={isOpen} />

      <div className={`px-4`}>
        <MyProjects isOpen={isOpen} />

        {!isOpen && (
          <div className="mt-14 bg-gray-100 text-center p-6 rounded-xl relative hidden lg:block">
            <div
              className="w-16 h-16 bg-gray-100 rounded-full flex justify-center items-center absolute"
              style={{
                left: "50%",
                transform: "translate(-50%, 150%)",
                top: "-50%",
              }}
            >
              <Image
                style={{
                  filter: "blur(2px)",
                }}
                src={"/images/lamp-on.svg"}
                alt="lamp_icon"
                width={24}
                height={24}
                className="h-6 w-6 bg-yellow-100"
              />
            </div>
            <p className="text-sm text-dark-200 mt-5 font-medium">
              Thoughts Time
            </p>
            <p className="font-light text-xs text-gray-400 mt-5">
              We don't have any notice for you, till then you can share your
              thoughts with your peers.
            </p>
            <button className="mt-5 btn bg-white py-2 px-4 rounded-md">
              Write a message
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
