import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/(auth)/Signin'
import Landing from './pages/Landing'
import Verify from './pages/(auth)/Verify'
import Onboard1 from './pages/(onboard)/Onboard1'
import Onboard2 from './pages/(onboard)/Onboard2'
import Onboard3 from './pages/(onboard)/Onboard3'
import DashBoard from './pages/DashBoard'
import Advisor from './pages/(advisor)/Advisor'

function App() {

  return (
    <>
      <Router>
        <Routes>

        // landing
          <Route path='/' element={<Landing />} />

        // home
          <Route path="/home" element={<Home />} />

        // dashboard 
          <Route path='/dashboard' element={<DashBoard/>}/> 

        // auth
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signin />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/onboard/1" element={<Onboard1 />} />
          <Route path="/onboard/2" element={<Onboard2 />} />
          <Route path="/onboard/3" element={<Onboard3 />} />

        //Advisor 
          <Route path='/advisor' element={<Advisor/>}/>


        </Routes>
      </Router>
    </>
  )
}

export default App
