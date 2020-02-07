const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const { mongoose } = require('./database');

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({ origin:  'http://localhost:4200'}));

//routes
app.use('/data', require('./routes/pets-routes'));

//starting the server
app.listen(3000, () =>{
    console.log('Server on port 3000');
});