import { auth } from './firebase-config';

export const handleSignUp = (email: string, password: string) => {
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredentials: { user: any }) => {
            const user = userCredentials.user;
            console.log('Logged in with:', user.email);
        })
        .catch((error: { message: string }) => {
            alert(error.message);
        });
};

export const handleLogin = (email: any, password: any) => {
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredentials: { user: any }) => {
            const user = userCredentials.user;
            console.log('Logged in with:', user.email);
        })
        .catch((error: { message: string }) => {
            alert(error.message);
        });
};
