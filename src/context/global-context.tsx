import React, { createContext, useContext} from "react";

interface Props {
    children: React.ReactNode
}

export interface GlobalContextValue {
    title?: string
}

const GlobalContext = createContext<GlobalContextValue>({ })

export default function GlobalContextProvider({ children }: Props) {

    return <GlobalContext.Provider value={{title: 'appp'}}>
        {children}
    </GlobalContext.Provider>
}

export function useGlobalContext() {
    return useContext(GlobalContext);
}