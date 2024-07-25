
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './routes/Landing/Landing';
import Navigation from './components/molecules/navigation/Navigation';
import SignUp from './routes/sign-up/SignUp';
function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' index element={<Landing/>} />
          <Route path='/auth' element={<Navigation/>}>
            <Route path='signup' element={<SignUp/>} />

          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
