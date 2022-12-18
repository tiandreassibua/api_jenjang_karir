import mysql from 'mysql';
import dotenv from 'dotenv';
dotenv.config()

// create connection to the database
export const db = mysql.createConnection(process.env.MYSQLURL);

export default db
