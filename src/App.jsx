import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import Ebike from './components/Ebike'; 
import Foot from './components/Foot';
import Accessories from './components/Accessories';
import Support from './components/Support';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import ForgotAccount from './components/ForgotAccount';

function App() {
  return (
    <>
      
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/ebike" element={<Ebike />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/support" element={<Support />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<CreateAccount/>} />
        <Route path="/forgot-password" element={<ForgotAccount/>} />
      </Routes>
      <Foot/>
    </Router>
     
    </>
  );
}

export default App;
