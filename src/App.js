import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Rent from './components/Rent';

function App() {
  return (
    <Router>
      <div className="app">
      <Navbar />
        <Routes>
          <Route path='/' exact element={<Hero />} />
          <Route path='/property=rent' element={<Rent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
