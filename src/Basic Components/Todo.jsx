// Todo.jsx
import React from "react";
import PropTypes from "prop-types";
function Todo({ onDelete }) {
    const handleDelete = () => {
        // Assuming taskId is provided by the parent component
        onDelete();
    };

    return (
        <div className=" bg-white border-2 ml-40">
            <div className="flex mt-2 px-4" onClick={handleDelete}>
                <button>
                    <img className="mr-3 h-4" src="src\assets\images\Delete.png" alt="Delete"></img>
                </button>
                <text className="ml-2">Delete</text>
            </div>
            <div className="flex mt-2 px-4">
                <button>
                    <img src="src\assets\images\Eye.png" alt="View"></img>
                </button>
                <text className="ml-2">View</text>
            </div>
            <div className="flex mt-2 px-4">
                <button>
                    <img src="src\assets\images\Edit.png" alt="Edit"></img>
                </button>
                <text className="ml-2">Edit</text>
            </div>
        </div>
    );
}
Todo.propTypes = {
    onDelete: PropTypes.func.isRequired,
  };
export default Todo;
