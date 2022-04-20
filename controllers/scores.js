import User from "../models/User.js";

export const updateScore = async (req, res, next) => {
  try {
    const score = await User.updateOne(
      { uid: req.userId },
      { $set: { score: req.body.score } }
    );

    res.json({ message: req.body.score });
  } catch (error) {
    res.json({ message: error });
  }
};
