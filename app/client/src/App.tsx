import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/(auth)/Signin'
import Landing from './pages/Landing'
import Verify from './pages/(auth)/Verify'

function App() {

  return (
    <>
     <Router>
      <Routes>

        // landing
        <Route path='/' element={<Landing/>}/>

        // home
        <Route path="/home" element={<Home/>} />

        // auth
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signin/>} />
        <Route path="/verify" element={<Verify/>} />

      </Routes>
     </Router>
    </>
  )
}

export default App
