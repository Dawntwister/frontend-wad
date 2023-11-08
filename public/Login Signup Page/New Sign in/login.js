// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getDatabase, set, ref, update } from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js';

import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithRedirect, getRedirectResult  } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";


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
const database = getDatabase(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);



// Regular Email/Password Sign in
loginButton.addEventListener('click',(e) => {

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // // Signed in 
        const user = userCredential.user;

        const dt = new Date();
        update(ref(database, 'users/' + user.uid), {
            last_login: dt,
        })
        alert('Successfully login');
        // window.location.href = '#';

    })

    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(errorMessage);
    });


});


const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
    } else {
        // User is signed out
        // ...
    }
});

// Google Sign In
loginGoogleButton.addEventListener('click',(e) => {
    signInWithRedirect(auth, provider);

    getRedirectResult(auth)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
  });


});


