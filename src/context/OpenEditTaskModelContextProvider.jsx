import React, { useState } from "react";
import OpenEditTaskModelContext from "./OpenEditTaskModelContext";

const OpenEditTaskModelContextProvider = ({ children }) => {
  const [openEditTaskModel, setOpenEditTaskModel] = useState(false);
  return (
    <OpenEditTaskModelContext.Provider
      value={{ openEditTaskModel, setOpenEditTaskModel }}
    >
      {children}
    </OpenEditTaskModelContext.Provider>
  );
};

export default OpenEditTaskModelContextProvider;
