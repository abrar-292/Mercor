import Image from "next/image";
import { Project, myProjects } from "../data";

export const MyProjects = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <>
      <h6
        className={`flex items-center py-5 text-gray-500 font-semibold text-xs 
        ${!isOpen ? "justify-center lg:justify-between" : "justify-center"}`}
      >
        {!isOpen && <span className="hidden lg:inline">MY PROJECTS</span>}
        <Image
          src={"/images/add-square.svg"}
          alt="add_icon"
          width={28}
          height={28}
          className="h-7 w-7"
        />
      </h6>
      {myProjects.map((project: Project, key: number) => (
        <div
          key={key}
          className={`flex text-gray-500 text-base w-10 lg:w-auto font-medium items-center mb-3 h-10 ${
            project.active ? "bg-indigo-200" : ""
          } rounded-md p-0 ${isOpen ? "w-10" : "lg:p-3"}`}
        >
          <div
            className={`h-2 w-2 rounded-full ${
              !isOpen ? "mx-auto lg:mr-2 lg:ml-0" : "mx-auto"
            } 
            ${
              project.color === "green"
                ? `bg-green-400`
                : project.color === "orange"
                ? `bg-orange-400`
                : project.color === "indigo"
                ? `bg-indigo-400`
                : "bg-blue-400"
            }
            bg-${project.color}-400`}
          />
          {!isOpen && (
            <span className="hidden lg:inline text-sm">{project.name}</span>
          )}
        </div>
      ))}
    </>
  );
};
