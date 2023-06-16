import { useEffect, useState } from "react";
import { Section } from "./Section";

const ListTasks = ({ tasks, setTasks }) => {
  const [todos, setTodos] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [closed, setClosed] = useState([]);

  useEffect(() => {
    const filteredTodos = tasks?.filter((task) => task.status === "todo");
    const filteredInProgress = tasks?.filter(
      (task) => task.status === "inprogress"
    );
    const filteredClosed = tasks?.filter((task) => task.status === "closed");

    setTodos(filteredTodos);
    setInProgress(filteredInProgress);
    setClosed(filteredClosed);
  }, [tasks]);

  const statuses = ["todo", "inprogress", "closed"];

  return (
    <div className="block md:flex gap-5 w-full mt-5">
      {statuses.map((status, index) => (
        <Section
          key={index}
          status={status}
          tasks={tasks}
          setTasks={setTasks}
          todos={todos}
          inProgress={inProgress}
          closed={closed}
        />
      ))}
    </div>
  );
};

export default ListTasks;
