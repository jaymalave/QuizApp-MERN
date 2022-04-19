import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes/routes.js";
import connectDB from "./config/db.js";
import tokenToID from "./middleware/authenticateToken.js";

var app = express();

connectDB();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(tokenToID);

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", router);

app.listen(process.env.PORT || "8000", () => {
  console.log(`Server running at ${process.env.PORT || "8000"}`);
});
