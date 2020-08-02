import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAHzSPM_5G18UB10qguC9U1GFqS7qJLZlI",
  authDomain: "react-lets-chat.firebaseapp.com",
  databaseURL: "https://react-lets-chat.firebaseio.com",
  projectId: "react-lets-chat",
  storageBucket: "react-lets-chat.appspot.com",
  messagingSenderId: "14299592730",
  appId: "1:14299592730:web:a5e6dd4fed6818d006f9a3",
  measurementId: "G-T8ZF4SG9BQ"
};
// Initialize Firebase
// export const auth = firebase.auth();

export default (!firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app());

export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  promt: "select_account"
});
