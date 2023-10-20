import React, { FC, createContext, useState } from "react";

interface IBasicContext {
	counter: number;
	setCounter(counter: number): void;
}

const BasicContext = createContext({} as IBasicContext);

interface BasicContextProps {
  children: React.ReactNode;
}

const BasicContextProvider: FC<BasicContextProps> = (props) => {
	const [counter, setCounter] = useState<number>(0);
    
	const providerValue = {
		counter,
		setCounter,
	};

	return (
		<BasicContext.Provider value={providerValue}>
		{props.children}
		</BasicContext.Provider>
	);
};

export { BasicContext, BasicContextProvider };
