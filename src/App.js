import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LandingHome from './pages/common/LandingHome';

function App() {

  return (
    <main className="w-full">
       <ToastContainer/>
      <Router>
        <Routes>
          <Route path="/" element={<LandingHome />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
