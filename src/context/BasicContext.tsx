import React, { FC, createContext, useState } from "react";
import { PLAYER_ROLE } from '../enums/PlayerRoles';

interface IBasicContext {
	counter: number;
	setCounter(counter: number): void;
	isIntroRenderedState: boolean;
	setIsIntroRenderedState(isIntroRendered: boolean): void;
	currentRole: PLAYER_ROLE,
	setCurrentRole(currentRole: PLAYER_ROLE): void;
	locationCardNo: number;
	setLocationCardNo(locationCardNo: number): void;
	environmentCardNo: number;
	setEnvironmentCardNo(environmentCardNo: number): void;
	seducerCardNo: number;
	setSeducerCardNo(seducerCardNo: number): void;
	catchNo: number;
	setCatchNo(catchNo: number): void;
}

const BasicContext = createContext({} as IBasicContext);

interface BasicContextProps {
  children: React.ReactNode;
}

const BasicContextProvider: FC<BasicContextProps> = (props) => {
	const isIntroRendered: boolean = localStorage.getItem('isIntroRendered') === "false" ? false : true;
	const [isIntroRenderedState, setIsIntroRenderedState] = useState<boolean>(isIntroRendered);
	const [counter, setCounter] = useState<number>(0);
	const [currentRole, setCurrentRole] = useState<PLAYER_ROLE>(PLAYER_ROLE.MASTER);
	const [locationCardNo, setLocationCardNo] = useState<number>(0);
	const [environmentCardNo, setEnvironmentCardNo] = useState<number>(0);
	const [seducerCardNo, setSeducerCardNo] = useState<number>(0);
	const [catchNo, setCatchNo] = useState<number>(0);
  
	const providerValue = {
		counter,
		setCounter,
		isIntroRenderedState,
		setIsIntroRenderedState,
		currentRole,
		setCurrentRole,
		locationCardNo, 
		setLocationCardNo,
		environmentCardNo, 
		setEnvironmentCardNo,
		seducerCardNo, 
		setSeducerCardNo,
		catchNo, 
		setCatchNo
	};

	return (
		<BasicContext.Provider value={providerValue}>
		{props.children}
		</BasicContext.Provider>
	);
};

export { BasicContext, BasicContextProvider };
