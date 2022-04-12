import React, { createContext, useContext, useState, useEffect } from "react";
// Expecting a defaultValue, which is an anti-pattern
// @ts-ignore
export const UserContext = createContext<any>();
export const UserProvider: React.FC<any> = ({ children }) => {
  const store = userStore();
  return <UserContext.Provider value={store}>{children}</UserContext.Provider>;
};

export const userStore = (): any => {
  const value = useContext(UserContext);
  const [fullName, setFullName] = useState("");
  useEffect(() => {
    setFullName("Darryn Lee-warden");
  }, []);

  return {
    value,
    fullName,
  };
};
