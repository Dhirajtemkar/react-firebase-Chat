import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button
} from "@material-ui/core";
import Fire from "../Fire";
import SignUp from "../components/SignUp";
import "./Login.css";

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
        <Button variant="contained">Sign-In with Google</Button>
      </form>
    </div>
  );
}

export default Login;
