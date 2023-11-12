require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const workoutRouters = require('./routes/workouts');

// express app
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routes
// app.get('/', (req, res) => {
//     res.json({message: 'Welcome to the app'});
// });
app.use('/api/workouts', workoutRouters); 

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on port ', process.env.PORT);
        });
    })
    .catch((error) => {
        console.log(error);
    });

// listen for requests // if you are connecting to the MongoDB, then this has to be in the .then()
// app.listen(process.env.PORT, () => {
//     console.log('listening on port ', process.env.PORT);
// });
