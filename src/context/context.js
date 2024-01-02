import React, { useContext, useReducer, useEffect } from "react";
import reducer from './reducer';
import { DATA_FETCHING_FAIL, DATA_FETCHING_STARTED, DATA_FETCHING_SUCCESS, DECREASE_QTY, DELETE_ITEM, EMPTY_CART, INCREASE_QTY, TOTAL_COST, COUNTER } from './actions';
import axios from "axios";
const url = "https://react--course-api.herokuapp.com/api/v1/data/cart";

const initialState = {
    products: [],
    isLoading: true,
    isError: false,
    total: 0,
    itemCounter: 0,
}

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    //useReducer con state iniziale
    const [state, dispatch] = useReducer(reducer, initialState);

    const deleteItem = (_id) => {
        dispatch({type: DELETE_ITEM, payload: _id});
    }

    const deleteAll = () => {
        dispatch({type: EMPTY_CART});
    }

    const increaseQty = (_id) => {
        dispatch({type: INCREASE_QTY, payload: _id})
    }

    const decreaseQty = (_id) => {
        dispatch({type: DECREASE_QTY, payload: _id})
    }

    //useEffect
    useEffect(()=>{
        //IIFE
        (async() => {
            dispatch({type: DATA_FETCHING_STARTED});
            try {
                const response = await axios.get(url);
                dispatch({type: DATA_FETCHING_SUCCESS, payload: response.data.data});
            } catch (err) {
                dispatch({type: DATA_FETCHING_FAIL});
            }
        })()
    }, [])

    // aggiorna costo totale e counter elementi nel carrello
    useEffect(()=> {
        dispatch({type: TOTAL_COST});
        dispatch({type: COUNTER});
    }, [state.products])
    
    return <AppContext.Provider value={{...state, deleteItem, deleteAll, increaseQty, decreaseQty}}>
        {children}
    </AppContext.Provider>
};

const useGlobalContext = () => {
    return useContext(AppContext)
};

export {AppProvider, useGlobalContext};