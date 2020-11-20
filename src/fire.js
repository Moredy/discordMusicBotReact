
//import firebase from 'firebase';
import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyB1jTXAGxIwQu-n6ZO_pnStCPv149oDUDc",
  authDomain: "websecurityapp.firebaseapp.com",
  databaseURL: "https://websecurityapp.firebaseio.com",
  projectId: "websecurityapp",
  storageBucket: "websecurityapp.appspot.com",
  messagingSenderId: "695568189148",
  appId: "1:695568189148:web:49914f0f3d860e1d7c5619",
  measurementId: "G-RRJBLKHDBF"
};

const fire = firebase.initializeApp(firebaseConfig);
//firebase.analytics();

export default fire;
