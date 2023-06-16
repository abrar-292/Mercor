import { useDrop } from "react-dnd";
import { Header } from "./Header";
import { Task } from "./Task";

export const Section = ({
  status,
  tasks,
  setTasks,
  todos,
  inProgress,
  closed,
}) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item: any) => addItemToSection(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  let text = "To Do";
  let bg = "purple";
  let tasksToMap = todos;

  if (status === "inprogress") {
    text = "On Progress";
    bg = "orange";
    tasksToMap = inProgress;
  }

  if (status === "closed") {
    text = "Done";
    bg = "green";
    tasksToMap = closed;
  }

  function findAndMoveToFirst(array, id) {
    const index = array.findIndex((item) => item.id === id);

    if (index !== -1 && index !== 0) {
      const [foundItem] = array.splice(index, 1);
      array.unshift(foundItem);
    }

    return array;
  }

  const addItemToSection = (item: any) => {
    setTasks((prev: any[]) => {
      const mTasks = prev?.map((t) => {
        if (t.id === item.id) {
          return { ...t, status: status };
        }
        return t;
      });

      localStorage.setItem(
        "tasks",
        JSON.stringify(findAndMoveToFirst(mTasks, item.id))
      );
      return findAndMoveToFirst(mTasks, item.id);
    });
  };

  return (
    <div
      ref={drop}
      className={`md:w-1/3 px-4 w-auto mb-5 md:mb-0 rounded-2xl p-2 bg-gray-100 ${
        isOver ? "bg-gray-200" : ""
      }`}
    >
      <Header text={text} bg={bg} count={tasksToMap?.length} />
      {tasksToMap?.length > 0 &&
        tasksToMap.map((task) => (
          <div key={task.id} className="mt-3">
            <Task task={task} tasks={tasks} setTasks={setTasks} />
          </div>
        ))}
    </div>
  );
};
