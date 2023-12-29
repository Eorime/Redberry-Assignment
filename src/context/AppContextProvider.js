import { createContext, useContext, useState } from "react";

const appContext = createContext();

const AppContextProvider = ({ children }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  return (
    <appContext.Provider value={{ showSuccess, setShowSuccess }}>
      {children}
    </appContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(appContext);
  if (context) {
    return context;
  }
  throw new Error("App Context Error");
};

export default AppContextProvider;
