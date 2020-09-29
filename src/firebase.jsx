import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyD-2M7HDtVYCNVR6nbIYURiqxkapWUe6Ns',
  authDomain: 'whatsapp-clone-fcc28.firebaseapp.com',
  databaseURL: 'https://whatsapp-clone-fcc28.firebaseio.com',
  projectId: 'whatsapp-clone-fcc28',
  storageBucket: 'whatsapp-clone-fcc28.appspot.com',
  messagingSenderId: '198194177599',
  appId: '1:198194177599:web:b913925e2614397a277a8a',
  measurementId: 'G-7V11J8QMDY',
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
