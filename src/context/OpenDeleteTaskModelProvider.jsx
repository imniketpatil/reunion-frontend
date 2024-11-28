import React, { useState } from "react";
import OpenDeleteTaskModelContext from "./OpenDeleteTaskModelContext";

const OpenDeleteTaskModelContextProvider = ({ children }) => {
  const [openDeleteModel, setOpenDeleteModel] = useState(false);
  return (
    <OpenDeleteTaskModelContext.Provider
      value={{ openDeleteModel, setOpenDeleteModel }}
    >
      {children}
    </OpenDeleteTaskModelContext.Provider>
  );
};

export default OpenDeleteTaskModelContextProvider;
