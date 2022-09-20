import React, { createContext, useContext, useState, useEffect } from 'react';
import AccountLogin from '../../model/AccountLogin';

const UserContext = createContext();
const UserUpdateContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(new AccountLogin("", "", ""));

  const handleUserOnChange = (username, password, employeeName) => {
    setUser(new AccountLogin(username, password, employeeName));
    localStorage.setItem("employeeName", employeeName);
  }

  useEffect(() => {
    const fetchUser = () => {
      setUser(new AccountLogin("", "", localStorage.getItem('employeeName')))
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

// import React, { createContext, useContext, useState, useEffect } from 'react';
// import Account from '../../model/Account.tsx';

// const UserContext = createContext();
// const UserUpdateContext = createContext();

// export function UserProvider({ children }) {
//   const [user, setUser] = useState(
//     new Account(
//       1,
//       '',
//       '',
//       '',
//       false,
//       false,
//       false,
//       false,
//       false
//     )
//   );

//   const handleUserOnChange = (
//     accountId,
//     accountUsername,
//     accountPassword,
//     employeeName,
//     accessInventoryManagementSystem,
//     accessEmployeeManagementSystem,
//     accessIncomeAndExpenseSystem,
//     accessOrderingSystem,
//     isActive
//   ) => {
//     setUser(
//       new Account(
//         accountId,
//         accountUsername,
//         accountPassword,
//         employeeName,
//         accessInventoryManagementSystem,
//         accessEmployeeManagementSystem,
//         accessIncomeAndExpenseSystem,
//         accessOrderingSystem,
//         isActive
//     ));
//     localStorage.setItem("employeeName", employeeName);
//   }

//   useEffect(() => {
//     const fetchUser = () => {
//       setUser(
//         new Account(
//         1,
//         '',
//         '',
//         localStorage.getItem('employeeName'),
//         false,
//         false,
//         false,
//         false,
//         false
//       ))
//     };

//     fetchUser();
//   }, []);

//   return (
//     <UserContext.Provider value={user}>
//       <UserUpdateContext.Provider value={handleUserOnChange}>
//         {children}
//       </UserUpdateContext.Provider>
//     </UserContext.Provider>
//   );
// }

// export function useUser() {
//   return useContext(UserContext);
// }

// export function useUserUpdate() {
//   return useContext(UserUpdateContext);
// }