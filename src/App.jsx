// App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import './styles/main.css';

function App() {
  // Attempt to read initial theme from localStorage or system preference
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialMode = localStorage.getItem('darkMode') === 'true' || (localStorage.getItem('darkMode') === null && prefersDark);
  const [darkMode, setDarkMode] = useState(initialMode);

  // Effect to update body class and localStorage
  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add('dark-mode');
      body.classList.remove('light-mode');
      localStorage.setItem('darkMode', 'true');
    } else {
      body.classList.add('light-mode');
      body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'false');
    }
    // Optional: Clean up class on unmount if necessary, though unlikely for App
    // return () => {
    //   body.classList.remove('dark-mode', 'light-mode');
    // };
  }, [darkMode]); // Dependency array ensures this runs when darkMode changes

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    // Remove theme class from this div
    <div>
      <Router>
        <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;