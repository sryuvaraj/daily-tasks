import React from "react";
import ThemContext from "./ThemContext";
import NavRoutes from "./NavRoutes";

const ThemeChangeHome = () => {
  return (
    <div>
      <ThemContext >
        <NavRoutes />
      </ThemContext>
    </div>
  );
};

export default ThemeChangeHome;
