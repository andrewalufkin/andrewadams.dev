// Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header = ({ toggleDarkMode, darkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Add scroll listener for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <span className="logo-text">Andrewbadams</span>
            <span className="logo-dot">.</span>
            <span className="logo-dev">com</span>
          </Link>

          <div className="header-right">
            <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
              <ul>
                <li>
                  <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>

            <div className="header-actions">
              <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
              
              <button
                className={`mobile-menu-toggle ${menuOpen ? 'open' : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;