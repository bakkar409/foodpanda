import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword,  signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";



const firebaseConfig = {
  apiKey: "AIzaSyBg-HX19Is0gfd6mETCsiW_zL4WUotct1I",
  authDomain: "my-app-cfee2.firebaseapp.com",
  projectId: "my-app-cfee2",
  storageBucket: "my-app-cfee2.firebasestorage.app",
  messagingSenderId: "87560736208",
  appId: "1:87560736208:web:b797febd7a61eafd5dbdd5",
  measurementId: "G-BWG41E5QLQ"
};

const app = initializeApp(firebaseConfig);



const auth = getAuth();
let getBtn = document.getElementById('btn')

getBtn.addEventListener('click', function(){
const email = document.getElementById('semail').value
const password = document.getElementById('spassword').value

createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  const user = userCredential.user;
  alert(user.email+' account created successfully')

})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  alert(errorCode,errorMessage)
});
})