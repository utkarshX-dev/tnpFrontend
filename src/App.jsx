import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPage from './pages/AdminPage/AdminPage';
import SharePage from './pages/SharePage/SharePage';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import "./css/styles.css"

function App() {
  return (
    <Router>
        <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/share/:token" element={<SharePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
