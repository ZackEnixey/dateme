const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');

// get all workouts
const getWorkouts = async (req, res) => {
    // get ALL workouts and sort them in Decending order
    const workouts = await Workout.find({}).sort({ createdAt: -1 });
    // get ALL workouts
    // const workouts = await Workout.find({});
    // get all workouts with { reps: 20 }
    // const workouts = await Workout.find({ reps: 20 });
    // get all workouts with load 6
    // const workouts = await Workout.find({ load: 6 });

    res.status(200).json(workouts);
};

// get a single workout
const getWorkoutById = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({error: "No such workout"});
    }

    const workout = await Workout.findById(id);

    if (!workout) {
        res.status(404).json({error: "No such workout"});
    }

    res.status(200).json(workout);
};

// create a new workout
const createWorkout = async (req, res) => {
    const {title, load, reps} = req.body;

    // add dot to db.
    try {
        const workout = await Workout.create({title, load, reps});
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

// delete a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({error: "No such workout"});
    }

    const workout = await Workout.findOneAndDelete({ _id: id });

    if (!workout) {
        res.status(404).json({error: "No such workout"});
    }

    res.status(200).json(workout);

};


// update a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({error: "No such workout"});
    }

    const workout = await Workout.findOneAndUpdate(
        { _id: id },
        {
            ...req.body
        }    
    );

    res.status(200).json(workout);
};


module.exports = {
    createWorkout,
    getWorkouts,
    getWorkoutById,
    deleteWorkout,
    updateWorkout
}