import React, { useContext } from 'react';
import { BasicContext } from '../context/BasicContext';

const Intro = () => {
    const { isIntroRenderedState, setIsIntroRenderedState } = useContext(BasicContext);

    const stopShowingIntro = () => {
        setIsIntroRenderedState(true);
        localStorage.setItem('isIntroRendered', "true")
    }
    
    const startShowingIntro = () => {
        setIsIntroRenderedState(false);
        localStorage.setItem('isIntroRendered', "false")
    }

    return (
        <div>
            <button onClick={startShowingIntro}> start </button>
            <button onClick={stopShowingIntro}> stop </button>
            {isIntroRenderedState && <div>Intro</div>}
        </div>
    );
};

export default Intro;
