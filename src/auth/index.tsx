import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase-config';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const handleCreateAccount = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            console.log('Acc created');
        })
        .catch((error) => {
            console.log(error);
        });
};

export const handleSignInAccount = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            console.log('Acc created');
        })
        .catch((error) => {
            console.log(error);
        });
};
