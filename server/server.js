import express from 'express';
import mysql from 'mysql';

const app = express()

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
    multipleStatements: true
})

app.get('/', (req, res) => {
    res.send('Hello! This is the backend.')
})

app.listen(3000, () => {
    console.log('Server is runing on http://localhost:3000')
})