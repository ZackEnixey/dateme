import { useContext } from 'react';
import DeckCard from './DeckCard';
import { PLAYER_ROLE } from '../enums/PlayerRoles';
import { BasicContext } from '../context/BasicContext';
import cardData from "./CardData.json";
import { PlayerData, PlayerEntry } from '../interfaces/Interfaces';

const DeckBar = () => {
    const { currentRole, setLocationCardNo, setEnvironmentCardNo, setSeducerCardNo, setCatchNo } = useContext(BasicContext);
    let localCardData: PlayerData = cardData;
    let cardContentData: PlayerEntry[] | undefined = localCardData.catch;
    if(!cardContentData) return null;

    if (currentRole === PLAYER_ROLE.MASTER) {
        let cardContentData: PlayerEntry[] | undefined = localCardData.master;
        if(!cardContentData) return null;
       
        return (
            <div className='bottom-section'>
                <DeckCard dragCard={setLocationCardNo}  noCardsInDeck={cardContentData.length} />
                <DeckCard dragCard={setEnvironmentCardNo}  noCardsInDeck={cardContentData.length} />
            </div>
        )
    }
   
    if (currentRole === PLAYER_ROLE.SEDUCER) {
        let cardContentData: PlayerEntry[] | undefined = localCardData.seducer;
        if(!cardContentData) return null;

        return (
            <div className='bottom-section'>
                <DeckCard dragCard={setSeducerCardNo}  noCardsInDeck={cardContentData.length} />
            </div>
        )
    }

    return (
        <div className='bottom-section'>
            <DeckCard dragCard={setCatchNo} noCardsInDeck={cardContentData.length} />
        </div>
    )
}

export default DeckBar
