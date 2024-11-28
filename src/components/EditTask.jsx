import React from "react";

function EditTask({
  handleSave,
  toggleModal,
  handleCancel,
  taskTitle,
  priority,
  status,
  startDate,
  endDate,
}) {
  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        onClick={toggleModal}
      >
        <div
          className="bg-white p-8 rounded-lg shadow-lg w-11/12 sm:w-96 md:w-1/3"
          onClick={(e) => e.stopPropagation()} // Prevents modal close on modal content click
        >
          <h2 className="text-2xl font-semibold mb-4">Add New Task</h2>

          {/* Task Title */}
          <input
            type="text"
            placeholder="Input new task here"
            className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />

          {/* Priority Slider */}
          <div className="mb-4">
            <label className="block text-sm mb-2">Priority</label>
            <input
              type="range"
              min="1"
              max="5"
              step="1"
              value={priority}
              onChange={(e) => setPriority(Number(e.target.value))}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer focus:outline-none ring-1 focus:ring-blue-400"
              style={{
                backgroundSize: `${(priority - 1) * 25}% 100%`,
                backgroundPosition: "0 0",
                backgroundRepeat: "no-repeat",
                backgroundImage:
                  "linear-gradient(to right, #3b82f6 50%, #3b82f6 100%)",
              }}
            />

            <div className="flex justify-between text-sm mt-1">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
            </div>
          </div>

          {/* Status Toggle */}
          <div className="mb-4 flex items-center">
            <label className="text-sm mr-2">Pending</label>

            <div className="relative">
              <button
                onClick={() => setStatus(!status)}
                className={`${
                  status
                    ? "bg-blue-600 text-white"
                    : "bg-gray-300 text-gray-600"
                } w-10 h-5 rounded-full flex items-center justify-${
                  status ? "end" : "start"
                } transition-colors duration-300 ease-in-out`}
              >
                <span
                  className={`w-5 h-5 rounded-full bg-white transition-transform duration-300 ease-in-out transform border-2 ${
                    status
                      ? "translate-x-0 border-blue-400"
                      : "translate-x-0 border-gray-100"
                  }`}
                ></span>{" "}
              </button>
            </div>

            <span className="ml-2 text-sm">Finished</span>
          </div>

          {/* Date Range Picker */}
          <div className="mb-4 flex space-x-4">
            <div className="w-1/2">
              <label className="block text-sm mb-2">Start Date</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm mb-2">End Date</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full px-2 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Save/Cancel Buttons */}
          <div className="flex justify-end gap-4 mt-6">
            <button
              onClick={handleCancel}
              className="px-4 py-2 bg-gray-300 text-gray-700 font-medium rounded hover:bg-gray-400 focus:outline-none transition duration-300"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 focus:outline-none transition duration-300"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditTask;
