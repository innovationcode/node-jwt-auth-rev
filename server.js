const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

var corsOptions = {
    origin: 'http://localhost:8081'
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome 👍'
    })
})
console.log("PORT  :  ",process.env.PORT);
const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
    console.log(`Server running on PORT : ${PORT}`);
})