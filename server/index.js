const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

const fs = require('fs')
const PORT = 5000

app.listen(PORT, () => {
    console.log('Server is running on PORT ' + PORT)
})
