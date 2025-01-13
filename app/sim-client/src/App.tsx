import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Simulation from './pages/Simulation'
import { Toaster } from 'sonner'
import Signin from './pages/Signin'

function App() {

  return (
    <>
      <Router>
        <Toaster richColors  />
        <Routes>
        // landing
          <Route path='/' element={<Landing />}/>
        // auth
          <Route path="/signin" element={<Signin/>} />
          <Route path="/signup" element={<Signin/>} />

        // simulation
          <Route path="/simulation" element={<Simulation/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
