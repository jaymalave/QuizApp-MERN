import React, { useEffect, useState } from "react";
import { getLeaderboard } from "../api/getLeaderboard";

export const Leaderboard = () => {
  const [top1, setTop1] = useState("");
  const [top2, setTop2] = useState("");
  const [top3, setTop3] = useState("");
  const [score1, setScore1] = useState(null);
  const [score2, setScore2] = useState(null);
  const [score3, setScore3] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    handleTopScorers();
  });

  const handleTopScorers = async () => {
    const response = await getLeaderboard();

    setLoading(true);
    console.log(response.topScorers[0].name, "before setTop");
    setTop1(response.topScorers[0].name);
    setTop2(response.topScorers[1].name);
    setTop3(response.topScorers[2].name);
    setScore1(response.topScorers[0].score);
    setScore2(response.topScorers[1].score);
    setScore3(response.topScorers[2].score);
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <h1 className="onboard-text">Loading...</h1>
      ) : (
        <div className="leaderboard">
          <h1 className="lb-head">Leaderboard</h1>
          <div className="top-scorer">
            <div className="scorer-text">🥇</div>
            <div className="scorer-text">{top1}</div>
            <div className="scorer-text">{score1}</div>
          </div>
          <div className="top-scorer">
            <div className="scorer-text">🥈</div>
            <div className="scorer-text">{top2}</div>
            <div className="scorer-text">{score2}</div>
          </div>
          <div className="top-scorer">
            <div className="scorer-text">🥉</div>
            <div className="scorer-text">{top3}</div>
            <div className="scorer-text">{score3}</div>
          </div>
        </div>
      )}
    </>
  );
};
