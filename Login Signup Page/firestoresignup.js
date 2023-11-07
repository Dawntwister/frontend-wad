// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";


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
const db = getFirestore();
const auth = getAuth(app);


let username = document.getElementById('username');
let firstname = document.getElementById('firstname');
let lastname = document.getElementById('lastname');
let email = document.getElementById('email');
let password = document.getElementById('password');
let phonenumber = document.getElementById('phonenumber');
let address = document.getElementById('address');
let birthday = document.getElementById('birthday');
let MainForm = document.getElementById('MainForm');

let RegisterUser = evt => {
  evt.preventDefault();

  createUserWithEmailAndPassword(auth, email.value, password.value)
      .then(async (credentials) => {
          var ref = doc(db, "users", credentials.user.uid);
          await setDoc(ref, {
              username: username.value,
              firstname: firstname.value,
              lastname: lastname.value,
              email: email.value,
              password: password.value,
              phonenumber: phonenumber.value,
              address: address.value,
              birthday: birthday.value,
          });
          alert('Account created! Proceed to sign in to your account.');
          window.location.href = 'login.html';
      })
      

      .catch((error) => {
          alert(error.message);
      })
}

MainForm.addEventListener("submit", RegisterUser);