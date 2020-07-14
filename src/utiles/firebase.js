import firebase from 'firebaseapp';

const firebaseConfig = {
    apiKey: 'AIzaSyDdbQy4XZelqrl0NRPFwPK59nMzHI-ed6s',
    authDomain: 'chat-ba206.firebaseapp.com',
    databaseURL: 'https://chat-ba206.firebaseio.com',
    projectId: 'chat-ba206',
    storageBucket: 'chat-ba206.appspot.com',
    messagingSenderId: '1059162544461',
    appId: '1:1059162544461:web:8231e57fc56a56a7427f04',
};

export default firebase.initializeApp(firebaseConfig);