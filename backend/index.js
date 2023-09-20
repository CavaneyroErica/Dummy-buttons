import express from "express"
import mysql from "mysql"

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test",
})

app.get("/", (req, res) => {
    res.json("hello, janie")
})

app.get("/employees", (req, res) => {
    const q = "SELECT * FROM test.employees;"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.post("/employees", (req, res) => {
    const q = "INSERT INTO employees (`empID`, `empName`, `empBday`, `sex`) VALUES (?)"
    const values = ["bb", "kk", "2010-02-09", "F"];

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err)
        return res.json(data)

    })
})
app.listen(8800, () => {
    console.log("Connected to backend!!")
})