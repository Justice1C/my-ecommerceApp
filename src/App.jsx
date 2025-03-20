import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Correct import
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';

// Define or import the Home component


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;