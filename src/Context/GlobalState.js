import React, { createContext, useReducer } from 'react';
import AppReduser from './AppReduser';

//Initial State
const InitialState = {
    users: []
};

//create context
export const GlobalContext = createContext(InitialState);

//provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReduser, InitialState);

    //Actions
    const removeUser = (id) => {
        dispatch({
            type: 'REMOVE_USER',
            payload: id
        })
    }

    const addUser = (users) => {
        dispatch({
            type: 'ADD_USER',
            payload: users
        })
    }

    const editUser = (users) => {
        dispatch({
            type: 'EDIT_USER',
            payload: users
        })
    }

    return(
        <GlobalContext.Provider value={{
            users: state.users,
            removeUser,
            addUser,
            editUser
        }}>
            {children}
        </GlobalContext.Provider>
    )

};