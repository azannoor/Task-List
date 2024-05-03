import React, { useState,useReducer,useContext } from "react";
import { Display_Alert, REGISTER_USER_BEGIN, REGISTER_USER_ERROR } from "./Actions";

import axios from 'axios'
import reducer from './Reducers'

const initialState = {
    showAlert: false,
    alertText:'',
    alertType:'',
    user:null,
    token:null,
}

const AppContext = React.createContext()

const AppProvider = ({children})=>{
    const [state,dispatch] = useReducer(reducer,initialState)

    const displayAlert = ()=>{
        dispatch({type:Display_Alert})
    }

    const registerUser = async (currentUser)=>{
        dispatch({type: REGISTER_USER_BEGIN})
        try{
            const response = await axios.post('/api/users/register',currentUser)
            console.log(response)
            const {user,token} = response.data
            dispatch({type:REGISTER_USER_BEGIN,payload:{user,token}})
        } catch (error){
            dispatch({type:REGISTER_USER_ERROR,payload:{msg:error.response.data.msg}})
        }
    }

    return <AppContext.Provider value={{...state,displayAlert,registerUser}}>
        {children}
    </AppContext.Provider>
}

const useAppContext = ()=>{
    return useContext(AppContext)
}

export {AppProvider,initialState,useAppContext}