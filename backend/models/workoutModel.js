const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// the schema definds the structure of the document we save to that collection
const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number, 
        required: true
    },
    load: {
        type: Number,
        required: true,
    }
}, { timestamps: true});

module.exports = mongoose.model('Workout', workoutSchema);