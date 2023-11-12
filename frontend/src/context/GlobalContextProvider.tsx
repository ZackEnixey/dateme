import React, { FC } from "react";
import { BasicContextProvider } from "./BasicContext";

interface GlobalContextProps {
  children: React.ReactNode;
}

const GlobalContextProvider: FC<GlobalContextProps> = (props) => {
    return (
        <BasicContextProvider>
            {props.children}
        </BasicContextProvider>
    );
};

export default GlobalContextProvider;
