import React from "react";
import "./deleteModal.css";

const DeleteModal = ({ onDelete, onCancel }) => {
  return (
    <div className="modal-container">
      <div className="modal">
        <p className="modal-text">Delete this task?</p>
        <div className="button-container">
          <button className="modal-button" onClick={onDelete}>
            Yes
          </button>
          <button className="modal-button" onClick={onCancel}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
