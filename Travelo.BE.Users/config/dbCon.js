import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const sql = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.database,
});

sql.connect();

export default sql;
