import { FC, useState } from 'react';

interface IDeckCard {
    dragCard(randomNumber: number): void;
    noCardsInDeck: number;
    currentRandomNumber: any;
}

const DeckCard: FC<IDeckCard> = ({ dragCard, noCardsInDeck, currentRandomNumber }) => {
    const [firstCardDownClass, setFirstCardDownClass] = useState('card');

    const simulateDragging = () => {
        setFirstCardDownClass('card temporary-class');
        generateUniqueRandomNumber();

        setTimeout(() => {
            setFirstCardDownClass('card first_card');
        }, 1000);
    }

    const generateUniqueRandomNumber = () => {
        let randomNum;
        do {
          randomNum = Math.floor(Math.random() * noCardsInDeck);
        } while (randomNum === currentRandomNumber.current);

        console.log("randomNum: ", randomNum);
      
        dragCard(randomNum);
        currentRandomNumber.current = randomNum;
      };

    const distance: number = -3;
    const space: number[] = Array.from({ length: 10 }, (_, index) => 30 + distance * index);

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
