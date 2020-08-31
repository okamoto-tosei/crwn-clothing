import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAi00q_DHTXlWg871uVyRv3W600jPUJR5Y',
  authDomain: 'crwn-db-738da.firebaseapp.com',
  databaseURL: 'https://crwn-db-738da.firebaseio.com',
  projectId: 'crwn-db-738da',
  storageBucket: 'crwn-db-738da.appspot.com',
  messagingSenderId: '75139304191',
  appId: '1:75139304191:web:fdd9e736cf864193cb1aca',
  measurementId: 'G-M115BYXH00',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
