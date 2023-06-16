import {
  ChatBubbleLeftEllipsisIcon,
  FolderIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { useDrag } from "react-dnd";

export const Task = ({ task, tasks, setTasks }) => {
  let color = "yellow";
  switch (task.priority) {
    case "Low":
      color = "yellow";
      break;
    case "High":
      color = "red";
      break;
    case "Completed":
      color = "green";
      break;
    default:
      color = "yellow";
  }

  const [{ isDragging }, drag]: any = useDrag(() => ({
    type: "task",
    item: task,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return !isDragging ? (
    <div
      ref={drag}
      className={`relative bg-white p-4 rounded-2xl cursor-pointer text`}
    >
      <span
        className={`text-${color}-400 bg-${color}-100 p-1 rounded-md text-xs`}
      >
        {task.priority}
      </span>
      <p className="text-lg text-dark-500 font-semibold my-1">{task.name}</p>
      {task.description && (
        <p className="text-xs text-gray-400 font-normal">{task.description}</p>
      )}
      <div className="flex gap-2">
        {task.image1 && (
          <Image
            src={`/images/${task.image1}.svg`}
            alt={task.image1 || ""}
            width={100}
            height={100}
            className={`h-auto rounded-xl ${task.image2 ? "w-1/2" : "w-full"}`}
          />
        )}
        {task.image2 && (
          <Image
            src={`/images/${task.image2}.svg`}
            alt={task.image2 || ""}
            width={10}
            height={10}
            className="h-auto w-1/2 rounded-xl"
          />
        )}
      </div>
      <div className="flex justify-between items-center mt-5">
        <Image
          src={`/images/users.png`}
          alt={task.image2 || ""}
          width={60}
          height={25}
          className="w-auto h-auto"
        />
        <div className="block lg:flex text-gray-500">
          <div className="flex mb-2 lg:mb-0">
            <ChatBubbleLeftEllipsisIcon
              width={15}
              height={15}
              className="mr-1 h-auto w-auto"
            />
            <span className="text-xs font-normal mr-3">
              {Math.floor(Math.random() * 6) + 1} Comments
            </span>
          </div>
          <div className="flex mb-2 lg:mb-0">
            <FolderIcon width={15} height={15} className="mr-1 h-auto w-auto" />
            <span className="text-xs font-normal">
              {Math.floor(Math.random() * 6) + 1} Files
            </span>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="h-44 w-full rounded-2xl border border-dotted border-indigo-400 bg-indigo-100" />
  );
};
