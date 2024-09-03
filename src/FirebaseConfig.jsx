// ! Step 1

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyHbDSdb69hD-StTKmeTIOf7H0neRgpk4",
  authDomain: "blog-app-bfd21.firebaseapp.com",
  projectId: "blog-app-bfd21",
  storageBucket: "blog-app-bfd21.appspot.com",
  messagingSenderId: "919105276415",
  appId: "1:919105276415:web:c0ff3b0063b416b1463fca"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);