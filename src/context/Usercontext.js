import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

const UserContext = createContext();

export const UserContextProvider = (props) => {
  const { children } = props;
  const [currentUser, setCurrentUser] = useState(null);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (userInfo) => {
      if (userInfo) {
        setIsUserLoggedIn(true);
        setCurrentUser(userInfo);
      } else {
        setIsUserLoggedIn(false);
        setCurrentUser(null);
      }

      setLoading(false);
    });
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, isUserLoggedIn, loading }}>
      {children}
    </UserContext.Provider>
  );
};

const signOut = async () => {
  try {
    await firebaseSignOut(auth);
  } catch (error) {
    console.error("Error signing out: ", error);
  }
};

export const useUserContext = () => {
  return useContext(UserContext);
};