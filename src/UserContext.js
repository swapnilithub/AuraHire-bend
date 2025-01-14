import React, { createContext, useState, useContext, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userType, setUserType] = useState(() => {
    const storedUserType = localStorage.getItem('userType');
    return storedUserType ? storedUserType : 'student';
  });

  useEffect(() => {
    localStorage.setItem('userType', userType);
  }, [userType]);

  return (
    <UserContext.Provider value={{ userType, setUserType }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
