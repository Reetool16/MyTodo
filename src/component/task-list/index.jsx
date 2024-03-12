// TaskList.js
import React, { useState, useContext } from "react";
import "./taskList.css";
import Info from "../../asset/i.svg";
import Edit from "../../asset/edit.svg";
import Cross from "../../asset/cross.svg";
import DeleteModal from "../deleteModal";
import EditContext from "../index"; // Import EditContext
import { v4 as uuidv4 } from "uuid"; // Import uuidv4 function from uuid

const TaskList = ({
  tasks,
  setSelectedTaskIndex,
  deleteTask,
  handleCancel,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [editBtn, setEditBtn] = useState(false);
  const [taskIdToDelete, setTaskIdToDelete] = useState(null); // State to store the taskId to delete
  const { setIsEditClicked } = useContext(EditContext);

  const [detailBtnStates, setDetailBtnStates] = useState({});

  const taskListClass = tasks.length > 0 ? "task-list-container" : "tasklist";

  const handleEditClick = (taskId) => {
    setSelectedTaskIndex(taskId);
    console.log(taskId);
    setIsEditClicked(true);
    setEditBtn(true);
  };

  const toggleDetailBtn = (taskId) => {
    setDetailBtnStates((prevState) => ({
      ...prevState,
      [taskId]: !prevState[taskId],
    }));
  };

  const handleDelete = (taskId) => {
    setTaskIdToDelete(taskId);
    setShowModal(true);
  };

  const confirmDelete = () => {
    deleteTask(taskIdToDelete);
    setShowModal(false);
  };

  const cancelDelete = () => {
    setShowModal(false);
  };

  return (
    <div className={taskListClass}>
      {tasks.length > 0 ? (
        tasks.map((task) => {
          const taskId = task.id || uuidv4();
          return (
            <div key={taskId} className="task-item">
              <div>
                <p className="task-title">{task.title}</p>
                <p className="task-description">{task.description}</p>
              </div>
              {detailBtnStates[taskId] ? (
                <div>
                  <button
                    className={`task-btn ${
                      editBtn ? "edit-btn-background" : ""
                    }`}
                    style={{ marginRight: "9px" }}
                    onClick={() => handleEditClick(taskId)}
                  >
                    <img src={Edit} alt="" />
                  </button>
                  <button
                    className="task-btn"
                    onClick={() => handleDelete(taskId)}
                  >
                    <img src={Cross} alt="" />
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    className="task-btn"
                    onClick={() => toggleDetailBtn(taskId)}
                  >
                    <img src={Info} alt="" />
                  </button>
                </div>
              )}
            </div>
          );
        })
      ) : (
        <div className="Notask">
          <hr className="line" />
          <p className="notext">No tasks</p>
          <hr className="line" />
        </div>
      )}

      {showModal && (
        <DeleteModal onCancel={cancelDelete} onDelete={confirmDelete} />
      )}
    </div>
  );
};

export default TaskList;
