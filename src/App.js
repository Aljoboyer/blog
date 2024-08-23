import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LandingHome from './pages/common/LandingHome';
import LandingNavBar from '../src/components/Navbars';
import Login from './pages/Auth/Login/Login';
import SignUp from './pages/Auth/SignUp/SignUp';

function App() {

  return (
    <main className="w-full">
      <LandingNavBar/>
       <ToastContainer/>
      <Router>
        <Routes>
          <Route path="/" element={<LandingHome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
