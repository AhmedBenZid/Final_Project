// Require Modules
const express = require('express');
const config = require('config');
const app = express();
const connectDB = require('./config/ConnectDB');

//Connect Data Base
connectDB();

// Using express.Json
app.use(express.json());

// Create a Port
const port = process.env.PORT || 5000

//Run Routes

app.use('/api/user', require('./Routes/user'));
app.use('/api/profile', require('./Routes/profile'));
app.use('/api/destinations', require('./Routes/destination'));
app.use('/api/circuits', require('./Routes/circuit'));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
}



//Lunch the server

app.listen(port, (err) => {
    err ? console.log(err.message) : console.log((`the server is running in Port : ${port}`))
})



