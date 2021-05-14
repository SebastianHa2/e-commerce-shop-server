const database = require('../database.config')

const User = {}

User.createUsersTable = () => {
    const usersTable = `CREATE TABLE IF NOT EXISTS users(
        id INT NOT NULL AUTO_INCREMENT,
        username VARCHAR(45) NOT NULL,
        first_name VARCHAR(45) NOT NULL,
        last_name VARCHAR(45) NOT NULL,
        email VARCHAR(45) NOT NULL,
        password VARCHAR(45) NOT NULL,
        phone_number VARCHAR(45) NOT NULL,
        PRIMARY KEY (id))`

    database.query(usersTable).then(results => {
        console.log("Creating table if no table existed went good...")
    }).catch(err => {
        console.log(err)
    })
}

User.createUser = data => {
    let sqlQuery = 'INSERT INTO users SET ?'

    return database.query(sqlQuery, data)
}

User.getUserById = id => {
    let sqlQuery = `SELECT * FROM users WHERE id = ${id}`

    database.query(sqlQuery).then(result => {
        const user = Object.values(JSON.parse(JSON.stringify(result[0][0])))
        console.log(user)
    }).catch(err => {
        console.log(err)
    })
}

module.exports = User