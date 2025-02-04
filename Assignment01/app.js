const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const courseRoutes = require('./routes/course.routes'); 
const studentRoutes = require("./routes/student.routes");

const port = 3000;

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(`${process.env.mongoUrl}`, { dbName: 'home00' })
    .then(() => {
        console.log("Connected to the database!");
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    })
    .catch(() => {
        console.log("Failed to connect to the database.");
    });

// Home route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Use the course routes
app.use('/api/courses', courseRoutes);

// Student Routes
app.use("/api/students", studentRoutes);