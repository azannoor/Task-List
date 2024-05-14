// Todo.jsx

import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

function Todo({ onDelete, onEdit, taskId }) {
    
  const handleDelete = () => {
    onDelete();
  };

  const handleEdit = () => {
    onEdit(taskId);
   
  };

  return (
    <div className=" bg-white border-2 ml-40 ">
      {/* Delete button */}
      <div className="flex mt-2 px-4" onClick={handleDelete}>
        <button>
          <img className="mr-3 h-4" src="src\assets\images\Delete.png" alt="Delete"></img>
        </button>
        <text className="">Delete</text>
      </div>
      {/* View button */}
      {/* Edit button */}
      <div className="flex mt-2 px-4">
        <button onClick={handleEdit}>
          <img src="src\assets\images\Edit.png" alt="Edit"></img>
        </button>
        <text className="ml-2">Edit</text>
      </div>
    </div>
  );
}

Todo.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  taskId: PropTypes.string.isRequired,
};

export default Todo;
