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
// import TasksTable from "../components/TasksTable";
// import { toast } from "react-toastify";

export default function TaskPage() {
  // States For Tasks
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [taskTitle, setTaskTitle] = React.useState("");
  const [priority, setPriority] = React.useState(5);
  const [status, setStatus] = React.useState(false); // false - Pending, true - Finished
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);

  // Context for Model to Open Close
  const { openDeleteModel, setOpenDeleteModel } = useContext(
    OpenDeleteTaskModelContext
  );
  const { openEditTaskModel, setOpenEditTaskModel } = useContext(
    OpenEditTaskModelContext
  );

  // Function to toggle modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSave = () => {
    if (!taskTitle.trim()) {
      // toast.error("Task title is required!");
      return;
    }

    console.log({
      taskTitle,
      priority,
      status,
      startDate,
      endDate,
    });

    // Add logic to save task (e.g., update state or call an API endpoint)
    // toast.success("Task saved successfully!");

    // Reset state and close modal
    handleCancel();
  };

  const handleCancel = () => {
    setTaskTitle("");
    setPriority(1);
    setStatus(false);
    setStartDate(null);
    setEndDate(null);
    setIsModalOpen(false); // Close modal without saving
  };

  const handleEdit = () => {
    console.log("Edit task");
    // Add logic for editing a task
  };

  const handleDelete = () => {
    console.log("Delete task");
    // Add logic for deleting a task
  };

  const handleMarkAsDone = () => {
    console.log("Task marked as done");
    // Add logic for marking task as done
  };

  const handleDeleteClick = () => {
    setOpenDeleteModel(!openDeleteModel);
  };

  const handleEditClick = () => {
    setOpenEditTaskModel(!openEditTaskModel);
  };

  return (
    <>
      <div className="">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 place-self-center sm:place-self-stretch">
              {/* Add as many TaskCard components as needed */}
              <TaskCard />
              <TaskCard />
              <TaskCard />
              <TaskCard />
              <TaskCard />
              <TaskCard />
              <TaskCard />
              <TaskCard />
              <TaskCard />
              <TaskCard />
              <TaskCard />
              <TaskCard />
              <TaskCard />
              <TaskCard />
            </div>
          </div>
        </div>

        {/* Add Task Modal */}
        {isModalOpen && (
          <AddTask
            handleSave={handleSave}
            toggleModal={toggleModal}
            handleCancel={handleCancel}
            taskTitle={taskTitle}
            setTaskTitle={setTaskTitle}
            priority={priority}
            setPriority={setPriority}
            status={status}
            setStatus={setStatus}
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
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
