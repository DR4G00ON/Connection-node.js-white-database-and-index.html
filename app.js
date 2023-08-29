const express = require('express')
const mysql = require('mysql')

const app = express()
app.use(express.static('html'))

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_conn"
})

conn.connect((err) => {
    if(err){
        console.log('Database failed');
    }
    else{
        console.log("Database connect");
    }
})

app.get('/', (req, res) => {
    res.sendFile(__dirname +'/html/index.html')
})

app.listen(8000, () => {
    console.log("Server open in port 8000 : http://localhost:8000");
})