// EditTaskModal.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function EditModal({ task, onSubmit, onClose }) {
  const [editedTask, setEditedTask] = useState({ ...task });
  const [loading, setLoading] = useState(false);
  const [cross, setCross] = useState(true);

  const crossDisplay = () => {
    setCross((prevCross) => !prevCross); // Toggle cross state
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    onSubmit(editedTask)
      .then(() => {
        onClose(); // Close modal after successful submission
      })
      .catch((error) => {
        console.error("Error submitting edited task:", error);
      })
      .finally(() => {
        setLoading(false); // Set loading to false after submission (success or failure)
      });
  };
  const handleClose = () => {
    onClose(); // Call the provided onClose function
    setCross(true); // Reset cross state to true on close
  };
  const openModal = () => {
    setCross(true); // Set cross state to true to show the modal
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <>
    {cross && (
    <div className="fixed inset-0 flex items-center justify-center bg-[#000000] bg-opacity-50">
      <div className="bg-white p-8 w-[482px] rounded-lg">
        <div className="flex">
          <h2 className="text-xl font-medium mx-auto mb-4 mt-1 text-center">
            Edit Task
          </h2>
          <button onClick={crossDisplay} className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="ml-14 mr-14 items-center justify-center">
          <p className="text-xs text-[#888888] text-center justify-center">
            Fill the information below to edit task as per <br></br>your
            requirement.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block mb-1 font-bold">
              Enter Title:
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter Full Title"
              value={editedTask.title}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-1 px-3"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="value2" className="block mb-1 font-bold">
              Description:
            </label>
            <input
              type="text"
              name="description"
              placeholder="Enter Description Text"
              value={editedTask.description}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-1 px-3"
            />
          </div>
          <label htmlFor="value3" className="block mb-1 font-bold">
            Attachment:
          </label>

          <input
            type="file"
            name="attachment"
            
            className="w-full h-40 border border-gray-300 rounded-md py-1 px-3"
          />
          <div className="flex">
            <p className="text-xs text-[#888888]">Supported Format: PNG,JPG</p>
            <p className="text-xs ml-36 text-[#888888]">Maximum size: 5mb</p>
          </div>
          <label className="block mb-2 mt-3 font-bold">Start Date:</label>
          <input
            className="w-full border border-gray-300 rounded-md py-1 px-3"
            type="date"
            name="startDate"
            value={formatDate(editedTask.startDate)}
            onChange={handleChange}
            required
          ></input>
          <label className="block mb-2 font-bold">End Date:</label>
          <input
            className="w-full border border-gray-300 rounded-md py-1 px-3"
            type="date"
            name="endDate"
            value={formatDate(editedTask.endDate)}
            onChange={handleChange}
            required
          ></input>
          {/* Submit button with loading spinner */}
          <button
            type="submit"
            className="bg-[#4BCBEB] text-white py-2 px-4 ml-40 mt-3 rounded-md relative"
            style={{ width: "100px", height: "40px" }} // Set fixed dimensions for the button
            disabled={loading} // Disable button when loading is true
          >
            {loading && (
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faSpinner}
                  className="fa-spin text-white"
                />
              </div>
            )}
            {!loading && "Submit"}
          </button>
        </form>
      </div>
    </div>
     )}
    </>
  );
}

EditModal.propTypes = {
  task: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EditModal;
