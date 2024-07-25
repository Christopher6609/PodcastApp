
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './routes/Landing/Landing';
function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
