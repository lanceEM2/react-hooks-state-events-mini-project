import React from "react";

function Task({ id, category, text, onDelete }) {
  const handleDelete = () => {
    // Call the onDelete prop with the task's id for removal
    onDelete(id);
  };

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>
        X
      </button>
    </div>
  );
}

export default Task;
