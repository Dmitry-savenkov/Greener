import * as firebase from 'firebase';
import Firebase from '../../env';

const firebaseConfig = {
  apiKey: Firebase.API_KEY,
  authDomain: Firebase.AUTH_DOMAIN,
  projectId: Firebase.PROJECT_ID,
  storageBucket: Firebase.STORAGE_BUCKET,
  messagingSenderId: Firebase.MESSAGING_SENDER_ID,
  appId: Firebase.APP_ID,
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const auth = firebase.auth();

export { auth };
