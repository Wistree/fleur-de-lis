import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCsEmfiNgXEnV7wchm_ebkeQdulOUZ2ai4",
    authDomain: "react-firebase-a38ca.firebaseapp.com",
    databaseURL: "https://react-firebase-a38ca.firebaseio.com",
    projectId: "react-firebase-a38ca",
    storageBucket: "react-firebase-a38ca.appspot.com",
    messagingSenderId: "1092627094107",
    appId: "1:1092627094107:web:719ab7811dc6d86a543d7e",
    measurementId: "G-1BS7DTPB1P"
};

// only want to save to database if we get back a userAuth object, which means that they are signin, not signout (null)
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    // if it does exist => then query inside firestore for the doc to see if it already exist
    // first, we need to get the queryReference of users collection
    // console.log(userAuth);
    // console.log(snapShot);

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        } catch (error) {
            console.log(`error creating user: ${error.message}`);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

// config project to use google pop-up