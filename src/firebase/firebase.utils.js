import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyANO9de_d5Pu0RwhGjQRn7RvzrKNzWw-Go",
    authDomain: "crwn-db-d5483.firebaseapp.com",
    databaseURL: "https://crwn-db-d5483.firebaseio.com",
    projectId: "crwn-db-d5483",
    storageBucket: "crwn-db-d5483.appspot.com",
    messagingSenderId: "654239318242",
    appId: "1:654239318242:web:b967875226c910de241ebb",
    measurementId: "G-QNWNFVC27L"
}

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth)  return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();


        try {
            await userRef.set({ 
                displayName,
                email, createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error creating user', error.message);
            
        }
    }

    return userRef
    
    
     
}





export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;





