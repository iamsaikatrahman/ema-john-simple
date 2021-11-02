import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import initializAuthenticationa from "../Firebase/firebase.init";

initializAuthenticationa();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isloading, setIsloading] = useState(true);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const signInUsingGoogle = () => {
    setIsloading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const logOut = () => {
    setIsloading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => {
        setIsloading(false);
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsloading(false);
    });
    return () => unsubscribe;
  }, []);
  return {
    user,
    isloading,
    signInUsingGoogle,
    logOut,
  };
};

export default useFirebase;
