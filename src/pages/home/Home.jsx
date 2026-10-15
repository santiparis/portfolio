import "./Home.css";
import { useContext, useState } from "react";
import { FaArrowDown, FaArrowRight, FaCode, FaGithub, FaLinkedin, FaRegCopy, FaWhatsapp } from "react-icons/fa";
import { MdArrowOutward, MdDesignServices } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";
import LanguageContext from "../../LanguageContext.jsx";

const experience = [
    {
        date: { en: "May 2025 - PRESENT", es: "Mayo de 2025 - ACTUALIDAD" },
        role: { en: "QA Engineer", es: "Especialista en QA" },
        company: "Accenture",
        description: {
            en: "Developed and maintained automated tests using TypeScript and Playwright, contributing to a large-scale project involving over 10,000 test cases. Validated SQL Server databases and BI platforms (Power BI and Qlik Sense), tracked software defects, and collaborated in Agile teams.",
            es: "Desarrollé y mantuve pruebas automatizadas con TypeScript y Playwright para un proyecto a gran escala con más de 10.000 casos de prueba. Validé bases de datos SQL Server y plataformas de inteligencia de negocios (Power BI y Qlik Sense), registré defectos de software y colaboré con equipos ágiles.",
        },
    },
    {
        date: { en: "April 2026 - PRESENT", es: "Abril de 2026 - ACTUALIDAD" },
        role: { en: "Embedded Systems Developer", es: "Desarrollador de sistemas embebidos" },
        company: "GIAR - UTN FRBA",
        description: {
            en: "Selected for a student research and development scholarship in the field of space systems. Contributing to the development of the flight system for a CubeSat onboard computer, with a focus on embedded software programming.",
            es: "Seleccionado para una beca estudiantil de investigación y desarrollo en sistemas espaciales. Colaboro en el desarrollo del sistema de vuelo de la computadora a bordo de un CubeSat, con foco en la programación de software embebido.",
        },
    }
];

const education = [
    {
        title: { en: "Systems Engineering", es: "Ingeniería en Sistemas de Información" },
        type: { en: "Engineering", es: "Universidad" },
        date: { en: "March 2023 - PRESENT (2028 estimated graduation date)", es: "Marzo de 2023 - ACTUALIDAD (graduación estimada: 2028)" },
        institution: { en: "UTN FR Buenos Aires", es: "UTN Facultad Regional Buenos Aires" },
        description: {
            en: "Pursuing a degree in Information Systems Engineering at UTN Buenos Aires, with a current GPA of 8.30/10. Developing a strong foundation in software engineering, programming, databases, operating systems, and systems architecture.",
            es: "Estudio Ingeniería en Sistemas de Información en la UTN Buenos Aires y tengo un promedio actual de 8,30/10. Estoy desarrollando una sólida base en ingeniería de software, programación, bases de datos, sistemas operativos y arquitectura de sistemas.",
        },
    },
    {
        title: { en: "Electronic Technician", es: "Técnico Electrónico" },
        type: { en: "High School", es: "Educación secundaria" },
        date: { en: "March 2013 - November 2019", es: "Marzo de 2013 - noviembre de 2019" },
        institution: { en: "E.E.S.T. N4 - 1ra Brigada Aérea Argentina", es: "E.E.S.T. N.º 4 - 1.ª Brigada Aérea Argentina" },
        description: {
            en: "Technical high school education specializing in Electronics, with a focus on Communications and Avionics.",
            es: "Formación técnica secundaria con especialización en Electrónica y orientación en Comunicaciones y Aviónica.",
        },
    },
    {
        title: { en: "QA Automation Bootcamp", es: "Curso Intensivo de Automatización de QA" },
        type: { en: "Bootcamp", es: "Curso Intensivo" },
        date: { en: "March 2025 - April 2025", es: "Marzo de 2025 - abril de 2025" },
        institution: { en: "Accenture", es: "Accenture" },
        description: {
            en: "Accenture provided me with the opportunity to participate in a QA Automation bootcamp, where I developed the technical skills and knowledge required for the role. Throughout the program, my performance was evaluated, and I distinguished myself as one of the top-performing participants.",
            es: "Accenture me brindó la oportunidad de participar en un bootcamp de QA Automation, donde adquirí las habilidades técnicas y los conocimientos necesarios para desempeñarme en el rol. A lo largo del programa, mi desempeño fue evaluado y me destaqué como uno de los participantes con mejores resultados.",
        },
    },
];

const projects = [
    {
        number: "01",
        title: "DonaTrack",
        type: { en: "Web Page", es: "Aplicación web" },
        category: { en: "JAVA · FULL STACK", es: "JAVA · DESARROLLO FULL STACK" },
        description: {
            en: "DonaTrack is a donation management and logistics platform built using a microservices architecture. Developed as a university project in collaboration with four other students, it leverages technologies such as Java, Hibernate for persistence, and JUnit for unit and integration testing. The platform focuses on managing donations and coordinating logistics processes through modular, independently structured services.",
            es: "DonaTrack es una plataforma de gestión de donaciones y logística basada en una arquitectura de microservicios. La desarrollé como proyecto universitario junto con otros cuatro estudiantes, utilizando tecnologías como Java, Hibernate para la persistencia y JUnit para pruebas unitarias y de integración. La plataforma permite administrar donaciones y coordinar procesos logísticos mediante servicios modulares e independientes.",
        },
        icon: <MdDesignServices aria-hidden="true" />,
        link: "https://github.com/santiparis/dona-track",
    },
    {
        number: "02",
        title: "Sweet Medical",
        type: { en: "Web Page", es: "Aplicación web" },
        category: { en: "FULL STACK · MERN", es: "DESARROLLO FULL STACK · MERN" },
        description: {
            en: "Sweet Medical is a full-stack web application developed as a university project in collaboration with fellow students. It simulates a healthcare provider platform, allowing users to search for healthcare professionals, manage appointments, and schedule medical consultations. The application is built using the MERN stack (MongoDB, Express.js, React, and Node.js).",
            es: "Sweet Medical es una aplicación web full stack desarrollada como proyecto universitario en colaboración con otros estudiantes. Simula una plataforma de servicios de salud donde se pueden buscar profesionales, administrar turnos y programar consultas médicas. Está construida con el stack MERN (MongoDB, Express.js, React y Node.js).",
        },
        icon: <MdDesignServices aria-hidden="true" />,
        link: "https://example.com",
    },
    {
        number: "03",
        title: { en: "Personal Portfolio", es: "Portafolio personal" },
        type: { en: "Web Page", es: "Aplicación web" },
        category: { en: "FRONTEND · REACT", es: "DESARROLLO FRONTEND · REACT" },
        description: {
            en: "A clear, responsive interface for presenting a professional background and selected work.",
            es: "Una interfaz clara y adaptable para presentar mi trayectoria profesional y una selección de proyectos.",
        },
        icon: <MdDesignServices aria-hidden="true" />,
        link: "https://example@example.com",
    },
    {
        number: "04",
        title: { en: "License Plate Reader", es: "Lector de patentes" },
        type: { en: "Machine Learning", es: "Aprendizaje automático" },
        category: { en: "IMAGE ANALYSIS · MACHINE LEARNING", es: "ANÁLISIS DE IMÁGENES · APRENDIZAJE AUTOMÁTICO" },
        description: {
            en: "License plate reader implemented in Python using machine learning, vertical and horizontal projections, and connected component analysis.",
            es: "Lector de patentes implementado en Python mediante aprendizaje automático, proyecciones verticales y horizontales, y análisis de componentes conectados.",
        },
        icon: <GiArtificialIntelligence aria-hidden="true" />,
        link: "https://github.com/santiparis/LP_reader",
    },
    {
        number: "05",
        title: "Blackboard",
        type: { en: "C++ Project", es: "Proyecto en C++" },
        category: { en: "GRAPHIC INTERFACE · SDL2", es: "INTERFAZ GRÁFICA · SDL2" },
        description: {
            en: "A minimalistic blackboard app made in C++ with the SDL2 library.",
            es: "Una aplicación minimalista de pizarra desarrollada en C++ con la biblioteca SDL2.",
        },
        icon: <MdDesignServices aria-hidden="true" />,
        link: "https://github.com/santiparis/blackboard",
    }
];

const content = {
    en: {
        heroIntro: "Hello, I’m",
        heroDescription: "Systems Engineering student and Electronic Technician with professional experience in Quality Assurance (QA) and test automation. Seeking to grow as a Software Engineer by applying my programming skills, expanding my technical expertise, and contributing to software development projects.",
        exploreProjects: "Explore projects",
        aboutMe: "About me",
        scrollCue: "SCROLL TO EXPLORE",
        profileLabel: "01 / PROFILE",
        aboutHeading: "About me.",
        profileHeading: "Personal Profile.",
        profileLead: "I enjoy learning, exploring new technologies, and turning ideas into meaningful digital experiences.",
        profileDetail: "I enjoy exploring different areas of IT, from software development and test automation to databases and embedded systems. Each experience helps me expand my knowledge, approach problems from different perspectives, and grow as a software engineer.",
        skillsLabel: "Technologies",
        experienceLabel: "02 / EXPERIENCE",
        experienceHeading: "My journey.",
        educationLabel: "03 / EDUCATION",
        educationHeading: "Learning path.",
        projectsLabel: "04 / PROJECTS",
        projectsHeading: "Personal Projects.",
        preview: "Preview",
        contactLabel: "CONTACT",
        contactHeading: "Let’s make",
        contactSubheading: "something matter.",
        copyEmail: "Copy email address",
        emailCopied: "Email copied",
        emailCopyError: "Could not copy email",
        whatsapp: "WhatsApp",
        linkedIn: "LinkedIn profile",
        github: "GitHub profile",
        footer: "PERSONAL PORTFOLIO · 2026",
    },
    es: {
        heroIntro: "Hola, soy",
        heroDescription: "Estudiante de Ingeniería en Sistemas de Información y técnico electrónico, con experiencia profesional en aseguramiento de la calidad (QA) y automatización de pruebas. Busco crecer como ingeniero de software, aplicando mis conocimientos de programación, ampliando mi experiencia técnica y contribuyendo a proyectos de desarrollo de software.",
        exploreProjects: "Ver proyectos",
        aboutMe: "Sobre mí",
        scrollCue: "DESLIZA PARA EXPLORAR",
        profileLabel: "01 / PERFIL",
        aboutHeading: "Sobre mí.",
        profileHeading: "Perfil personal.",
        profileLead: "Disfruto aprender, explorar nuevas tecnologías y convertir ideas en experiencias digitales significativas.",
        profileDetail: "Me interesa explorar distintas áreas de la informática, desde el desarrollo de software y la automatización de pruebas hasta las bases de datos y los sistemas embebidos. Cada experiencia amplía mis conocimientos, me ayuda a abordar problemas desde diferentes perspectivas y me permite crecer como ingeniero de software.",
        skillsLabel: "Tecnologías",
        experienceLabel: "02 / EXPERIENCIA",
        experienceHeading: "Mi recorrido.",
        educationLabel: "03 / EDUCACIÓN",
        educationHeading: "Formación.",
        projectsLabel: "04 / PROYECTOS",
        projectsHeading: "Proyectos personales.",
        preview: "Ver proyecto",
        contactLabel: "CONTACTO",
        contactHeading: "Hagamos",
        contactSubheading: "algo que importe.",
        copyEmail: "Copiar dirección de correo",
        emailCopied: "Correo copiado",
        emailCopyError: "No se pudo copiar el correo",
        whatsapp: "WhatsApp",
        linkedIn: "Perfil de LinkedIn",
        github: "Perfil de GitHub",
        footer: "PORTAFOLIO PERSONAL · 2026",
    },
};

const skills = ["JavaScript", "TypeScript", "Java", "React", "Node.js", "Express", "MongoDB", "SQL", "Hibernate", "Git", "HTML & CSS"];
const emailAddress = "parispueblasantiago@gmail.com";

const Home = () => {
    const { language } = useContext(LanguageContext);
    const [copyStatus, setCopyStatus] = useState("");
    const [hasProfilePhoto, setHasProfilePhoto] = useState(false);
    const text = content[language];

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(emailAddress);
            setCopyStatus(text.emailCopied);
        } catch {
            setCopyStatus(text.emailCopyError);
        }
    };

    return (
    <div className="home-page" lang={language}>
        <section className="hero section-wrap" id="inicio">
            <div className="hero-copy">
                <h1>{text.heroIntro}<br /><span>Santiago Paris</span><br />Puebla.</h1>
                <p className="hero-description">{text.heroDescription}</p>
                <div className="hero-actions">
                    <a className="button button-primary" href="#projects">{text.exploreProjects} <FaArrowRight aria-hidden="true" /></a>
                    <a className="text-link" href="#profile">{text.aboutMe} <FaArrowDown aria-hidden="true" /></a>
                </div>
            </div>
            <div className={`hero-art${hasProfilePhoto ? " has-profile-photo" : ""}`}>
                <img
                    className="hero-photo"
                    src={`${import.meta.env.BASE_URL}profile.jpg`}
                    alt={language === "en" ? "Portrait of Santiago Paris Puebla" : "Foto de Santiago Paris Puebla"}
                    onLoad={() => setHasProfilePhoto(true)}
                    onError={() => setHasProfilePhoto(false)}
                />
                <div className="art-ring art-ring-outer" />
                <div className="art-ring art-ring-inner" />
                <div className="art-core"><FaCode aria-hidden="true" /></div>
                <span className="art-cross cross-one">+</span>
                <span className="art-cross cross-two">+</span>
                <span className="art-index">01 / 04</span>
            </div>
            <a className="scroll-cue" href="#profile"><span /> {text.scrollCue}</a>
        </section>

        <section className="profile-section section-wrap" id="profile">
            <div className="section-heading">
                <p className="eyebrow">{text.profileLabel}</p>
                <h2>{text.aboutHeading}<br /><span>{text.profileHeading}</span></h2>
            </div>
            <div className="profile-content">
                <p className="profile-lead">{text.profileLead}</p>
                <p className="profile-detail">{text.profileDetail}</p>
                <div className="skill-list" aria-label={text.skillsLabel}>
                    {skills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
            </div>
        </section>

        <section className="experience-section" id="experience">
            <div className="section-wrap">
                <div className="section-heading section-heading-row">
                    <div><p className="eyebrow">{text.experienceLabel}</p><h2>{text.experienceHeading}</h2></div>
                </div>
                <div className="timeline">
                    {experience.map((item) => (
                        <article className="timeline-item" key={item.role}>
                            <span className="timeline-marker" />
                            <p className="timeline-date">{item.date[language]}</p>
                            <div><h3>{item.role[language]}</h3><p className="timeline-company">{item.company}</p><p className="timeline-description">{item.description[language]}</p></div>
                        </article>
                    ))}
                </div>
            </div>
        </section>

        <section className="education-section section-wrap" id="education">
            <div className="education-label"><p className="eyebrow">{text.educationLabel}</p><h2>{text.educationHeading}</h2></div>
            <div className="education-list">
                {education.map((education) =>
                    <article className="education-entry" key={education.title}>
                        <span className="education-icon"><MdDesignServices aria-hidden="true" /></span>
                        <div><p className="timeline-date">{education.type[language]}</p><h3>{education.title[language]}</h3><p className="timeline-company">{education.institution[language]} · {education.date[language]}</p><p className="timeline-description">{education.description[language]}</p></div>
                        <MdArrowOutward className="education-arrow" aria-hidden="true" />
                    </article>
                )}
            </div>
        </section>

        <section className="projects-section" id="projects">
            <div className="section-wrap">
                <div className="section-heading section-heading-row">
                    <div><p className="eyebrow">{text.projectsLabel}</p><h2>{text.projectsHeading}</h2></div>
                </div>
                <div className="project-grid">
                    {projects.map(project =>
                        <article className="project-card" key={project.number}>
                            <div className="project-card-top"><span>{project.number} / {project.type[language]}</span><span className="project-icon">{project.icon}</span></div>
                            <p className="project-category">{typeof project.category === "string" ? project.category : project.category[language]}</p>
                            <h3>{typeof project.title === "string" ? project.title : project.title[language]}</h3>
                            <p className="project-description">{project.description[language]}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer"><span className="project-link">{text.preview} <MdArrowOutward aria-hidden="true" /></span></a>
                        </article>
                    )}
                </div>
            </div>
        </section>

        <footer className="contact-section" id="contact">
            <div className="section-wrap contact-inner">
                <div><p className="eyebrow">{text.contactLabel}</p><h2>{text.contactHeading}<br /><span>{text.contactSubheading}</span></h2></div>
                <div className="contact-side">
                    <div className="email-actions">
                        <a className="email-link" href={`mailto:${emailAddress}`}>{emailAddress}</a>
                        <button className="copy-email-button" type="button" aria-label={text.copyEmail} title={text.copyEmail} onClick={copyEmail}><FaRegCopy aria-hidden="true" /></button>
                        <span className="email-copy-status" aria-live="polite">{copyStatus}</span>
                    </div>
                    <p><a className="whatsapp-link" href="https://wa.me/5491122507176" target="_blank"><FaWhatsapp aria-hidden="true" /> {text.whatsapp} <MdArrowOutward aria-hidden="true" /></a></p>
                    <div className="social-links"><a href="https://www.linkedin.com/in/santiago-paris-puebla" target="_blank" rel="noopener noreferrer" aria-label={text.linkedIn}><FaLinkedin /></a><a href="https://github.com/santiparis" target="_blank" rel="noopener noreferrer" aria-label={text.github}><FaGithub /></a></div>
                </div>
                <div className="footer-bottom"><span>SANTIAGO PARIS PUEBLA</span><span>{text.footer}</span></div>
            </div>
        </footer>
    </div>
    );
};

export default Home;
