// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getFirestore, addDoc, collection   } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

// //method 2 failed
// import { getDatabase, set, ref } from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js';
// import { getAuth, createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";


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

// //method 2 failed
// const db = getDatabase();
// const auth = getAuth(app);

// let username = document.getElementById('username');
// let firstname = document.getElementById('firstname');
// let lastname = document.getElementById('lastname');
// let email = document.getElementById('email');
// let password = document.getElementById('password');
// let phonenumber = document.getElementById('phonenumber');
// let address = document.getElementById('address');
// let birthday = document.getElementById('birthday');

// let RegisterUser = evt => {
//     evt.preventDefault();
    
//     createUserWithEmailAndPassword(auth, email.value, password.value)
//     .then((credentials)=>{
//         console.log(credentials);
//         alert('Account created! Proceed to sign in to your account.');
            
//     })
//     .catch((error) => {
//         alert(errorMessage);
//         console.log(error.code);
//         console.log(error.message);
//     });
// }

// signupButton.addEventListener('submit', RegisterUser);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


signupButton.addEventListener('click',(e) => {

    var username = document.getElementById('username').value;
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var phonenumber = document.getElementById('phonenumber').value;
    var address = document.getElementById('address').value;
    var birthday = document.getElementById('birthday').value;

    addDoc(collection(db, "users"), {
        username: username,
        email: email,
        firstname: firstname,
        lastname: lastname,
        phonenumber: phonenumber,
        address: address,
        birthday: birthday,
        password: password
        
    });

    alert('Account created! Proceed to sign in to your account.');


});

