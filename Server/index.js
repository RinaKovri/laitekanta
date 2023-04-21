const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const axios = require('axios')
const app = express();

app.get('/', (req, res) => {
res.send('hello world')
})

app.listen(3001, () => {
    console.log("express is running on port 3001");
});

