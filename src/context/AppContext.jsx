import React, { useState,useReducer,useContext } from "react";
import { Display_Alert } from "./Actions";
import reducer from './Reducers'
const initialState = {
    showAlert: false,
    alertText:'',
    alertType:'',
}

const AppContext = React.createContext()

const AppProvider = ({children})=>{
    const [state,dispatch] = useReducer(reducer,initialState)

    const displayAlert = ()=>{
        dispatch({type:Display_Alert})
    }

    return <AppContext.Provider value={{...state,displayAlert}}>
        {children}
    </AppContext.Provider>
}

const useAppContext = ()=>{
    return useContext(AppContext)
}

export {AppProvider,initialState,useAppContext}