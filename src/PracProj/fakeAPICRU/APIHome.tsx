import React, { useEffect, useState } from "react";
import ReelsPage from "./ReelsPage";
import { BrowserRouter } from "react-router-dom";
import NavRoutes from "./NavRoutes";

const APIHome = () => {
  return (
    <BrowserRouter>
      <div>
        <div>
          <NavRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default APIHome;
