import { initializeApp } from 'firebase/app';
import { getAuth,GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
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
