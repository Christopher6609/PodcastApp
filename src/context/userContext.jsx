import {createContext, useState, useEffect } from 'react';
import { createUserDocumentFromAuth, onAuthStateChangedListener } from '../utils/firebase/firebase';
import PropTypes from 'prop-types';


export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => {}
})

export const UserProvider = ({children}) => {

    const [ currentUser, setCurrentUser ] = useState({});
    const value = { currentUser, setCurrentUser };
    

    // this function listens to whenever authentication changes and either creates a new user document in the database or set the current user to the user 
    useEffect(()=>{
        const unsubscribeUser = onAuthStateChangedListener((user)=>{
            if(user){
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });
       
        return unsubscribeUser;
    },[])



    return(
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}

UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
}