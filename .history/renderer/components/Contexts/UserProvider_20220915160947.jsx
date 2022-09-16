import React, { useState, useEffect, createContext, useContext} from 'react';
import AccountLogin from '../../model/AccountLogin';

const userContext = createContext();
const userUpdateContext = createContext();

export function UserProvider({ children }) {
  const [user,setUser] = useState(
    new AccountLogin(
      '',
      '',
      ''
    )
  );

  const handleUserChange = (username, password, employeeName) => {
    setUser(
      new AccountLogin(
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
        new AccountLogin(
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
