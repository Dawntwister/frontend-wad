// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getDatabase,ref, child, get } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcH1GXtjhCUF6Mi43YMz9sJ22H4Xqn5tM",
  authDomain: "farmers-ground---wad-2.firebaseapp.com",
  databaseURL: "https://farmers-ground---wad-2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "farmers-ground---wad-2",
  storageBucket: "farmers-ground---wad-2.appspot.com",
  messagingSenderId: "16212184222",
  appId: "1:16212184222:web:87c88f3d7a15b82d147f8f"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const dbRef = ref(getDatabase());
get(child(dbRef,`users/tester5`)).then((snapshot)=>{
  if(snapshot.exists()){
    console.log(snapshot.val());
  }else{
    console.log("No data available");
  }
});