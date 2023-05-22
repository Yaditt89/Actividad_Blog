const mysql = require("mysql2");

const pool = mysql.createPool({
  host: process.env.DATABASE_HOST,
  user: process.env.USER_DB,
  password: process.env.PASSWORD,
  port: process.env.PORT,
  database: process.env.DATABASE,
});

global.db = pool.promise();
