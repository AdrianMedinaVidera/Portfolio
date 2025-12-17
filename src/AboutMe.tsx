import './AboutMe.css';
import { useLanguage } from './LanguageContext';
import { translations } from './Translations';

const AboutMe = () => {
    const { language } = useLanguage();
    const t = translations[language];

    const softSkills = [
        t.about_soft_1,
        t.about_soft_2,
        t.about_soft_3,
        t.about_soft_4,
        t.about_soft_5,
        t.about_soft_6

    ];

    const hardSkills = [
        t.about_hard_1,
        t.about_hard_2,
        t.about_hard_3,
        t.about_hard_4,
        t.about_hard_5,
        t.about_hard_6
    ];

    return (
        <section className="about-container" id="about">
            <div className="about-header">
                <h2 className="about-title">{t.about_title}</h2>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="6" r="4" fill="currentColor" />
                    <path 
                        opacity="0.5" 
                        d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z" 
                        fill="currentColor" 
                    />
                </svg>
            </div>

            <div className="about-content">
                <p className="about-text">{t.about_text}</p>
            </div>

            <div className="skills-container">
                <div className="skill-column">
                    <h3 className="skill-title">{t.about_soft_title}</h3>
                    <ul className="skill-list">
                        {softSkills.map((skill, index) => (
                            <li key={index} className="skill-item">
                                <span className="skill-dot"></span>
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="skill-column">
                    <h3 className="skill-title">{t.about_hard_title}</h3>
                    <ul className="skill-list">
                        {hardSkills.map((skill, index) => (
                            <li key={index} className="skill-item">
                                <span className="skill-dot"></span>
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
