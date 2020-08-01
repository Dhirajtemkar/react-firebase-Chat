import React, { useState, setState } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button
} from "@material-ui/core";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleForm = event => {
    event.preventDefault();
    console.log(email);
    console.log(password);
  };
  const handleEmailChange = event => {
    setEmail(event.target.value);
  };
  const handlePassChange = event => {
    setPassword(event.target.value);
  };
  return (
    <div>
      <form>
        <FormControl>
          <InputLabel>Email address</InputLabel>
          <Input name="email" onChange={handleEmailChange} />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel>Password</InputLabel>
          <Input name="password" onChange={handlePassChange} />
          <FormHelperText>Must contain 6 to 14 characters</FormHelperText>
        </FormControl>
        <Button onClick={handleForm} variant="contained" color="primary">
          Default
        </Button>
      </form>
    </div>
  );
}

export default Login;
