const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


// Middleware will go here

app.use(bodyParser.json());
app.use(cors());

const events = require('./routes/api/events');

app.use('/api/events/', events);


require("dotenv").config({ path: "variables.env" })
const port = process.env.PORT;
const db = process.env.DATABASE_URL;

app.listen(port, () => console.log(`${port}`));