const express = require('express')
const app = express()
const { Pool, Client } = require("pg");

const pool = new Pool({
  user: "yomathi@yomathi",
  host: "yomathi.postgres.database.azure.com",
  database: "postgres",
  password: "youcef28?",
  port: "5432",
});

app.use((req, res, next) => {
  console.log("middleware");
  res.set("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/total", (req, res)=> {
    pool.query("SELECT SUM(Cost) as total FROM test", (err, res) => {
      console.log(err, res);
      pool.end();
    });
    
})

app.get("/Localisation/:search", (req, res) => {
    pool.query(
      `SELECT SUM(Cost) as total FROM test WHERE SubscriptionName LIKE "%${search}%" `,
      (err, res) => {
        console.log(err, res);
        pool.end();
      }
    );
})
app.get("/Ressource/:search", (req, res) => {
    pool.query(
        `SELECT SUM(Cost) as total FROM test WHERE ServiceName LIKE "%${search}%" `,
        (err, res) => {
        console.log(err, res);
        pool.end();
        }
    );
})

app.listen(4000)