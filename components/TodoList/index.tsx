import { useEffect, useState } from "react";
import ListTasks from "./ListTasks";
import { DndProvider } from "react-dnd-multi-backend";
import { toDoItems } from "../../data";
import { HTML5toTouch } from "rdndmb-html5-to-touch";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(
      !localStorage.getItem("tasks")
        ? toDoItems
        : JSON.parse(localStorage.getItem("tasks"))
    );
  }, []);

  return (
    <DndProvider options={HTML5toTouch}>
      <div className="mb-10">
        <ListTasks tasks={todos} setTasks={setTodos} />
      </div>
    </DndProvider>
  );
}

export default TodoList;
