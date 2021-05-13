import React from "react";
import Task from "./Task";

const Tasks = ({ tasks }) => {
  return (
    <>
      {tasks.map((task, id) => (
        <Task key={id} currentTask={task}></Task>
      ))}
    </>
  );
};

export default Tasks;
