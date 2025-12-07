import { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import './Header.css';
import myAvatar from './assets/Logo-Draw-nobg.webp';

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
  showTrail: boolean;
  toggleTrail: () => void;
}

const Header = ({ theme, toggleTheme, showTrail, toggleTrail }: HeaderProps) => {
  const { language, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">
        
        <div className="header-left">
          <img 
            src={myAvatar} 
            alt="Mini Avatar" 
            className="header-avatar"
          />
          <span className="header-name">Adrián Medina</span>
        </div>

        <div className="header-actions">
          {/* 1. BOTÓN ESTELA */}
          <button 
              className={`icon-btn ${showTrail ? 'active' : ''}`} 
              onClick={toggleTrail} 
              aria-label="Toggle Cursor Trail"
              title={showTrail ? "Disable Trail" : "Enable Trail"}
            >
              <svg 
                className="header-icon" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M11.5805 4.77604C12.2752 3.00516 12.6226 2.11971 13.349 2.01056C14.0755 1.90141 14.6999 2.64083 15.9488 4.11967L16.2719 4.50226C16.6268 4.9225 16.8042 5.13263 17.0455 5.25261C17.2868 5.37259 17.5645 5.38884 18.1201 5.42135L18.6258 5.45095C20.5808 5.56537 21.5583 5.62258 21.8975 6.26168C22.2367 6.90079 21.713 7.69853 20.6656 9.29403L20.3946 9.7068C20.097 10.1602 19.9482 10.3869 19.908 10.6457C19.8678 10.9045 19.9407 11.1662 20.0866 11.6895L20.2195 12.166C20.733 14.0076 20.9898 14.9284 20.473 15.4325C19.9562 15.9367 19.0081 15.6903 17.1118 15.1975L16.6213 15.07C16.0824 14.93 15.813 14.86 15.5469 14.8999C15.2808 14.9399 15.0481 15.0854 14.5828 15.3763L14.1591 15.6412C12.5215 16.6649 11.7027 17.1768 11.0441 16.8493C10.3854 16.5217 10.3232 15.5717 10.1987 13.6717L10.1665 13.1801C10.1311 12.6402 10.1134 12.3702 9.98914 12.1361C9.86488 11.902 9.64812 11.7302 9.21459 11.3867L8.8199 11.0739C7.29429 9.86506 6.53149 9.26062 6.64124 8.55405C6.751 7.84748 7.66062 7.50672 9.47988 6.8252L9.95054 6.64888C10.4675 6.45522 10.726 6.35839 10.9153 6.17371C11.1046 5.98903 11.2033 5.73742 11.4008 5.23419L11.5805 4.77604Z" 
                  fill="currentColor"
                />
                <g opacity="0.5"> 
                  <path 
                    d="M5.31003 9.59277C2.87292 11.9213 1.27501 15.8058 2.33125 22.0002C3.27403 19.3966 5.85726 17.2407 8.91219 15.9528C8.80559 15.3601 8.7583 14.6364 8.70844 13.8733L8.66945 13.2782C8.66038 13.1397 8.65346 13.0347 8.64607 12.9443C8.643 12.9068 8.64012 12.8754 8.63743 12.8489C8.61421 12.829 8.58591 12.8053 8.55117 12.7769C8.47874 12.7177 8.39377 12.6503 8.28278 12.5623L7.80759 12.1858C7.11448 11.6368 6.46884 11.1254 6.02493 10.6538C5.77182 10.385 5.48876 10.0304 5.31003 9.59277Z" 
                    fill="currentColor"
                  /> 
                  <path 
                    d="M10.3466 15.4231C10.3415 15.3857 10.3365 15.3475 10.3316 15.3086L10.3877 15.41C10.374 15.4144 10.3603 15.4187 10.3466 15.4231Z" 
                    fill="currentColor"
                  /> 
                </g> 
              </svg>
            </button>

          {/* 2. BOTÓN IDIOMA (BANDERAS SVG LIMPIAS) */}
          <button 
            className="icon-btn" 
            onClick={toggleLanguage} 
            title={language === 'en' ? "Cambiar a Español" : "Switch to English"}
          >
            {language === 'en' ? (
              // Si estamos en Inglés, mostramos bandera ESPAÑA para cambiar
              <svg className="header-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Parte Amarilla (con opacidad para dar contraste) */}
                <path opacity="0.3" d="M2 32c0 5.9 1.7 11.4 4.6 16h50.7c2.9-4.6 4.6-10.1 4.6-16s-1.7-11.4-4.6-16H6.6C3.7 20.6 2 26.1 2 32z" fill="currentColor"/>
                {/* Parte Roja (sólida) */}
                <path d="M57.4 16C52.1 7.6 42.7 2 32 2S11.9 7.6 6.6 16h50.8z" fill="currentColor"/>
                <path d="M6.6 48c5.3 8.4 14.7 14 25.4 14s20.1-5.6 25.4-14H6.6z" fill="currentColor"/>
                {/* Detalles escudo simplificados */}
                <path d="M14.3 28.6h7.2v8h-7.2z" fill="currentColor"/>
                <path d="M21.5 28.6h7.2v8h-7.2z" fill="currentColor"/>
              </svg>
            ) : (
              // Si estamos en Español, mostramos bandera INGLATERRA para cambiar
              <svg className="header-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Fondo Azul (con opacidad) */}
                <path opacity="0.3" d="M22 60.3V46.5l-10.3 7.6c2.9 2.7 6.4 4.8 10.3 6.2" fill="currentColor"/>
                <path opacity="0.3" d="M42 60.3c3.9-1.4 7.4-3.5 10.3-6.2L42 46.4v13.9" fill="currentColor"/>
                <path opacity="0.3" d="M3.7 42c.3 1 .7 1.9 1.2 2.9L8.8 42H3.7" fill="currentColor"/>
                <path opacity="0.3" d="M55.2 42l3.9 2.9c.4-.9.8-1.9 1.2-2.9h-5.1" fill="currentColor"/>
                <path opacity="0.3" d="M42 3.7v13.8l10.3-7.6C49.4 7.2 45.9 5.1 42 3.7" fill="currentColor"/>
                <path opacity="0.3" d="M22 3.7c-3.9 1.4-7.4 3.5-10.3 6.2L22 17.6V3.7" fill="currentColor"/>
                <path opacity="0.3" d="M60.3 22c-.3-1-.7-1.9-1.2-2.9L55.2 22h5.1" fill="currentColor"/>
                <path opacity="0.3" d="M8.8 22l-3.9-2.9c-.4 1-.8 1.9-1.2 2.9h5.1" fill="currentColor"/>
                
                {/* Cruz Roja Principal (sólida) */}
                <path d="M23.5 38H2.6c.3 1.4.7 2.7 1.1 4h5.1l-3.9 2.9c.8 1.7 1.7 3.2 2.8 4.7L18 42h4v2l-11.7 8.6l1.4 1.4L22 46.5v13.8c1.3.5 2.6.8 4 1.1V38h-2.5" fill="currentColor"/>
                <path d="M61.4 38H38v23.4c1.4-.3 2.7-.7 4-1.1V46.5L52.3 54c1.4-1.3 2.6-2.7 3.8-4.2L45.4 42h6.8l6.1 4.5c.3-.5.6-1.1.8-1.6L55.2 42h5.1c.4-1.3.8-2.6 1.1-4" fill="currentColor"/>
                <path d="M40.5 26h20.8c-.3-1.4-.7-2.7-1.1-4h-5.1l3.9-2.9c-.8-1.7-1.7-3.2-2.8-4.7L46 22h-4v-2l11.7-8.6l-1.4-1.4L42 17.5V3.7c-1.3-.5-2.6-.8-4-1.1V26h2.5" fill="currentColor"/>
                <path d="M2.6 26H26V2.6c-1.4.3-2.7.7-4 1.1v13.8L11.7 10c-1.4 1.3-2.6 2.7-3.8 4.2L18.6 22h-6.8l-6.1-4.5c-.3.5-.6 1.1-.8 1.6L8.8 22H3.7c-.4 1.3-.8 2.6-1.1 4" fill="currentColor"/>
              </svg>
            )}
          </button>

          {/* 3. BOTÓN TEMA */}
          <button className="icon-btn" onClick={toggleTheme} aria-label="Cambiar tema">
            {theme === 'light' ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;