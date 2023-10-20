import React, { FC, createContext, useState } from "react";

interface IBasicContext {
	counter: number;
	setCounter(counter: number): void;
	isIntroRenderedState: boolean;
	setIsIntroRenderedState(isIntroRendered: boolean): void;
}

const BasicContext = createContext({} as IBasicContext);

interface BasicContextProps {
  children: React.ReactNode;
}

const BasicContextProvider: FC<BasicContextProps> = (props) => {
	const isIntroRendered: boolean = localStorage.getItem('isIntroRendered') === "false" ? false : true;
	const [isIntroRenderedState, setIsIntroRenderedState] = useState<boolean>(isIntroRendered);
	const [counter, setCounter] = useState<number>(0);
    
	const providerValue = {
		counter,
		setCounter,
		isIntroRenderedState,
		setIsIntroRenderedState
	};

	return (
		<BasicContext.Provider value={providerValue}>
		{props.children}
		</BasicContext.Provider>
	);
};

export { BasicContext, BasicContextProvider };
