import {
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  Squares2X2Icon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

export const SidebarItems = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <ul className="m-2 border-b border-gray-200">
      <li className="p-2 xl:p-4 py-4 flex items-center text-gray-500 text-base">
        <Squares2X2Icon
          width={30}
          height={30}
          className={`h-7 w-7 ${isOpen ? "mx-auto" : "mx-auto lg:mx-0"}`}
        />
        {!isOpen && <span className="hidden lg:inline ml-3">Home</span>}
      </li>
      <li className="p-2 xl:p-4 py-4 flex items-center text-gray-500 text-base">
        <ChatBubbleLeftEllipsisIcon
          width={30}
          height={30}
          className={`h-7 w-7 ${isOpen ? "mx-auto" : "mx-auto lg:mx-0"}`}
        />
        {!isOpen && <span className="hidden lg:inline ml-3">Messages</span>}
      </li>
      <li className="p-2 xl:p-4 py-4 flex items-center text-gray-500 text-base">
        <Image
          src={"/images/task.svg"}
          alt="task_icon"
          width={30}
          height={30}
          className={`h-7 w-7 ${isOpen ? "mx-auto" : "mx-auto lg:mx-0"}`}
        />
        {!isOpen && <span className="hidden lg:inline ml-3">Tasks</span>}
      </li>
      <li className="p-2 xl:p-4 py-4 flex items-center text-gray-500 text-base">
        <UsersIcon
          width={30}
          height={30}
          className={`h-7 w-7 ${isOpen ? "mx-auto" : "mx-auto lg:mx-0"}`}
        />
        {!isOpen && <span className="hidden lg:inline ml-3">Members</span>}
      </li>
      <li className="p-2 xl:p-4 py-4 flex items-center text-gray-500 text-base">
        <Cog6ToothIcon
          width={30}
          height={30}
          className={`h-7 w-7 ${isOpen ? "mx-auto" : "mx-auto lg:mx-0"}`}
        />
        {!isOpen && <span className="hidden lg:inline ml-3">Settings</span>}
      </li>
    </ul>
  );
};
