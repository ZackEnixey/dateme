import { useState } from 'react';

const DeckCard = () => {
    const [firstCardDownClass, setFirstCardDownClass] = useState('card down');

    const simulateDragging = () => {
        setFirstCardDownClass('card temporary-class');

        setTimeout(() => {
            setFirstCardDownClass('card first_card');
        }, 2000);
    }

    const distance: number = -3;
    const space: number[] = Array.from({ length: 9 }, (_, index) => 30 + distance * index);

    return (
        <div className="cards_holder">
            <div style={{top: space[0]}} className="card"></div>
            <div style={{top: space[1]}} className="card"></div>
            <div style={{top: space[2]}} className="card"></div>
            <div style={{top: space[3]}} className="card"></div>
            <div style={{top: space[4]}} className="card"></div>
            <div style={{top: space[5]}} className="card"></div>
            <div style={{top: space[6]}} className="card"></div>
            <div style={{top: space[7]}} className="card"></div>
            <div style={{top: space[8]}} className="card"></div>
            <div style={{top: space[9]}} className={firstCardDownClass} onClick={simulateDragging}></div>
        </div>
    )
}

export default DeckCard
