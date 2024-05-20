const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/index');

const app  = express();


app.use(bodyParser.json());
app.use(productRoutes);

mongoose.connect('mongodb://localhost:27017/express-mongo', { }).then(() => {    
    console.log('Connected to MongoDB');
}).catch((err) => { 
    console.log('Error connecting to MongoDB', err);
});
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});