import Sidebar from "../_components/Sidebar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="h-full">
      <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        <Sidebar/>
      </div>
      {children}
    </div>
  );
};

export default layout;
