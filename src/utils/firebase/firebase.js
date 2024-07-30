import { initializeApp } from 'firebase/app';
import { getAuth,GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';


// connection to the firebase online environment
const firebaseConfig = {
    apiKey: "AIzaSyDCv7tInpbyprKPlNeJvfmJaANaBRm1ucw",
    authDomain: "podcastapp-d5b6b.firebaseapp.com",
    projectId: "podcastapp-d5b6b",
    storageBucket: "podcastapp-d5b6b.appspot.com",
    messagingSenderId: "79881323581",
    appId: "1:79881323581:web:0a86281bc8d17c781e5654"
}

//initialize firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:"select_account"
});

export const auth = getAuth();

// function to sign in with google popup
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

const db = getFirestore(); // creates the firestore database

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    

    if(!userSnapshot.exists()){
        const {displayName, email } = userAuth;
        const createdAt = new Date();
        
        try{
            await setDoc(userDocRef, {displayName, email, createdAt})
        }catch(error){
            console.log('error creating user', error.message)
        }
        
    }
    return userDocRef;
}

export const onAuthStateChangedListener = (callback) => {
    onAuthStateChanged(auth, callback);
}

export const signUserOut = async () => {
    signOut(auth);
};


export const signUserInWithEmailAndPassword = async (email, password) => {
    if(!email || !password ) return ;

    return await signInWithEmailAndPassword(auth, email, password);
}
