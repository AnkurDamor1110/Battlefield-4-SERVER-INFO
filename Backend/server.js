const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
const serverInfo = require('./Data/serverInfoData');


const allowedOrigins = ['http://localhost:3000/']; // Correct origin without trailing slash

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    credentials: true, // Allow cookies if needed
}));


app.get('/', (req, res) => {
    res.send('Welcome to the Battlefield API!');

});

// Routes for the API
app.use('/serverInfo', serverInfo);


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});