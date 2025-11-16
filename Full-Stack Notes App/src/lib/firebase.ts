import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIQTLr9AHxHGMbhK4LhVvdRQ9gKhQn4DQ",
  authDomain: "notenest-213a7.firebaseapp.com",
  projectId: "notenest-213a7",
  storageBucket: "notenest-213a7.firebasestorage.app",
  messagingSenderId: "294758988773",
  appId: "1:294758988773:web:c5974e6fd6dccc29230d0c"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};