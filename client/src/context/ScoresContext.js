import React, { createContext, useState } from "react";

export const ScoresContext = createContext();

export const ScoresProvider = () => {
  const [scores, setScores] = useState([{}]);
};
