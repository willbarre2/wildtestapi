const express = require('express');
const argoRoutes = require('./routes/argonautes.routes');
require('dotenv').config({path: './config/.env'});
require('./config/db');
const cors = require('cors');
const app = express();

const corsOptions = {
    credentials: true,
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
  }

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/argonautes', argoRoutes);

//server
app.listen(process.env.PORT, () => {
    console.log(`nodemon watching on port: ${process.env.PORT}`);
});