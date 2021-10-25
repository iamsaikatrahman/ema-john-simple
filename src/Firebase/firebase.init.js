import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializAuthenticationa = () => {
  initializeApp(firebaseConfig);
};
export default initializAuthenticationa;
