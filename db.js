import mysql from 'mysql';
import dotenv from 'dotenv';
dotenv.config()

const MYSQL_URL = process.env.MYSQL_URL;

// create connection to the database
export const db = mysql.createConnection(MYSQL_URL);

export default db;
