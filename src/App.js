import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LandingHome from './pages/common/LandingHome';
import Login from './pages/Auth/Login/Login';
import SignUp from './pages/Auth/SignUp/SignUp';
import BlogDetails from './pages/common/BlogDetails';
import BlogWrite from './pages/user_pages/BlogWrite';

function App() {

  return (
    <main className="w-full">
       <ToastContainer/>
      <Router>
        <Routes>
          <Route path="/" element={<LandingHome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/BlogDetails/:id" element={<BlogDetails />} />
          <Route path="/BlogWrite" element={<BlogWrite />} />

        </Routes>
      </Router>
    </main>
  )
}

export default App
