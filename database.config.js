const mysql = require('mysql2')

// Create a pool for connections
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'clothing-db',
    password: 'B@nanowy212'
})

// export promisified pool so we can work with promises instead
// of callbacks
module.exports = pool.promise()