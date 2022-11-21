import { CheckIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import dayjs from "dayjs";
import { useState } from "react";

const TaskTraking = ({ task, editTask, completedTask, deleteTask }) => {
  const [newTitle, setNewTitle] = useState(task.title);

  const handleChange = (el) => {
    el.preventDefault();
    if (task.completed === true) {
      setNewTitle(task.title);
    } else {
      task.title = "";
      setNewTitle(el.target.value);
    }
  };
  let c = dayjs();
  let currentDate = c.format("DD.MM.YYYY HH:MM");
  //console.log(dayjs().format());
  // const dateTarget = () => {
  // console.log("task.endDate-->", task.endDate);
  // console.log("currentDate-->", currentDate);
  return (
    <div className="task-form">
      <div>{task.endDate === currentDate ? "line-through" : task.endDate}</div>
      <input
        style={{ textDecoration: task.completed && "line-through" }}
        type="text"
        value={task.title === "" ? newTitle : task.title}
        onChange={handleChange}
      />
      <IconButton
        onClick={() => editTask(task, newTitle)}
        aria-label="Search database"
        icon={<EditIcon />}
      />
      <IconButton
        onClick={() => completedTask(task)}
        aria-label="Search database"
        icon={<CheckIcon />}
      />
      <IconButton
        onClick={() => deleteTask(task.id)}
        aria-label="Search database"
        icon={<DeleteIcon />}
      />
    </div>
  );
};

export default TaskTraking;
