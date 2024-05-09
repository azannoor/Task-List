import './App.css'
import Signup from './components/Signup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login'
import ForgotPassword from './components/ForgotPassword'
import ResetPassword from './components/ResetPassword';
import Dashboard from './components/Dashboard';
import Users from './components/Users';
import Notifications from './components/Notifications';
import Tasks from './components/Tasks';
import Hello from './components/Hello'
import PrivateRoute from './components/PrivateRoute' // import the PrivateRoute component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route index element={<Dashboard/>} />
        </Route>
        <Route path="/users" element={<PrivateRoute />}>
          <Route index element={<Users/>} />
        </Route>
        <Route path="/notifications" element={<PrivateRoute />}>
          <Route index element={<Notifications/>} />
        </Route>
        <Route path="/tasks" element={<PrivateRoute />}>
          <Route index element={<Tasks/>} />
        </Route>
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
      </Routes>
    </Router>
  )
}

export default App;
