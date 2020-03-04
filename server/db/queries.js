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
    const { description, reporter, createdon, assignedto, threatlevel } = req.body;
    const values = [description, reporter, createdon, assignedto, threatlevel];
    console.log(values);
    pool.query('INSERT INTO bugs (description, reporter, createdon, assignedto, threatlevel) VALUES ($1, $2, $3, $4, $5)', values, (error, results) => {
        if (error) {throw error}
        res.status(201).send(`${description} bug created`)
    });
}

module.exports = {
    pool,
    getAll,
    createBug
}