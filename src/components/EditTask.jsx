import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAddTaskMutation } from "../hooks/useDataFetchAndMutate.js";

function EditTask({ handleSave, toggleModal, handleCancel, setIsModalOpen }) {
  const [priority, setPriority] = useState(3);
  const [status, setStatus] = useState("pending");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const accessToken = localStorage.getItem("accessToken");

  const onSubmit = (data) => {
    // console.log(data);
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={toggleModal}
    >
      <form
        className="bg-white p-8 rounded-lg shadow-lg w-11/12 sm:w-96 md:w-1/3"
        onClick={(e) => e.stopPropagation()} // Prevent modal close on form click
        onSubmit={handleSubmit(onSubmit)}
      >
        <button
          type="button"
          onClick={toggleModal}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-4">Add New Task</h2>

        {/* Task Title */}
        <input
          type="text"
          placeholder="Input new task here"
          className="w-full px-4 py-2 border border-gray-300 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          {...register("title", { required: "Task title is required" })}
        />
        {errors.title && (
          <p className="text-red-500 text-sm">{errors.title.message}</p>
        )}

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
            className="w-full h-2 rounded-lg appearance-none cursor-pointer focus:outline-none"
            style={{
              background: `linear-gradient(to right, #3b82f6 ${
                (priority - 1) * 25
              }%, #e5e7eb ${(priority - 1) * 25}%)`,
            }}
          />
          <div className="flex justify-between text-sm mt-1">
            {[1, 2, 3, 4, 5].map((num) => (
              <span key={num}>{num}</span>
            ))}
          </div>
        </div>

        {/* Status Toggle */}
        <div className="mb-4 flex items-center">
          <label className="text-sm mr-2">Pending</label>
          <button
            type="button"
            onClick={() =>
              setStatus(status === "finished" ? "pending" : "finished")
            }
            className={`${
              status === "finished" ? "bg-blue-600" : "bg-gray-300"
            } w-10 h-5 rounded-full flex items-center transition-colors duration-300`}
          >
            <span
              className={`w-5 h-5 rounded-full bg-white transform transition-transform duration-300 ${
                status === "finished" ? "translate-x-5" : "translate-x-0"
              }`}
            ></span>
          </button>
          <span className="ml-2 text-sm">Finished</span>
        </div>

        {/* Date Range Picker */}
        <div className="mb-4 flex space-x-4">
          <div className="w-1/2">
            <label className="block text-sm mb-2">Start Date</label>
            <input
              type="date"
              {...register("startTime", {
                required: "Start Date is required",
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.startTime && (
              <p className="text-red-500 text-sm">{errors.startTime.message}</p>
            )}
          </div>
          <div className="w-1/2">
            <label className="block text-sm mb-2">End Date</label>
            <input
              type="date"
              {...register("endTime", { required: "End Date is required" })}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.endTime && (
              <p className="text-red-500 text-sm">{errors.endTime.message}</p>
            )}
          </div>
        </div>

        {/* Save/Cancel Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <button
            type="button"
            onClick={handleCancel}
            className="px-4 py-2 bg-gray-300 text-gray-700 font-medium rounded hover:bg-gray-400 transition duration-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition duration-300"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditTask;
