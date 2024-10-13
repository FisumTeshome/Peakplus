//import * as detenv from "dotenv";
const mysql =require("mysql");
const cors = require("cors");
//dotenv.config();
const express= require("express");
const app = express();
app.use(express.json());

app.use(cors());
const db = mysql.createConnection({
    host: "localhost",
    user:'root',
    password:'',
    database:'fitness_app'
})
app.use(express.urlencoded({ extended: true}));

  app.post("/AddWorkout", (req, res) => {
    const { catagory,workout_name,sets,reps,weight,duration } = req.body;
    console.log("here is in server sides ");
    console.log(catagory,workout_name,sets,reps,weight,duration);
    const sql =
      "INSERT INTO Workout (catagory,workout_name,sets,reps,weight,duration) VALUES (?, ?, ?,?,?,?)";
    db.query(sql, [catagory,workout_name,sets,reps,weight,duration], (error, results) => {
      if (error) {
        return res.json(error);
      }
      res.json({ message: "Feedback submitted successfully", results });
    });
    console.log("here is after sending a data here in server ");
  });

  app.post("/signup", (req, res) => {
    const { name,email,password } = req.body;
    console.log("here is in server sides ");
    console.log(name,email,password);
    const sql =
      "INSERT INTO Users (name,email,password) VALUES (?, ?, ?)";
    db.query(sql, [name,email,password], (error, results) => {
      if (error) {
        return res.json(error);
      }
      res.json({ message: "Feedback submitted successfully", results });
    });})

    app.get("/users", (req, res) => {
        const { name,email,password } = req.body;
        console.log("here is in server sides ");
        console.log(name,email,password);
        const sql =
          "SELECT * FROM Users WHERE email=?";
        db.query(sql, [email], (error, results) => {
          if (error) {
            return res.json(error);
          }
          res.json({ message: "Feedback submitted successfully", results });
        });})
        app.post("/signin", (req, res) => {
            const { email, password } = req.body;
            const sql = "SELECT * FROM Users WHERE email = ? AND password = ?";
            db.query(sql, [email, password], (error, results) => {
              if (error) {
                return res.status(500).json({ error });
              }
              if (results.length > 0) {
                res.json({ success: true, message: "Sign-in successful" });
              } else {
                res.json({ success: false, message: "Incorrect email or password" });
              }
            });});

app.listen(3001,()=>{
console.log("something")
});
