const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(express.json());
app.use(cors());

//create connection to mysql database
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Hidayati!@#97",
    database: "university",
});

//route to get all student
app.get("/", (req, res) => {
    const sql = "SELECT * FROM student";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

// Route to create a new student
app.post("/create", (req, res) => {
    const sql = "INSERT INTO student (name,email,marks,grade,city) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.marks,
        req.body.grade,
        req.body.city
    ];
    db.query(sql, [values], (err, data) => {
        if (err) {
            res.json(err);
        } else {
            res.json(data);
        }
    });
})

//put request
app.put("/update/:id", (req, res) => {
    const sql = "UPDATE student SET name = ?, email = ?, marks = ?, grade = ?, city = ? WHERE id = ?";
    const values = [
        req.body.name,
        req.body.email,
        req.body.marks,
        req.body.grade,
        req.body.city
    ];
    const id = req.params.id
    db.query(sql, [...values, id], (err, data) => { // Execute the query
        if (err) {
            res.json(err); // Send error response if query fails
        } else {
            res.json(data); // Send success response with data
        }
    })

})

//delete request
app.delete("/student/:id", (req, res) => {
    const sql = "DELETE FROM student WHERE id = ?";
    const id = req.params.id
    db.query(sql, [id], (err, data) => { // Execute the query
        if (err) {
            res.json(err); // Send error response if query fails
        } else {
            res.json(data); // Send success response with data
        }
    })
})

app.listen(5000, () => {
    console.log("Server started on port 5000");
})