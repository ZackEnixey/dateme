import React, { useState } from 'react'
import axios from "axios";

interface IWorkout {
    _id: string,
    title: string,
    reps: number,
    load: number,
    createdAt: string,
    updatedAt: string,
    __v: number
}

const WorkoutUI = () => {
	const [workouts, setWorkouts] = useState<IWorkout[] | undefined>(undefined);

    const fetchWorkouts = () => {
		console.log(process.env.REACT_APP_BACKEND_URL)
		axios({
			method: "get",
			url: process.env.REACT_APP_BACKEND_URL + "workouts", 
		})
		.then((res) => {
            console.log(res?.data);
			setWorkouts(res?.data);
		})
		.catch((err: any) => {
			console.log(err)
		});
	};

	const printWorkouts = () => {
		return workouts?.map( (workout: IWorkout, index: number) => {
			return (
				<div key={index}>
					{workout.title}
				</div>
			)
		})
	}

    return (
        <div>
            Fetch all Workouts:
            <button onClick={fetchWorkouts}>FETCH</button>
			{workouts && (
				<div>
					<div> W O R K O U T S </div>
					<div> {printWorkouts()} </div>
				</div>
			)}
        </div>
    )
}

export default WorkoutUI
