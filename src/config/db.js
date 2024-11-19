/* eslint-disable no-undef */
require('dotenv').config();
const { Pool } = require('pg');
// const dummyUsers = require('../helper/dummyjson'); 

const pool = new Pool({
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
});

// const importData = async () => {
//     try {

//         const users = dummyUsers.dummyjson[0]?.users;
        
//         if (!users) {
//             throw new Error("No users found in dummy data.");
//         }

//         const query = `
//             INSERT INTO users (
//                 firstName, lastName, maidenName, age, gender, email, username, password, birthDate, image
//             ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
//         `;

//         await Promise.all(
//             users.map(async (user) => {
//                 await pool.query(query, [
//                     user.firstName,
//                     user.lastName,
//                     user.maidenName || null,
//                     user.age,
//                     user.gender,
//                     user.email,
//                     user.username,
//                     user.password,
//                     new Date(user.birthDate).toISOString().split('T')[0], // Pastikan format tanggal valid
//                     user.image,
//                 ]);
//             })
//         );

//         console.log('Data imported successfully');
//     } catch (error) {
//         console.error('Error importing data:', error.message, error.stack);
//     }
// };

// const fetchData = async () => {
//     try {
//         const result = await pool.query('SELECT * FROM users');
//         console.log('Fetched Data:', result.rows);
//     } catch (error) {
//         console.error('Error fetching data:', error.message, error.stack);
//     }
// };

// const main = async () => {
//     try {
//         await importData();
//         await fetchData();
//     } finally {
//         await pool.end(); 
//     }
// };

// main();

module.exports = pool;
