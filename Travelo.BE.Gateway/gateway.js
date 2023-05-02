import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutesGateway from "./routes/user.routes.js";

dotenv.config();

const app = express();

const allowedOrigins = ["http://localhost:3000"];

const corsOptions = {
  origin: allowedOrigins,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("This is api gateway");
});

userRoutesGateway(app);

const port = process.env.PORT || 6000;

app.listen(port, () => {
  console.log(`Gateway is running on port ${port}`);
});
