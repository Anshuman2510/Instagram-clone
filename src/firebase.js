import firebase from "firebase/app"
import "firebase/auth"
import 'firebase/firestore'
import 'firebase/storage'
firebase.initializeApp({
  apiKey: "AIzaSyAzWI6F7SQi0jOkHGlvODKRI9KsQDRhkWc",
    authDomain: "reels-auth-3b4a2.firebaseapp.com",
    projectId: "reels-auth-3b4a2",
    storageBucket: "reels-auth-3b4a2.appspot.com",
    messagingSenderId: "264814826051",
    appId: "1:264814826051:web:13d9c028d51687405b7af6"
})
export const auth = firebase.auth();
const firestore = firebase.firestore();
export const database = {
  users: firestore.collection('users'),
  posts: firestore.collection('posts'),
  comments: firestore.collection('comments'),
  getCurrentTimeStamp: firebase.firestore.FieldValue.serverTimestamp,
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  }
}
// 1. get firebase storage 
export const storage = firebase.storage();
export default firebase;



