import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const firebaseConfig = {

  apiKey: "AIzaSyBS5MiglusHDO3l3WhHOnwOpGzOswABpu8",

  authDomain: "projetoreact-3fe60.firebaseapp.com",

  projectId: "projetoreact-3fe60",

  storageBucket: "projetoreact-3fe60.appspot.com",

  messagingSenderId: "772142457922",

  appId: "1:772142457922:web:ef93c5c327912102bc79db"

  
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;
  