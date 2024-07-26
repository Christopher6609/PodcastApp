
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './routes/Landing/Landing';
import Navigation from './components/molecules/navigation/Navigation';
import SignUp from './routes/sign-up/SignUp';
import SignIn from './routes/sign-in/SignIn';
function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' index element={<Landing/>} />
          <Route path='/auth' element={<Navigation/>}>
            <Route path='signup' element={<SignUp/>} />
            <Route path="login" element={<SignIn/>} />

          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
