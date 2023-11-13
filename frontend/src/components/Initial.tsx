import React from 'react';
import { useNavigate } from 'react-router-dom';

const Initial = () => {
    const navigate = useNavigate();

    const handleButtonClick = (route: string) => {
        // Navigate to the route when the button is clicked
        navigate(route);
    };

    return (
        <div>
            this is initial Initial
            <button onClick={() => handleButtonClick("/about")}>Go to About Page</button>
            <button onClick={() => handleButtonClick("/dateme")}>Go to Dateme Page</button>
            <button onClick={() => handleButtonClick("/workouts")}>Go to Workouts Page</button>
        </div>
    )
}

export default Initial
