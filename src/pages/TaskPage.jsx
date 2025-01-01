import React, { useContext } from "react";
import AddIcon from "@mui/icons-material/Add";
import AddTask from "../components/AddTask";
import TaskCard from "../components/TaskCard";
import DropDown from "../assets/DropDown";
import OpenDeleteTaskModelContext from "../context/OpenDeleteTaskModelContext";
import OpenEditTaskModelContext from "../context/OpenEditTaskModelContext";
import EditTask from "../components/EditTask";
import DeleteTask from "../components/DeleteTask";
import Button from "@mui/material/Button";
import HistoryIcon from "@mui/icons-material/History";
import OpenAddTaskModelContext from "../context/OpenAddTaskModelContext";
import { useGetTasksQuery } from "../hooks/useDataFetchAndMutate";
import { useQuery } from "@tanstack/react-query";

export default function TaskPage() {
  const { isModalOpen, setIsModalOpen } = useContext(OpenAddTaskModelContext);
  const { openDeleteModel, setOpenDeleteModel } = useContext(
    OpenDeleteTaskModelContext
  );
  const { openEditTaskModel, setOpenEditTaskModel } = useContext(
    OpenEditTaskModelContext
  );

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleDeleteClick = () => {
    setOpenDeleteModel(!openDeleteModel);
  };

  const handleEditClick = () => {
    setOpenEditTaskModel(!openEditTaskModel);
  };

  const accessToken = localStorage.getItem("accessToken");
  const user = JSON.parse(localStorage.getItem("user"));

  // console.log(user._id);

  const { data, error, isLoading } = useQuery({
    queryKey: ["Tasks", user?._id],
    queryFn: () => useGetTasksQuery(accessToken, user?._id),
    enabled: !!accessToken && !!user?._id,
    staleTime: 120000,
    cacheTime: 120000,
  });

  return (
    <>
      <div>
        {/* Floating Add Button */}
        <div className="relative">
          <div className="fixed right-8 bottom-8 md:right-12 md:bottom-12">
            <button
              onClick={toggleModal}
              className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-xl hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 transition-transform duration-300 ease-in-out"
              aria-label="Add Task"
            >
              <div
                className={`transform transition-transform duration-300 ${
                  isModalOpen ? "rotate-45" : "rotate-180"
                }`}
              >
                <AddIcon fontSize="large" />
              </div>
            </button>
          </div>
        </div>

        {/* Task Table */}
        <div className="w-full py-3">
          <div className="max-w-screen-2xl mx-auto">
            {/* Filters Section */}
            <div className=" max-w-screen-xl mx-auto mb-2 p-2 rounded-lg ">
              <div className="bg-white p-2 px-4 rounded-lg flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 justify-between items-center">
                {/* Priority Dropdown */}
                <div className="flex flex-col md:flex-row items-center gap-3 w-full md:w-auto">
                  <label
                    htmlFor="priority"
                    className="text-gray-800 font-semibold text-lg w-full md:w-auto"
                  >
                    Priority
                  </label>
                  <DropDown data={["1", "2", "3", "4", "5"]} />
                </div>

                {/* Status Dropdown */}
                <div className="flex flex-col md:flex-row items-center gap-3 w-full md:w-auto">
                  <label
                    htmlFor="status"
                    className="text-gray-800 font-semibold text-lg w-full md:w-auto"
                  >
                    Status
                  </label>
                  <DropDown data={["Pending", "Finished"]} />
                </div>

                {/* Sort Dropdown */}
                <div className="flex flex-col md:flex-row items-center gap-3 w-full md:w-auto">
                  <label
                    htmlFor="sort"
                    className="text-gray-800 font-semibold text-lg w-full md:w-auto"
                  >
                    Sort
                  </label>
                  <DropDown data={["Ascending", "Descending"]} />
                </div>

                <div className="flex flex-col md:flex-row items-center gap-3 w-full md:w-auto">
                  <Button
                    variant="outlined"
                    startIcon={<HistoryIcon />}
                    color="error"
                  >
                    Reset
                  </Button>
                </div>
              </div>
            </div>

            {/* Task Cards Grid */}

            {/* Add as many TaskCard components as needed */}
            <TaskCard data={data} />
          </div>
        </div>

        {/* Add Task Modal */}
        {isModalOpen && (
          <AddTask
            toggleModal={toggleModal}
            handleCancel={handleCancel}
            setIsModalOpen={setIsModalOpen}
          />
        )}

        {openEditTaskModel && (
          <EditTask
            handleSave={handleEditClick}
            toggleModal={handleEditClick}
            handleCancel={handleEditClick}
          />
        )}

        {openDeleteModel && (
          <DeleteTask
            handleSave={handleDeleteClick}
            toggleModal={handleDeleteClick}
            handleCancel={handleDeleteClick}
          />
        )}
      </div>
    </>
  );
}
