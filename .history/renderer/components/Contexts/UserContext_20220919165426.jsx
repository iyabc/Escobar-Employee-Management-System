import React, { createContext, useContext, useState, useEffect } from 'react';
import Account from '../../model/Account.tsx';

const UserContext = createContext();
const UserUpdateContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(
    new Account(
      accountId,
      accountUsername,
      accountPassword,
      employeeName,
      accessInventoryManagementSystem,
      accessEmployeeManagementSystem,
      accessIncomeAndExpenseSystem,
      accessOrderingSystem,
      isActive
    )
  );

  const handleUserOnChange = (username, password, employeeName) => {
    setUser(new Account(
      accountId,
      accountUsername,
      accountPassword,
      employeeName,
      accessInventoryManagementSystem,
      accessEmployeeManagementSystem,
      accessIncomeAndExpenseSystem,
      accessOrderingSystem,
      isActive
    ));
    localStorage.setItem("employeeName", employeeName);
  }

  useEffect(() => {
    const fetchUser = () => {
      setUser(new Account("", "", localStorage.getItem('employeeName')))
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={user}>
      <UserUpdateContext.Provider value={handleUserOnChange}>
        {children}
      </UserUpdateContext.Provider>
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}

export function useUserUpdate() {
  return useContext(UserUpdateContext);
}