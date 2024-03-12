import React, { useState, useContext } from "react";
import "./taskInput.css";
import EditContext from "../index"; // Import EditContext
import Union from "../../asset/Union.svg";
import { v4 as uuidv4 } from "uuid"; // Import uuidv4 function from uuid

const TaskInput = ({ addTask, updateTask }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const { isEditClicked } = useContext(EditContext);

  const handleAddTask = () => {
    if (taskTitle.trim()) {
      const taskId = uuidv4();
      addTask(taskId, taskTitle, taskDescription);
      setTaskTitle("");
      setTaskDescription("");
    }
  };

  const handleUpdateTask = () => {
    if (taskTitle.trim()) {
      updateTask(taskTitle, taskDescription);
      setTaskTitle("");
      setTaskDescription("");
    }
  };

  return (
    <div className="input-layout">
      <div className="input-field-flex">
        <div>
          <input
            type="text"
            placeholder="Enter task title"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            className="input-field"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter task description"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="input-field"
            style={{ marginBottom: "0" }}
          />
        </div>
      </div>

      {isEditClicked ? (
        <button onClick={handleUpdateTask} className="input-btn input-btn-text">
          Update
        </button>
      ) : (
        <button onClick={handleAddTask} className="input-btn">
          <img src={Union} alt="" />
        </button>
      )}
    </div>
  );
};

export default TaskInput;
