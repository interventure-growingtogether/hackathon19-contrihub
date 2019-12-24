import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyDOPXn5LyFFaS2x_bdlTJ023oMysR2MtfA',
	authDomain: 'hackathon19-contrihub.firebaseapp.com',
	databaseURL: 'https://hackathon19-contrihub.firebaseio.com',
	projectId: 'hackathon19-contrihub',
	storageBucket: 'hackathon19-contrihub.appspot.com',
	messagingSenderId: '862007236157',
	appId: '1:862007236157:web:d1c96f49ffc7572036fc54',
	measurementId: 'G-HPBY1MCNGG',
};

firebase.initializeApp(firebaseConfig);

const databaseRef = firebase.database().ref();
export const hackathon19Ref = databaseRef.child('hackathon19');
export const authRef = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const storage = firebase.storage().ref();
