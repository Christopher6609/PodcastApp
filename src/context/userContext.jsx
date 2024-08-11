import { createContext, useEffect, useReducer } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/firebase";
import PropTypes from "prop-types";

export const UserContext = createContext({
  currentUser: null,
  
});

const INITIAL_STATE = {
  currentUser: null,
};

const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`unhandled type ${type} at user reducer`);
  }
};

export const UserProvider = ({ children }) => {
  //const [currentUser, setCurrentUser] = useState({});

  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const { currentUser } = state;
  const setCurrentUser =  (user) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
    // await createUserDocumentFromAuth(user);
    // setCurrentUser(user);
  };

  const value = { currentUser, setCurrentUser };

  //this function listens to whenever authentication changes and either creates a new user document in the database or set the current user to the user
    useEffect(() => {
      const unsubscribeUser = onAuthStateChangedListener((user) => {
        if (user) {
          createUserDocumentFromAuth(user);
        }
        setCurrentUser(user);
      });

      return unsubscribeUser;
    }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
