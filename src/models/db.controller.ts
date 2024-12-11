import pool from "../db/conn.db";

export class Database {
  constructor() {
    pool.getConnection((err, connection) => {
      if (err) {
        console.error("Database connection failed:", err.message);
      } else {
        console.log("Database connection successful!");
        connection.release(); // Always release the connection after testing
      }
    });
  }

  static async query(sql: string, params?: any[]) {
    return new Promise((resolve, reject) => {
      pool.query(sql, [params], (err, result) => {
        if (err) {
          return reject(err);
        }
        resolve(result);
      });
    });
  }
}
