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
    ));
    localStorage.setItem("accountId", accountId);
    localStorage.setItem("accountUsername", accountUsername);
    localStorage.setItem("accountPassword", accountPassword);
    localStorage.setItem("employeeName", employeeName);
    // localStorage.setItem("accessInventoryManagementSystem", accessInventoryManagementSystem);
    localStorage.setItem("accessEmployeeManagementSystem", true);
    // localStorage.setItem("accessIncomeAndExpenseSystem", accessIncomeAndExpenseSystem);
    // localStorage.setItem("accessOrderingSystem", accessOrderingSystem);
  }

  useEffect(() => {
    const fetchUser = () => {
      setUser(
        new Account(
        localStorage.getItem('accountId'),
        localStorage.getItem('accountUsername'),
        localStorage.getItem('accountPassword'),
        localStorage.getItem('employeeName'),
        // localStorage.getItem('accessInventoryManagementSystem'),
        localStorage.getItem('accessEmployeeManagementSystem'),
        // localStorage.getItem('accessIncomeAndExpenseSystem'),
        // localStorage.getItem('accessOrderingSystem'),
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