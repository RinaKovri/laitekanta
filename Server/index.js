const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: '',
    database: 'DeviceData',
    port: 3306 // MySQL server port
});

db.connect((err) => {
    if (err) {
      console.log(err);
    }
    console.log("Connected to MySQL Server!");
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/get", (req, res)=> {
    const sqlSelect= "SELECT * FROM device";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.post("/api/insert", (req, res) => {

    const email = req.body.email;
    const serialNumber = req.body.serialNumber;
    const issuingDate = req.body.issuingDate;
    const returningDate = req.body.returningDate;

    const sqlInsert = "INSERT INTO device (email, serialNumber, issuingDate, returningDate) VALUES (?,?,?,?)";
    db.query(sqlInsert, [email, serialNumber, issuingDate, returningDate], (err, result) => {
        console.log(result);
    })
})

app.delete('/api/delete/:email', (req, res) => {
    const name = req.params.email;
    const sqlDelete = "DELETE FROM device WHERE email = ?";
   
    db.query(sqlDelete, name, (err, result) => {
        if(err) console.log(err)
    })
})

// app.put('/api/update', (req, res) => {
//     const name = req.body.email;
//     const serial = req.body.serialNumber;
//     const sqlUpdate = "UPDATE device SET serialNumber = ? WHERE email = ?";
   
//     db.query(sqlUpdate, [serial, name], (err, result) => {
//         if(err) console.log(err)
//     })
// })
app.put('/api/update', (req, res) => {
    const name = req.body.email;
    const serial = req.body.serialNumber;
    const sqlUpdate = "UPDATE device SET serialNumber = ? WHERE email = ?";
  
    db.query(sqlUpdate, [serial, name], (err, result) => {
      if (err) {
        console.log(err);}
       
    });
  });
  

app.listen(3001, () => {
    console.log("express is running on port 3001");
});