import "./Navbar.css";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import LanguageContext from "../../LanguageContext.jsx";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { language, setLanguage } = useContext(LanguageContext);
    const closeMenu = () => setOpen(false);

    return (
        <header className="navbar-bg">
            <nav className="navbar" aria-label={language === "en" ? "Main navigation" : "Navegación principal"}>
                <div className="navbar-section center">
                    <Link to="/" className="brand" onClick={closeMenu}>
                        <img className="brand-logo" src={`${import.meta.env.BASE_URL}favicon.svg`} alt="" />
                        <span className="brand-text">Santiago Paris Puebla</span>
                    </Link>
                </div>

                <div className={`navbar-links${open ? " open" : ""}`}>
                    <a href="#profile" onClick={closeMenu}>{language === "en" ? "Profile" : "Perfil"}</a>
                    <a href="#experience" onClick={closeMenu}>{language === "en" ? "Experience" : "Experiencia"}</a>
                    <a href="#education" onClick={closeMenu}>{language === "en" ? "Education" : "Educación"}</a>
                    <a href="#projects" onClick={closeMenu}>{language === "en" ? "Projects" : "Proyectos"}</a>
                    <a href="#contact" onClick={closeMenu}>{language === "en" ? "Contact" : "Contacto"}</a>
                </div>

                <div className="navbar-tools">
                    <button
                        className={`language-switch${language === "es" ? " is-spanish" : ""}`}
                        type="button"
                        role="switch"
                        aria-checked={language === "es"}
                        aria-label={language === "en" ? "Switch language to Spanish" : "Cambiar idioma a inglés"}
                        onClick={() => setLanguage(language === "en" ? "es" : "en")}
                    >
                        <span className={language === "en" ? "language-option active" : "language-option"}>EN</span>
                        <span className={language === "es" ? "language-option active" : "language-option"}>ES</span>
                        <span className="language-switch-thumb" />
                    </button>
                    <div className="navbar-section menu-toggle">
                        <Hamburger
                            color="currentColor"
                            toggled={open}
                            toggle={setOpen}
                            size={24}
                            label={open ? (language === "en" ? "Close menu" : "Cerrar menú") : (language === "en" ? "Open menu" : "Abrir menú")}
                        />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
