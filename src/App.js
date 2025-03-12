import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TicTacToe from './Components/TicTacToe/TicTacToe';
import Navbar from './Components/Navbar';
import AboutUs from './Components/AboutUs';
import FeedbackForm from './Components/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<TicTacToe />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<FeedbackForm />} />
      </Routes>
    </Router>
  );
}

export default App;
