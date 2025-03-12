import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TicTacToe from './Components/TicTacToe/TicTacToe';
import Navbar from './Components/Navbar';
import FeedbackForm from './Components/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/game" element={<TicTacToe />} />
        <Route path="/contact" element={<FeedbackForm />} />
      </Routes>
    </Router>
  );
}

export default App;
