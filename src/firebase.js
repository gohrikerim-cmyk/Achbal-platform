import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "ضع_apiKey_هنا",
  authDomain: "achbal-platform.firebaseapp.com",
  databaseURL: "https://achbal-platform-default-rtdb.firebaseio.com",
  projectId: "achbal-platform",
  storageBucket: "achbal-platform.appspot.com",
  messagingSenderId: "ضع_الرقم_هنا",
  appId: "ضع_appId_هنا"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app);
