import React, { useState } from "react";
import OpenProfileMobileContext from "./OpenProfileMobileContext;";

const OpenProfileMobileContextProvider = ({ children }) => {
  const [openProfileModel, setOpeProfileModel] = useState(false);
  return (
    <OpenProfileMobileContext.Provider
      value={{ openProfileModel, setOpeProfileModel }}
    >
      {children}
    </OpenProfileMobileContext.Provider>
  );
};

export default OpenProfileMobileContextProvider;
