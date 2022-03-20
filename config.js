import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyAL65kkMKv5wvtY-_eelqg7qq36ysRmjYw",
  authDomain: "ciclistaeletronico-ber.firebaseapp.com",
  projectId: "ciclistaeletronico-ber",
  storageBucket: "ciclistaeletronico-ber.appspot.com",
  messagingSenderId: "458812989512",
  appId: "1:458812989512:web:16803a1cc695943179387d"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
