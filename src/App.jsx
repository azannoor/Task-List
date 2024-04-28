
import './App.css'
import Signup from './components/Signup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login'
import ForgotPassword from './components/ForgotPassword'
import ResetPassword from './components/ResetPassword';
import Dashboard from './components/Dashboard';
import Users from './components/Users';
import Notifications from './components/Notifications';


function App() {


  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Notifications />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
      </Routes>
    
    </Router>
  )
}

export default App