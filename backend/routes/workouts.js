const express = require('express');
// const Workout = require('../models/workoutModel');
const { 
    createWorkout,
    getWorkouts,
    getWorkoutById,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController');

const router = express.Router();

// GET all workouts
router.get('/', getWorkouts);

// GET a single workout
router.get('/:id', getWorkoutById);

// POST a new workout
router.post('/', createWorkout);
// if we didn't separate a method in workoutCOntroller file it would look like this:
// router.post('/', async (req, res) => {
//     const {title, load, reps} = req.body;

//     try {
//         const workout = await Workout.create({title, load, reps});
//         res.status(200).json(workout);
//     } catch (error) {
//         res.status(400).json({error: error.message});
//     }
// });

// DELETE a new workout
router.delete('/:id', deleteWorkout);

// UPDATE a new workout
router.patch('/:id', updateWorkout);

module.exports = router;