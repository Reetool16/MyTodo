import React, { useState } from "react";
import "./App.css";
import Header from "./component/header";
import TaskInput from "./component/task-input";
import TaskList from "./component/task-list";
import EditContext from "./component";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);

  const addTask = (taskId, taskTitle, taskDescription) => {
    const newTask = {
      id: taskId,
      title: taskTitle,
      description: taskDescription,
    };
    setTasks([...tasks, newTask]);
  };

  const updateTask = (taskTitle, taskDescription) => {
    if (selectedTaskIndex !== null) {
      const updatedTasks = tasks.map((task) => {
        if (task.id === selectedTaskIndex) {
          return {
            ...task,
            title: taskTitle,
            description: taskDescription,
          };
        }
        return task;
      });
      setTasks(updatedTasks);
      setIsEditClicked(false);
      setSelectedTaskIndex(null);
    }
  };

  const deleteTask = (taskId) => {
    console.log("Deleting task with ID:", taskId);
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    console.log("Updated tasks after deletion:", updatedTasks);
    setTasks(updatedTasks);
  };

  const handleCancel = () => {
    console.log("cancel");
  };

  return (
    <EditContext.Provider value={{ isEditClicked, setIsEditClicked }}>
      <div className="App">
        <Header />
        <div className="todo-container">
          <TaskInput
            addTask={addTask}
            updateTask={updateTask}
            isEditClicked={isEditClicked}
          />
        </div>
        <div
          className={`todo-list-container ${
            tasks.length >= 10 ? "overflow" : ""
          }`}
        >
          <TaskList
            tasks={tasks}
            setSelectedTaskIndex={setSelectedTaskIndex}
            deleteTask={deleteTask}
            handleCancel={handleCancel}
          />
        </div>
      </div>
    </EditContext.Provider>
  );
}

export default App;
