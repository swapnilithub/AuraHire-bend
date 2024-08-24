// UserContext.js
import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userType, setUserType] = useState('student'); // Default or dynamically set

  return (
    <UserContext.Provider value={{ userType, setUserType }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
