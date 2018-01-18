import firebase from 'firebase'
var config = {
  apiKey: "AIzaSyAFjSvOc7SldrktC0pLzkR0NMhopd5mgHs",
  authDomain: "expresso-lorenzetti.firebaseapp.com",
  databaseURL: "https://expresso-lorenzetti.firebaseio.com",
  projectId: "expresso-lorenzetti",
  storageBucket: "expresso-lorenzetti.appspot.com",
  messagingSenderId: "160868546463"
};
var fire = firebase.initializeApp(config);

export const db = fire.database(); //the real-time database
export const auth = fire.auth(); //the firebase auth namespace

export const storageKey = 'USER_STORAGE';

export const isAuthenticated = () => {

  return !!auth.currentUser || !!localStorage.getItem(storageKey);
}

export default fire;
