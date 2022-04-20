import { Router } from "express";
import { getLeaderboard } from "../controllers/leaderboard.js";
import { getQuestions } from "../controllers/questions.js";
import { updateScore } from "../controllers/scores.js";

var router = Router();

router.route("/get-questions").get(getQuestions);
router.route("/update").post(updateScore);
router.route("/get-leaderboard").get(getLeaderboard);

export default router;
