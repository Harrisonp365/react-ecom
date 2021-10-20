import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDi4VXRAML8WLYrXc51aE-VNJ0BEUlhV4",
  authDomain: "rtx-r-us.firebaseapp.com",
  projectId: "rtx-r-us",
  storageBucket: "rtx-r-us.appspot.com",
  messagingSenderId: "1088107243967",
  appId: "1:1088107243967:web:f1551f88bbced9c465990a",
};

// Init Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
