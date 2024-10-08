import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar  />
      <Routes>
        {/* Set the Home component as the default route */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
