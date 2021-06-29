import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { BrowserRouter, Route, Switch, useHistory, useLocation } from 'react-router-dom';
import {UserContext} from '../../App'
import { firebaseConfig } from './firebase.config';
function Login() {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const history = useHistory();
  const location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
    const googleSignIn = () => {
      
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    
    const {displayName,email}=result.user;
    const signedInUser = {name: displayName,email}
    setLoggedInUser(signedInUser)
    history.replace(from);
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
    }
    return (
        <div>
            <button onClick={googleSignIn}>Google SignIn</button>
        </div>
    )
}
export default Login