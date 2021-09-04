import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCohTmQLI4v0qeX8iaJ9W3ykOde-3YrGYg",
  authDomain: "project-60-c1100.firebaseapp.com",
  projectId: "project-60-c1100",
  storageBucket: "project-60-c1100.appspot.com",
  messagingSenderId: "1013420282444",
  appId: "1:1013420282444:web:3c4a1c85ff1b1db2259ae9",
};
var app = firebase.initializeApp(firebaseConfig);
export default app.database();
