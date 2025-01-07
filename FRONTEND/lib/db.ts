import mysql, { Connection } from "mysql2/promise";

export async function withDatabase<T>(
  callback: (db: Connection) => Promise<T>
): Promise<T> {
  let db: Connection | null = null;

  try {
    db = await mysql.createConnection({
      host: process.env.DB_HOST as string,
      user: process.env.DB_USER as string,
      password: process.env.DB_PASSWORD as string,
      database: process.env.DB_NAME as string,
    });

    // Initialize the database if needed
    await initializeDatabase(db);

    // Execute the callback function with the connection
    return await callback(db);
  } catch (error) {
    console.error("Database error:", error);
    throw error;
  } finally {
    // Ensure the connection is always closed
    if (db) {
      await db.end();
    }
  }
}

async function initializeDatabase(db: Connection) {
  // Create 'mappings' table if it doesn't exist
  await db.execute(`
    CREATE TABLE IF NOT EXISTS mappings (
      id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
      word VARCHAR(255) NOT NULL,
      videoUrl VARCHAR(255) NOT NULL,      
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
      updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL ON UPDATE CURRENT_TIMESTAMP,
      deletedAt TIMESTAMP NULL
    )
`);
}
