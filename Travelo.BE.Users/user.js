import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./models/index.js";
import userRoutes from "./routes/routes.js";

dotenv.config();

const app = express();

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:4545",
  "http://localhost:3001",
  "http://localhost:5000",
];

const corsOptions = {
  origin: allowedOrigins,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync dbzss: " + err.message);
    return err;
  });

userRoutes(app);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`User service listening on Port ${port}`);
});
