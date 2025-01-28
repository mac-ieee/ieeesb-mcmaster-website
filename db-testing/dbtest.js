const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres', // Default user
  host: 'postgres', // Docker container is exposed on localhost
  database: 'postgres', // Default database name
  password: 'mysecretpassword', // Password set in POSTGRES_PASSWORD
  port: 5432, // Default PostgreSQL port
});

// Test the connection
(async () => {
  try {
    await pool.connect();
    console.log("this worked fine!");
    // const result = await pool.query('SELECT * FROM users;');
    // console.log(result.rows);
    // console.log('new info');
  } catch (err) {
    console.error('Error connecting to PostgreSQL: also ', err.message);
  }
})();

// // Function to insert an item into the users table
// async function addUser(username, email, password) {
//   const query = `
//     INSERT INTO users (username, email, password)
//     VALUES ('minhaz0', '0@gmail.com', 'coolness')
//     RETURNING *;
//   `;

//   const values = [username, email, password];

//   try {
//     // Execute the query using the pool
//     const result = await pool.query(query);
//     console.log('User added:', result.rows[0]);
//     return result.rows[0]; // Return the inserted row
//   } catch (err) {
//     console.error('Error adding user:', err);
//     throw err;
//   }
// }

// // Example usage
// addUser('john_doe', 'john.doe@example.com', 'securepassword123')
//   .then((user) => {
//     console.log('Inserted user:', user);
//   })
//   .catch((err) => {
//     console.error('Error:', err);
//   });
