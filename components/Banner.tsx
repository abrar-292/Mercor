import Image from "next/image";
import { ButtonWithIcon } from "./ButtonWithIcon";
import {
  CalendarIcon,
  FunnelIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import TodoList from "./TodoList";

export const Banner = () => {
  return (
    <div className="p-5 xl:p-10">
      <div className="flex flex-wrap items-center justify-between mb-5">
        <div className="flex items-center mb-5">
          <h1 className="text-dark-200 font-semibold text-3xl lg:text-5xl mr-2">
            Mobile App
          </h1>
          <Image
            src={"/images/edit-icon.svg"}
            alt="edit-icon"
            width={20}
            height={20}
            className="h-6 w-6 mx-2 cursor-pointer"
          />
          <Image
            src={"/images/link-icon.svg"}
            alt="link-icon"
            width={20}
            height={20}
            className="h-6 w-6 cursor-pointer"
          />
        </div>
        <div className="flex items-center mb-5">
          <button className="btn flex items-center text-indigo-800 text-base">
            <Image
              src={"/images/add-square-card.svg"}
              alt="add-icon"
              width={20}
              height={20}
              className="w-5 h-5 mr-2"
            />
            Invite
          </button>
          <Image
            src={"/images/group-users.svg"}
            alt="edit-icon"
            width={100}
            height={100}
            className="w-auto ml-2"
          />
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex items-center mb-5">
          <ButtonWithIcon
            text="Filter"
            className="mr-3"
            icon={<FunnelIcon />}
            isDropDown
          />
          <ButtonWithIcon isDropDown text="Today" icon={<CalendarIcon />} />
        </div>
        <div className="flex items-center justify-end mb-5">
          <div className="pr-3 mr-3 border-r border-gray-400">
            <ButtonWithIcon
              text="Share"
              icon={<UsersIcon className="w-5 h-5" />}
            />
          </div>
          <Image
            src={"/images/list.svg"}
            alt="list-icon"
            width={40}
            height={40}
            className="w-10 h-10 mr-3"
          />
          <Image
            src={"/images/grid.svg"}
            alt="grid-icon"
            width={20}
            height={20}
            className="w-5 h-5"
          />
        </div>
      </div>
      <TodoList />
    </div>
  );
};
