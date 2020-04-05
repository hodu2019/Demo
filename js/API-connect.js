// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCFKdx2P1-8Fg3r_0Eh6fg8PTW3QdNx5Ak",
    authDomain: "travel-21ee8.firebaseapp.com",
    databaseURL: "https://travel-21ee8.firebaseio.com",
    projectId: "travel-21ee8",
    storageBucket: "travel-21ee8.appspot.com",
    messagingSenderId: "937543331801",
    appId: "1:937543331801:web:83e12487aab0a805e433c8",
    measurementId: "G-6NKQ6FM1ZT"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore()
const auth = firebase.auth();
const storage = firebase.storage();