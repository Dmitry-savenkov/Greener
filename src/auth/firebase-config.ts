import * as firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAc2Jo6fsf6yQN3barCyLRaSrnMByQegpA',
    authDomain: 'greener-7a3a1.firebaseapp.com',
    projectId: 'greener-7a3a1',
    storageBucket: 'greener-7a3a1.appspot.com',
    messagingSenderId: '649597953455',
    appId: '1:649597953455:web:347f07dc88dab6cc9a7b5a'
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}
const auth = firebase.auth();

export { auth };
