import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBva95mAhROsKI059cBQjxkeeLhNqpCgc8",
  authDomain: "book-scanner-1d57d.firebaseapp.com",
  projectId: "book-scanner-1d57d",
  storageBucket: "book-scanner-1d57d.appspot.com",
  messagingSenderId: "101801786997",
  appId: "1:101801786997:web:0af84b06c233a4e761823c"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()