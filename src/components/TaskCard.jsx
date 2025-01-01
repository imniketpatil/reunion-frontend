import React, { useContext } from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import OpenDeleteTaskModelContext from "../context/OpenDeleteTaskModelContext";
import OpenEditTaskModelContext from "../context/OpenEditTaskModelContext";

function TaskCard({ data = [] }) {
  const { setOpenDeleteModel } = useContext(OpenDeleteTaskModelContext);
  const { setOpenEditTaskModel } = useContext(OpenEditTaskModelContext);

  const handleDeleteClick = (id) => {
    console.log(id);
    setOpenDeleteModel(true);
  };

  const handleEditClick = (id) => {
    console.log(id);
    setOpenEditTaskModel(true);
  };

  const formatDate = (date) => {
    const options = {
      day: "numeric",
      month: "short",
      year: "numeric",
    };

    return new Date(date).toLocaleDateString("en-GB", options).replace(",", "");
  };

  const calculateTimeToComplete = (startTime, endTime) => {
    const start = new Date(startTime);
    const end = new Date(endTime);

    const diffInMilliseconds = end - start;
    const diffInMinutes = Math.floor(diffInMilliseconds / 60000); // Convert ms to minutes
    const diffInHours = Math.floor(diffInMinutes / 60); // Convert minutes to hours
    const remainingMinutes = diffInMinutes % 60; // Get remaining minutes

    // Format as "X hours Y minutes"
    return `${diffInHours} hours ${remainingMinutes} minutes`;
  };

  // Check if data is valid before attempting to map
  if (!Array.isArray(data)) {
    return <div>No tasks available</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 place-self-center sm:place-self-stretch">
      {data.map((task, index) => (
        <div
          key={task?._id || index}
          className="flex flex-col max-w-xl bg-white m-4 p-4 rounded-lg shadow-md border hover:cursor-pointer border-gray-200 hover:shadow-lg transition-shadow"
        >
          {/* Task Header */}
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-base text-gray-800">
              TaskID : {index + 1}
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
            <span className="text-gray-900 font-semibold text-xl grow">
              {task?.title}
            </span>
          </div>

          <div className="flex mb-1 justify-between w-full">
            <div className="flex items-center">
              <span className="text-gray-700 font-medium">Priority:</span>
              <span className="text-green-600 font-bold ml-2">
                {task?.priority}
              </span>
            </div>

            <div className="flex items-center">
              <span className="text-gray-700 font-medium">Status:</span>
              <span className="text-green-600 font-bold ml-2">
                {task?.status === "pending" ? "Pending" : "Finished"}
              </span>
            </div>
          </div>

          {/* Task Timing */}
          <div className="flex flex-col mt-1">
            <div className="flex justify-between items-center text-sm text-gray-600">
              <span className="font-medium">Start Time:</span>
              <span>{formatDate(task?.startTime)}</span>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-600 mt-2">
              <span className="font-medium">End Time:</span>
              <span>{formatDate(task?.endTime)}</span>
            </div>
          </div>

          <div className="flex flex-col mt-1">
            <div className="flex justify-between items-center text-sm text-gray-600">
              <span className="font-medium">Time To Complete</span>
              <span>
                {calculateTimeToComplete(task?.startTime, task?.endTime)}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskCard;
