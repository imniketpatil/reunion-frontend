import React, { useContext } from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import OpenDeleteTaskModelContext from "../context/OpenDeleteTaskModelContext";
import OpenEditTaskModelContext from "../context/OpenEditTaskModelContext";

function TaskCard() {
  const { openDeleteModel, setOpenDeleteModel } = useContext(
    OpenDeleteTaskModelContext
  );
  const { openEditTaskModel, setOpenEditTaskModel } = useContext(
    OpenEditTaskModelContext
  );

  const handleDeleteClick = () => {
    setOpenDeleteModel(!openDeleteModel);
  };

  const handleEditClick = () => {
    setOpenEditTaskModel(!openEditTaskModel);
  };

  return (
    <div className="flex flex-col max-w-xl bg-white m-4 p-4 rounded-lg shadow-md border hover:cursor-pointer border-gray-200 hover:shadow-lg transition-shadow">
      {/* Task Header */}
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold text-base text-gray-800">
          TaskID: 12345
        </span>
        <div className="flex space-x-2">
          <button
            className="text-blue-500 hover:text-blue-700 font-medium transition-colors"
            onClick={handleEditClick}
          >
            <EditOutlinedIcon />
          </button>
          <button
            className="text-red-500 hover:text-red-700 font-medium transition-colors"
            onClick={handleDeleteClick}
          >
            <DeleteOutlineOutlinedIcon />
          </button>
        </div>
      </div>

      {/* Task Content */}
      <div className="mb-2">
        {/* <span className="text-gray-700 font-medium">Task:</span> */}
        <span className="text-gray-900 font-semibold text-xl grow">
          Complete the UI design
        </span>
      </div>

      <div className="flex mb-1 justify-between w-full">
        <div className="flex items-center">
          <span className="text-gray-700 font-medium">Priority:</span>
          <span className="text-green-600 font-bold ml-2">1</span>
        </div>

        <div className="flex items-center">
          <span className="text-gray-700 font-medium">Status:</span>
          <span className="text-green-600 font-bold ml-2">Pending</span>
        </div>
      </div>

      {/* Task Timing */}
      <div className="flex flex-col mt-1">
        <div className="flex justify-between items-center text-sm text-gray-600">
          <span className="font-medium">Start Time:</span>
          <span>10:00 AM</span>
        </div>
        <div className="flex justify-between items-center text-sm text-gray-600 mt-2">
          <span className="font-medium">End Time:</span>
          <span>12:00 PM</span>
        </div>
      </div>

      <div className="flex flex-col mt-1">
        <div className="flex justify-between items-center text-sm text-gray-600">
          <span className="font-medium">Time to End (hrs)</span>
          <span>10:00 AM</span>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
