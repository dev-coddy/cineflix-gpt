import { createContext, useContext, useState } from "react";

import { app, auth } from "../Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext(null);

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function signOut() {
    return signOut(auth);
  }

  return <AuthContext.Provider>{children}</AuthContext.Provider>;
}

export function UserAuth() {
  return useContext(AuthContext);
}
