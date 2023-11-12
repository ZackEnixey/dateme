import React, { useContext } from 'react';
import cardData from "./CardData.json";
import { PLAYER_ROLE } from '../enums/PlayerRoles';
import { BasicContext } from '../context/BasicContext';
import { PlayerData, PlayerEntry } from '../interfaces/Interfaces';

const Card = () => {
    const { currentRole, locationCardNo, environmentCardNo, seducerCardNo, catchNo } = useContext(BasicContext);
    let localCardData: PlayerData = cardData;
    let cardContentData: PlayerEntry[] | undefined = localCardData.catch;
    if (!cardContentData) return null;

    if (currentRole === PLAYER_ROLE.MASTER) {
        cardContentData = localCardData.master;
        if (!cardContentData) return null;

        return (
            <div className='middle-section'>
                <div className="card_front">
                    {cardContentData[locationCardNo].textPlace}
                </div>
                <div className="card_front">
                    {cardContentData[environmentCardNo]?.textDificulty}
                </div>
            </div>
        )
    }
   
    if (currentRole === PLAYER_ROLE.SEDUCER) {
        cardContentData = localCardData.seducer;
        if (!cardContentData) return null;

        return (
            <div className='middle-section'>
                <div className="card_front">
                    {cardContentData[seducerCardNo].textPlace}
                </div>
            </div>
        )
    }

    return (
        <div className='middle-section'>
            <div className="card_front">
                {cardContentData[catchNo].textPlace}
            </div>
        </div>
    )
}

export default Card
