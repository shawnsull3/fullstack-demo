const Pool  = require('pg').Pool
const pool = new Pool ({
    user: 'postgres',
    password: 'postgres',
    databse: 'bugsDB',
    port: 5432
})



module.exports = {
    pool
}