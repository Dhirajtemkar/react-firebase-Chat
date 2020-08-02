import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button
} from "@material-ui/core";
import Fire from "../Fire";

function SignUp(props) {
  const { email, Pass } = props;
  const [conPass, setConPass] = useState("");
  const [passError, setPassError] = useState("");

  const handleChangePassChange = event => {
    setConPass(event.target.value);
    // console.log(conPass);
  };

  const SignUpuser = event => {
    event.preventDefault();

    if (props.Pass === conPass) {
      setPassError("Good");
      Fire.auth()
        .createUserWithEmailAndPassword(email, Pass)
        .then(user => {})
        .catch(e => {
          console.log(e);
        });
    } else {
      setPassError("Passwords don't match!");
    }
  };
  return (
    <div className="main__home">
      <FormControl>
        <InputLabel>Confirm Password</InputLabel>
        <Input
          type="password"
          name="conPass"
          value={this.conPass}
          onChange={handleChangePassChange}
        />
        <FormHelperText>Type in the same password as above</FormHelperText>
      </FormControl>
      {passError === "Passwords don't match!" ? (
        <p>{passError}</p>
      ) : (
        <p>{passError}</p>
      )}

      <Button onClick={SignUpuser} variant="contained" color="secondary">
        Sign-Up
      </Button>
    </div>
  );
}

export default SignUp;
