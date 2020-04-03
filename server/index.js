require("dotenv").config();
const express = require('express');
const massive = require('massive');

const {getInventory} = require('./controller')

const app = express();
app.use(express.json());


const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
})
    .then(dbInstance => {
        app.set("db", dbInstance);
    })
    .catch(err => console.log(err));

app.get('/api/inventory', getInventory);



app.listen(SERVER_PORT, () => {
    console.log(`Skills check 2 is running on PORT ${SERVER_PORT}`);
});