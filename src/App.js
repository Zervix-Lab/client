import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import SmartyMenu from './Pages/SmartyMenu';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/smartymenu" element={<SmartyMenu />} />
      </Routes>
    </Router>
  );
}

export default App;
