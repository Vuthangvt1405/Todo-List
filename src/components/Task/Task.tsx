import React, { useContext, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import unchecked from "../../assets/images/unchecked.png";
import checkedimg from "../../assets/images/checked.png";
import { objectTask } from "../../Interfaces/Interfaces";

const Task = () => {
  const { data, deleteTask, toggleTask } = useContext(GlobalContext);

  const handleDelete = (id) => {
    deleteTask(id);
  };

  const handleChecked = (id) => {
    toggleTask(id);
  };

  return (
    <div className="m-3">
      <div className="flex flex-col w-full gap-2 pt-6">
        {data.map((task) => (
          <div className="flex justify-between">
            <div>
              <button onClick={() => handleChecked(task.id)} className="px-3">
                <img
                  src={task.checked ? checkedimg : unchecked}
                  className="w-5 h-5"
                />
              </button>
              <span
                key={task.id}
                className={task.checked ? "line-through" : ""}
              >
                {task.name}
              </span>
            </div>
            <button onClick={() => handleDelete(task.id)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task;
