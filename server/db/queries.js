const Pool  = require('pg').Pool
const pool = new Pool ({
    user: 'postgres',
    password: 'postgres',
    database: 'bugs',
    port: 5432
})

const getAll = (req, res) => {
    pool.query('SELECT * FROM bugs', (error, results) => {
        if (error) { throw error}
        res.status(200).json(results.rows);
    })
}

const createBug = (req, res) => {
    const { bugDescription, reportedBy, createdDate, assignedTo, threatLevel } = req.body;
    const values = [bugDescription, reportedBy, createdDate, assignedTo, threatLevel];
    pool.query('INSERT INTO bugs ("bugDescription", "reportedBy", "createdDate", "assignedTo", "threatLevel") VALUES ($1, $2, $3, $4, $5)', values, (error, results) => {
        if (error) {throw error}
        res.status(201).send(`${bugDescription} bug created`)
    });
}

module.exports = {
    pool,
    getAll,
    createBug
}