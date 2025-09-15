import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import AdminBoard from './Pages/AdminBoard'; // Make sure path is correct
import LoginPage from './Pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminBoard />} />
        <Route path='/login' element={<LoginPage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
