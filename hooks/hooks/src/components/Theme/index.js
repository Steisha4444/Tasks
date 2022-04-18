import React from "react";
const themes = {
 
    dark: {
      foreground: "#ffffff",
      background: " linear-gradient(to right, #11998e, #38ef7d)",
      padding:"5px",
      border:"none",
      cursore:"pointer",
      color:"#000"
    }
  };
  
  const ThemeContext = React.createContext(themes.dark);

  export {ThemeContext, themes};
