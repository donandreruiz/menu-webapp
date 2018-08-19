import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD0gt2_MwJ_XrOmfOVRj9NpFzGI4oUr8Vg",
    authDomain: "c-webapp.firebaseapp.com",
    databaseURL: "https://c-webapp.firebaseio.com",
    projectId: "c-webapp",
    storageBucket: "",
    messagingSenderId: "257148852216"
  };

  const fire = firebase.initializeApp(config);
  export default fire;