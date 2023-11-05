// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getDatabase, ref } from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

// Get a database reference to our posts
const ref = db.ref('server/saving-data/fireblog/posts');


displayProfileButton.addEventListener('click',(e) => {

    // Attach an asynchronous callback to read the data at our posts reference
    ref.on('value', (snapshot) => {
        console.log(snapshot.val());
    }, (errorObject) => {
        console.log('The read failed: ' + errorObject.name);
    }); 

});    
