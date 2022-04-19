import React from "react";
import firebase from "firebase/compat/app";
import { Button } from "react-bootstrap";

const SignOut = () => {
  const auth = firebase.auth();

  return (
    auth.currentUser && (
      <div className="d-flex justify-center">
        {/* <button onClick={() => auth.signOut()} className="">
          Sign Out
        </button> */}
        <Button
          variant="danger"
          className="sign-out"
          onClick={() => auth.signOut()}
        >
          Sign Out
        </Button>
      </div>
    )
  );
};

export default SignOut;
