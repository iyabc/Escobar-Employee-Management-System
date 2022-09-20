import React, { useState, useEffect, createContext, useContext} from 'react';
import Account from '../../model/Account.tsx';

const UserContext = createContext();
const UserUpdateContext = createContext();

export function UserProvider({ children }) {
  const [user,setUser] = useState(
    new Account(
      '',
      '',
      ''
    )
  );

  const handleUserOnChange = (username, password, employeeName) => {
    setUser(
      new Account(
        username,
        password,
        employeeName
      )
    );
    localStorage.setItem('employeeName', employeeName);
  }

  useEffect(() => {
    const fetchUser = () => {
      setUser(
        new Account(
          '',
          '',
          localStorage.getItem('employeeName')
        )
      )
    };
    fetchUser();
  }, [])

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