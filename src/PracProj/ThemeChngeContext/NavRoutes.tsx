import React, { useContext } from "react";
import ThemContext, { ThemeChangeProvider } from "./ThemContext";

const NavRoutes = () => {
  const { theme, setTheme } = useContext(ThemeChangeProvider);
  console.log(theme)
  return (
    <div>
      <p className={`${theme ? "text-black bg-blue-200" : "text-white bg-gray-800"}`}>NavRoutes</p>
      <button onClick={() => setTheme(!theme)}>changeTheme</button>
    </div>
  );
};

export default NavRoutes;
