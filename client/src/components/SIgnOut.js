import React from "react";
import firebase from "firebase/compat/app";

const SignOut = () => {
  const auth = firebase.auth();

  return (
    auth.currentUser && (
      <div className="flex justify-center">
        <button onClick={() => auth.signOut()} className="">
          Sign Out
        </button>
      </div>
    )
  );
};

export default SignOut;
