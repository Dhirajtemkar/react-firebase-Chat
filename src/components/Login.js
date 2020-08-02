import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button
} from "@material-ui/core";
import Fire from "../Fire";
import { provider } from "../Fire";
import SignUp from "../components/SignUp";
import "./Login.css";

import GoogleLogo from "../resources/googleLogo.svg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUp, setSignUp] = useState(0);

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };
  const handlePassChange = event => {
    setPassword(event.target.value);
  };

  const handleForm = event => {
    event.preventDefault();
    // log the user

    Fire.auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {})
      .catch(e => {
        console.log(e);
      });
  };

  const handleSignUP = event => {
    event.preventDefault();
    setSignUp(1);
    // console.log(this.signUp);
  };

  const loginWithGoogle = event => {
    Fire.auth()
      .signInWithPopup(provider)
      .then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // var token = result.credential.accessToken;
        // // The signed-in user info.
        // var user = result.user;
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var errorEmail = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(errorCode, errorMessage, errorEmail, credential);
      });
  };

  return (
    <div>
      <form className="form__login" onSubmit={handleForm}>
        <h2>Login</h2>
        <div className="bottomLine" />
        <FormControl>
          <InputLabel>Email address</InputLabel>
          <Input name="email" onChange={handleEmailChange} />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel>Password</InputLabel>
          <Input type="password" name="password" onChange={handlePassChange} />
          <FormHelperText>Must contain 6 to 14 characters</FormHelperText>
        </FormControl>
        {signUp ? (
          <SignUp email={email} Pass={password} />
        ) : (
          <div className="login__btnLis">
            <Button onClick={handleForm} variant="contained" color="primary">
              Login
            </Button>
            <Button
              onClick={handleSignUP}
              variant="contained"
              color="secondary"
            >
              New User?
            </Button>
          </div>
        )}

        <FormHelperText className="login__or">~Or You Can~</FormHelperText>
        <Button
          onClick={loginWithGoogle}
          className="login__google"
          variant="contained"
        >
          <img src={GoogleLogo} alt="google-logo" />
          Login with Google
        </Button>
      </form>
    </div>
  );
}

export default Login;
