const Pool  = require('pg').Pool
const pool = new Pool ({
    user: 'postgres',
    password: 'postgres',
    database: 'bugs',
    port: 5432
})

// Create a method to send back all bug reports in the DB.
const getAll = (req, res) => {
    pool.query('SELECT * FROM bugs', (error, results) => {
        if (error) { throw error}
        res.status(200).json(results.rows);
    })
}

// Create a method to add a new bug report to the DB.
// createBug() {
//     return pool.query('INSERT INTO bugs () VALUES ()');
// }

module.exports = {
    pool,
    getAll,
}