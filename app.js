import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes/routes.js";

var app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", router);

app.listen(process.env.PORT || "8000", () => {
  console.log(`Server running at ${process.env.PORT || "8000"}`);
});
