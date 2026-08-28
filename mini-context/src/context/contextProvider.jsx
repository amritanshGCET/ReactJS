import React from "react";
import Usercontext from "./context";

const ContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  return (
    <Usercontext.Provider value={{ user, setUser }}>
      {children}
    </Usercontext.Provider>
  );
};

export default ContextProvider;
