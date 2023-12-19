import React, { useContext, useReducer, useEffect } from "react";
import reducer from './reducer';
import {} from './actions';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    return <AppContext.Provider value='context'>
        {children}
    </AppContext.Provider>
};

const useGlobalContext = () => {
    return useContext(AppContext)
};

export {AppProvider, useGlobalContext};