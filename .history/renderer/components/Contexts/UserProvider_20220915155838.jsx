import React, { useState, useEffect, createContext, useContext} from 'react';
import AccountLogin from '../../model/AccountLogin';

const userContext = createContext();
const userUpdateContext = createContext();

export default function UserProvider({ children }) {
  const [user,setUser] = useState(
    new AccountLogin(
      '',
      '',
      ''
    )
  );
  

  return (
    <div>UserContext</div>
  )
}
