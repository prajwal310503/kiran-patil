import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Gallery from './pages/Gallery/Gallery';
import Blogs from './pages/Blogs/Blogs';
import ScrollToTopButton from './components/ScrollToTop/ScrollToTopButton';

// 👉 Import new components
import AboutNetra from './components/About/AboutNetra';
import AboutKiran from './components/About/AboutKiran';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blogs" element={<Blogs />} />

            {/* ✅ New Routes */}
            <Route path="/about-netra" element={<AboutNetra />} />
            <Route path="/about-kiran" element={<AboutKiran />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
};

export default App;
