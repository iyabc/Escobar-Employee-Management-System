import React, { createContext, useContext, useState, useEffect } from 'react';
import Account from '../../model/Account.tsx';

const UserContext = createContext();
const UserUpdateContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(
    new Account(
      1,
      '',
      '',
      '',
      false,
      false,
      false,
      false,
      true
    )
  );

  const handleUserOnChange = (
    accountId,
    accountUsername,
    accountPassword,
    employeeName,
    accessInventoryManagementSystem,
    accessEmployeeManagementSystem,
    accessIncomeAndExpenseSystem,
    accessOrderingSystem,
    isActive
  ) => {
    setUser(
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
    ));
    localStorage.setItem("employeeName", employeeName);
    localStorage.setItem("accessInventoryManagementSystem", accessInventoryManagementSystem);
    localStorage.setItem("accessEmployeeManagementSystem", accessEmployeeManagementSystem);
    localStorage.setItem("accessIncomeAndExpenseSystem", accessIncomeAndExpenseSystem);
    localStorage.setItem("accessOrderingSystem", accessOrderingSystem);
  }

  useEffect(() => {
    const fetchUser = () => {
      setUser(
        new Account(
        1,
        '',
        '',
        localStorage.getItem('employeeName'),
        localStorage.getItem("accessInventoryManagementSystem", accessInventoryManagementSystem),
        localStorage.getItem("accessEmployeeManagementSystem", accessEmployeeManagementSystem),
        localStorage.getItem("accessIncomeAndExpenseSystem", accessIncomeAndExpenseSystem),
        localStorage.getItem("accessOrderingSystem", accessOrderingSystem)
        false
      ))
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