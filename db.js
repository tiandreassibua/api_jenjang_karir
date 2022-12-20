import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config()

// create connection to the database
export const db = mysql.createConnection({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE
});

export default db;
