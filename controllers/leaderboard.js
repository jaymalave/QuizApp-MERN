import User from "../models/User.js";

export const getLeaderboard = async (req, res, json) => {
  try {
    const topScorers = await User.find().sort({ score: -1 }).limit(3);
    res.json({ topScorers: topScorers });
  } catch (error) {
    res.json({ message: error });
  }

};
