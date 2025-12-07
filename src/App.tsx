import { useState, useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import './App.css';
import CursorTrail from './CursorTrail';

function App() {
  const [theme, setTheme] = useState('dark');
  const [showTrail, setShowTrail] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  const toggleTrail = () => {
    setShowTrail((prev) => !prev);
  };

  return (
    <div className="App">

      {showTrail && <CursorTrail />}

      <Header 
        theme={theme} 
        toggleTheme={toggleTheme} 
        showTrail={showTrail}       
        toggleTrail={toggleTrail}   
      />

      <main className="container">
        <div style={{ marginTop: '5rem' }}></div> 
        <Hero />
        
        <div className="section-divider"></div>
        <Experience />

        <div className="section-divider"></div>
        <Projects />

        <div className="section-divider"></div>
        <Contact />
        
        <footer style={{ textAlign: 'center', color: 'var(--text-secondary)', padding: '2rem 0', fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} Adrián Medina Videra
        </footer>
      </main>
    </div>
  );
}

export default App;