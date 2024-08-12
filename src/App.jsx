import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase";
import { useEffect } from "react";
import { setCurrentUser } from "./store/user/user.action";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./routes/Landing/Landing";
import Navigation from "./components/molecules/navigation/Navigation";
import SignUp from "./routes/sign-up/SignUp";
import SignIn from "./routes/sign-in/SignIn";
function App() {
  const dispatch = useDispatch();
  //this function listens to whenever authentication changes and either creates a new user document in the database or set the current user to the user
  useEffect(() => {
    const unsubscribeUser = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribeUser;
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Landing />} />
          <Route path="/auth" element={<Navigation />}>
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<SignIn />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
