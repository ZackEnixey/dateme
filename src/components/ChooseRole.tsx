import { useContext } from 'react'
import { BasicContext } from '../context/BasicContext'
import { PLAYER_ROLE } from '../enums/PlayerRoles';

const ChooseRole = () => {
    const { setCurrentRole, currentRole } = useContext(BasicContext);
    
    const handlePlayerRole = (playerRole: PLAYER_ROLE) => {
        setCurrentRole(playerRole);
    }

    return (
        <div className='top-section'>
            <div className={`button ${currentRole === PLAYER_ROLE.MASTER ? "role_selected" : ""}`} onClick={() => handlePlayerRole(PLAYER_ROLE.MASTER)}> Game Master </div>
            <div className={`button ${currentRole === PLAYER_ROLE.SEDUCER ? "role_selected" : ""}`} onClick={() => handlePlayerRole(PLAYER_ROLE.SEDUCER)}> Seducer </div>
            <div className={`button ${currentRole === PLAYER_ROLE.CATCH ? "role_selected" : ""}`} onClick={() => handlePlayerRole(PLAYER_ROLE.CATCH)}> Catch </div>
        </div>
    )
}

export default ChooseRole
