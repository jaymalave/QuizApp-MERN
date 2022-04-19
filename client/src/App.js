import React from "react";
import { QuizScreen } from "./screens/QuizScreen";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { onAuthStateChanged } from "firebase/compat/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./components/SignIn.js";

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
  var name;
  // console.log(user);
  if (user) {
    console.log(user.displayName.split(" ")[0]);
    name = user.displayName.split(" ")[0];
  }

  return (
    <div>
      {user ? (
        <>
          <QuizScreen name={name} />
        </>
      ) : (
        <SignIn />
      )}
    </div>
  );
}
