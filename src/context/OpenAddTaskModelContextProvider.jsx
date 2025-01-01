import React, { useState } from "react";
import OpenAddTaskModelContext from "./OpenAddTaskModelContext";

const OpenAddTaskModelContextProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <OpenAddTaskModelContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      {children}
    </OpenAddTaskModelContext.Provider>
  );
};

export default OpenAddTaskModelContextProvider;
