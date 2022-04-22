import React, { useEffect, useState } from "react";
import { QuizScreen } from "./screens/QuizScreen";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { onAuthStateChanged } from "firebase/compat/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./components/SignIn.js";
import SignOut from "./components/SIgnOut";
import { Leaderboard } from "./screens/Leaderboard";
import { Divider } from "./components/Divider";
import { Button } from "react-bootstrap";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FirebaseAPIKey,
  authDomain: process.env.REACT_APP_FirebaseAuthDomain,
  projectId: process.env.REACT_APP_FirebaseProjectId,
  storageBucket: process.env.REACT_APP_FirebaseStorageBucket,
  messagingSenderId: process.env.REACT_APP_FirebaseMessagingSenderId,
  appId: process.env.REACT_APP_FirebaseAppId,
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const auth = firebase.auth();

export default function App() {
  const [user] = useAuthState(auth);
  const [refresh, setRefresh] = useState(false);
  var name;
  // console.log(user);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        user.getIdToken().then((idToken) => {
          console.log(idToken);
          localStorage.setItem("Token", idToken);
        });
        console.info("User detected.");
      } else {
        console.info("No user detected");
      }
    });
    console.log("refresh test");
  }, [user, refresh]);

  if (user) {
    console.log(user.displayName.split(" ")[0]);
    name = user.displayName.split(" ")[0];
  }

  const handleRefreshLeaderboard = () => {
    setRefresh(true);
  };

  return (
    <div className="">
      {user ? (
        <>
          <div className="d-flex justify-content-around align-items-center">
            <QuizScreen name={name} />
            <Divider />
            <div>
              <Leaderboard />
              <Button variant="dark" onClick={() => handleRefreshLeaderboard()}>
                Refresh Leaderboard
              </Button>
            </div>
          </div>
        </>
      ) : (
        <SignIn />
      )}
    </div>
  );
}
