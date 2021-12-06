const express = require('express')
const app = express()
const cors= require('cors');
const client= require('./Models/dbs');
const { Client } = require('pg');
const router = require('./Routes/book');
const port = 5000;

//middleware
app.use(cors());
app.use(express.json())
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})