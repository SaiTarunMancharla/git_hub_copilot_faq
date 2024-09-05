import '@fortawesome/fontawesome-free/css/all.min.css';
import Roadmap from './pages/roadmap/roadmap';
import MainPage from './pages_main/mainPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Footer from './pages/footer';


function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path="/roadmap" element={<Roadmap/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;