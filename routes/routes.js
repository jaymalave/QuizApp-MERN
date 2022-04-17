import { Router } from "express";
import { getQuestions } from "../controllers/questions.js";

var router = Router();

router.route('/get-questions').get(getQuestions);

export default router;