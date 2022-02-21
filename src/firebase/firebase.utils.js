import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyCiEry_DJZF7_GNn1WsuvSQeoryTZ6bAT4",
    authDomain: "crown-clothing-ce453.firebaseapp.com",
    projectId: "crown-clothing-ce453",
    storageBucket: "crown-clothing-ce453.appspot.com",
    messagingSenderId: "81699929130",
    appId: "1:81699929130:web:7a4bf97ce979a167805753",
    measurementId: "G-WMGNECCJLC"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;