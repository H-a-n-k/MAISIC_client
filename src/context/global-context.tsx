import React, { createContext, useContext, useState} from "react";

interface Props {
    children: React.ReactNode
}

export interface GlobalContextValue {
    keyword?: string
    setKeyword?: React.Dispatch<React.SetStateAction<string>>
}

const GlobalContext = createContext<GlobalContextValue>({})

export default function GlobalContextProvider({ children }: Props) {

    const [keyword, setKeyword] = useState('');

    return <GlobalContext.Provider value={{keyword, setKeyword}}>
        {children}
    </GlobalContext.Provider>
}

export function useGlobalContext() {
    return useContext(GlobalContext);
}