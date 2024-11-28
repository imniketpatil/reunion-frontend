import React from "react";

function DeleteTask({ handleSave, toggleModal, handleCancel }) {
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
          <h2 className="text-2xl font-semibold mb-4">Delete ?</h2>

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
              className="px-4 py-2 bg-red-600 text-white font-medium rounded hover:bg-red-700 focus:outline-none transition duration-300"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeleteTask;
