import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/(auth)/SignUp'
import Login from './pages/(auth)/Login'
import Landing from './pages/landing'

function App() {

  return (
    <>
     <Router>
        <Routes>

          //landing
          <Route path="/" element={<Landing/>} />

          //home
          <Route path="/home" element={<Home/>} />

          //auth
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
          
        </Routes>
     </Router>
    </>
  )
}

export default App
