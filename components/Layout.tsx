import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }: any) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">{children}</div>
    </div>
  );
};

export default Layout;
