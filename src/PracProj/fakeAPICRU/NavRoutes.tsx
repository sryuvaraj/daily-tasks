import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ReelsPage from "./ReelsPage";
import ViewPost from "./ViewPost";

const NavRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ReelsPage />}></Route>
        <Route path="/:postId" element={<ViewPost />}></Route>
      </Routes>
    </div>
  );
};

export default NavRoutes;
