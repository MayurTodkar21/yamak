import React from 'react'
import SignIn from './components/SignIn'
import { BrowserRouter as Router,
        Routes,
        Route
      } from 'react-router-dom'
import CreateAccount from './components/CreateAccount'
import "./index.css"
import Password from './components/Password'
import Otp from './components/Otp'
import ResetPass from './components/ResetPass'
import PasswordReset from './components/PasswordReset'

const App = () =>{
  return(
    <Router>
      <div className='App'>

     
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/createaccount" element={<CreateAccount/>}/>
        <Route path="/password" element={<Password/>}/>
        <Route path="/otp" element={<Otp/>}/>
        <Route path="/reset" element={<ResetPass/>}/>
        <Route path="/reset_pass" element={<PasswordReset/>}/>
      </Routes>
      </div>
    </Router>
  )
}
export default App;
