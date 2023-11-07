// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

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

let passInp = document.getElementById('passwordInp');
let emailInp = document.getElementById('emailInp');
let MainForm = document.getElementById('MainForm');

let SignInUser = evt => {
    evt.preventDefault();

    signInWithEmailAndPassword(auth, emailInp.value, passInp.value)
        .then(async (credentials) => {
            console.log(credentials);
            var ref = doc(db, "users", credentials.user.uid);
            const docSnap = await getDoc(ref);

            if (docSnap.exists()) {
                sessionStorage.setItem("user-info", JSON.stringify({
                    username: docSnap.data().username,
                    firstname: docSnap.data().firstname,
                    lastname: docSnap.data().lastname,
                    email: docSnap.data().email,
                    password: docSnap.data().password,
                    phonenumber: docSnap.data().phonenumber,
                    address: docSnap.data().address,
                    birthday: docSnap.data().birthday,
                }))
                sessionStorage.setItem("user-creds", JSON.stringify(credentials.user));
                window.location.href = "home.html";
            }


        })
        .catch((error) => {
            alert(error.message);
        })
}

MainForm.addEventListener("submit", SignInUser);

// Google Sign in
const provider = new GoogleAuthProvider(app);

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