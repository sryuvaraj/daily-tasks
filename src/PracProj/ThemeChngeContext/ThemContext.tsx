import React, { createContext, useState } from "react";
import NavRoutes from "./NavRoutes";

const ThemeChangeProvider: any = createContext(null);

const ThemContext = ({children}:any) => {
  const [theme, setTheme] = useState<any>(false);
  return (
    <ThemeChangeProvider.Provider value={{ theme, setTheme }}>
        
      <div>
        {children}
      </div>
    </ThemeChangeProvider.Provider>
  );
};

export default ThemContext;
export {ThemeChangeProvider}
