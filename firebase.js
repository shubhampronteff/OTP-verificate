import * as firebase from "firebase";
import "@firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDr6of06YOfmsxcQM_-i1pDct2iwRR5_Y4",
  authDomain: "otp-project-react.firebaseapp.com",
  databaseURL: "https://otp-project-react.firebaseio.com",
  projectId: "otp-project-react",
  storageBucket: "otp-project-react.appspot.com",
  messagingSenderId: "840708651795",
  appId: "1:840708651795:android:8e098873c2a0b3fd0c38e6",
//   measurementId: "G-XXXXXXX",
};
firebase.initializeApp(firebaseConfig);
export default firebase;
