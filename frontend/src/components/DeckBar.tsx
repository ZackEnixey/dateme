import { useContext, useRef, useState } from 'react';
import DeckCard from './DeckCard';
import { PLAYER_ROLE } from '../enums/PlayerRoles';
import { BasicContext } from '../context/BasicContext';
import cardData from "./CardData.json";
import { PlayerData, PlayerEntry } from '../interfaces/Interfaces';

const DeckBar = () => {
    const { currentRole, setLocationCardNo, setEnvironmentCardNo, setSeducerCardNo, setCatchNo } = useContext(BasicContext);
    const currentRandomNumber = useRef<number>(0);
    let localCardData: PlayerData = cardData;
    let cardContentData: PlayerEntry[] | undefined = localCardData.catch;
    if(!cardContentData) return null;

    if (currentRole === PLAYER_ROLE.MASTER) {
        let cardContentData: PlayerEntry[] | undefined = localCardData.master;
        if(!cardContentData) return null;
       
        return (
            <div className='bottom-section'>
                <DeckCard dragCard={setLocationCardNo}  noCardsInDeck={cardContentData.length} currentRandomNumber={currentRandomNumber} />
                <DeckCard dragCard={setEnvironmentCardNo}  noCardsInDeck={cardContentData.length} currentRandomNumber={currentRandomNumber} />
            </div>
        )
    }
   
    if (currentRole === PLAYER_ROLE.SEDUCER) {
        let cardContentData: PlayerEntry[] | undefined = localCardData.seducer;
        if(!cardContentData) return null;

        return (
            <div className='bottom-section'>
                <DeckCard dragCard={setSeducerCardNo}  noCardsInDeck={cardContentData.length} currentRandomNumber={currentRandomNumber} />
            </div>
        )
    }

    return (
        <div className='bottom-section'>
            <DeckCard dragCard={setCatchNo} noCardsInDeck={cardContentData.length} currentRandomNumber={currentRandomNumber} />
        </div>
    )
}

export default DeckBar
