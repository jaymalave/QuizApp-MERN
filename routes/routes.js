import { Router } from "express";
import { getQuestions } from "../controllers/questions.js";
import { updateScore } from "../controllers/scores.js";

var router = Router();

router.route("/get-questions").get(getQuestions);
router.route("/update").post(updateScore);

export default router;
