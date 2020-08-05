const express = require('express');


const app = express()

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome 👍'
    })
})

const PORT = process.env.PORT || 7000;
app.listen((PORT, () => {
    console.log(`Server running on PORT : ${PORT}`)
})