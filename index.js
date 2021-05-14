const express = require('express')
const cors = require('cors')

const User = require('./models/user.model')
const userRoutes = require('./routes/user.routes')

const app = express()
app.use(express.json())
app.use(cors())

User.createUsersTable()

// Routes
app.use('/user', userRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})