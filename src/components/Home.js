import React from "react";
import { Button } from "@material-ui/core";
import Fire from "../Fire";

function Home(props) {
  const logout = () => {
    Fire.auth().signOut();
  };
  return (
    <div className="main__home">
      <h1>Welcome {props.user.email}</h1>
      <Button onClick={logout} variant="contained" color="secondary">
        Logout
      </Button>
    </div>
  );
}

export default Home;
