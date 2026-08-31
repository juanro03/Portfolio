"use client";

import { useState, useEffect } from "react";
import { Mail, Moon, Sun, X, ExternalLink } from "lucide-react";
import { Icons } from "./components/Icons";

interface Project {
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  videoUrl?: string; // Ruta al archivo de video en /public o link directo
  features: string[];
  technologies: string[];
  link?: string;
  github?: string;
}

const personalInfo = {
  name: "Juan Pedro Roldán",
  role: "Ingeniería en Sistemas de Información (UTN)\nFull Stack Developer | Network Administrator",
  about: "Soy Juan, tengo 23 años y soy estudiante en el último año de Ingeniería en Sistemas de Información. Me especializo en el desarrollo Full Stack, combinando experiencia práctica en administración de infraestructura de redes con desarrollo de software. Me encuentro en la búsqueda activa de nuevas oportunidades que me permitan desplegar mi conocimiento a lo largo de mi formación en desarrollo, arquitecturas, manejos de bases de datos, aportando mi responsabilidad y pasión por el desarrollo de software.",
  github: "https://github.com/juanro03",
  linkedin: "https://www.linkedin.com/in/juan-pedro-roldan/",
  email: "roldanjuan2003@gmail.com",
  location: "Córdoba, Argentina",
  avatar: "/perfil.jpg"
};

const skills = [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
];

const projects: Project[] = [
  {
    title: "Terrax",
    shortDescription: "Aplicación integral de gestión agrícola.",
    fullDescription: "Terrax surge como una solución de negocio a una Pyme que brinda servicios de monitoreo y aplicación con drones agrícolas. La misma permite administrar usuarios a los cuales la empresa brinda servicios, poder registrar sus lotes, cargar reportes y tener una trazabilidad total de todas las campañas, datos y actividades realizadas sobre cada lote agrícola. Permite al agricultor visualizar toda la información, facilitando la toma de decisiones.",
    image: "https://images.unsplash.com/photo-1628102491629-77858ab215b2?w=800&q=80",
    videoUrl: "/videos/terrax-demo.mp4",
    features: [
      "Monitoreo de lotes agrícolas",
      "Carga y visualización de reportes generados por drones.",
      "Planificación de campañas de siembra y cosecha.",
      "Calculadora de caldo para fertilización y fumigación.",
      "Visualización de pronosticos meteorológicos y alertas de clima en lotes.",
      "Autenticación segura y control de roles de usuario."
    ],
    technologies: ["Python", "Django", "React", "PostgreSQL"],
    github: "https://github.com/juanro03/Terrax_App_PF_G3"
  },
  {
    title: "PampaGol",
    shortDescription: "Website con información de la Liga Pampeana de fútbol. Posiciones, Resultados, Noticias, Goleadores, Clubes, Foro de debates entre hinchas. Inspirado en la antigua página de 'Promiedos'",
    fullDescription: "Website con información de la Liga Pampeana de fútbol.\nSurge ante la falta de un sitio actualizado constantemente que permita visualizar todos los torneos, ya que los medios tradicionales suelen desactualizarse o la información queda dispersa en redes sociales. Por ejemplo, si me interesara ver como salió un partido del equipo de mi pueblo en el año 2022, quien hizo los goles, o qué equipo salió campeón, normalmente tendría que ir a buscar noticias en Google o ir muy atrás en en el tiempo en páginas informativas.\nMe pareció una exelente idea persistir lo que ocurre cada fin de semana en cada localidad de la provincia, año tras año, y que las personas que el día de mañana quieran revivir un recuerdo, goles, fechas, resultados o campeonatos, puedan hacerlo en un solo lugar.",
    image: "./pampagol.png",
    videoUrl: "/videos/datascience-demo.mp4",
    features: [
      "Posiciones de todas las Ligas y divisiones de la Liga Pampeana de Fútbol.",
      "Resultados fecha por fecha.",
      "Tablas de goleadores.",
      "Persistencia de torneos y campeonatos pasados.",
      "Foro de debates entre hinchas.",
      "Información de clubes, historia, estadios.",
    ],
    technologies: ["Next.js", "React"],
    link: "https://pampagol.vercel.app/"
  }
];

const experience = [
  {
    role: "Administrador de Redes",
    company: "Hospital Privado de Córdoba",
    date: "Abril 2025 - Agosto 2026",
    description: "Administrar, monitorear y asegurar la alta disponibilidad de la red de datos hospitalaria que abarca 5 hospitales, centros médicos, y farmacias en toda la ciudad de Córdoba, a cargo de una topología de más de 100 equipos de redes, entre ellos switches Aruba/3com, routers Mikrotik, firewalls Fortinet, access points Aruba, Ubiquity. Relevamientos y soluciones de capa física, cableado estructurado.\n\nHerramientas utilizadas: Zabbix, Wireshark, OpenVPN, Mikrotik, Aruba Central, iDoit."
  }
];

const education = [
  {
    degree: "Ingeniería en Sistemas de Información",
    institution: "Universidad Tecnológica Nacional (UTN FRC)",
    date: "2021 - Dic. 2026",
    description: "Promedio: 8,23.\n\nAprendrizaje: Diseño de Sistemas, Algortimos, Patrones de Diseño, Arquitectura de Software, Bases de Datos, Redes y Seguridad Informática, Desarrollo Web, Inteligencia Artificial, Ciencia de Datos."
  }
];

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedProject]);

  if (!mounted) return null;

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>

      {/* Header */}
      <header className={`flex justify-between items-center max-w-3xl mx-auto p-4 sm:p-3 sticky top-0 z-40 backdrop-blur-md border-b transition-colors duration-300 ${darkMode
        ? "bg-black/70 border-neutral-800/40 text-white"
        : "bg-white/70 border-neutral-200/40 text-black"
        }`}>        <div className="flex items-center gap-6 sm:gap-8">
          {/* Navegación */}
          <nav className="flex items-center gap-4 sm:gap-6 text-sm font-medium">
            <a
              href="#inicio"
              onClick={(e) => scrollToSection(e, "inicio")}
              className={`transition-colors ${darkMode ? "text-neutral-400 hover:text-white" : "text-neutral-500 hover:text-black"}`}
            >
              Inicio
            </a>
            <a
              href="#proyectos"
              onClick={(e) => scrollToSection(e, "proyectos")}
              className={`transition-colors ${darkMode ? "text-neutral-400 hover:text-white" : "text-neutral-500 hover:text-black"}`}
            >
              Proyectos
            </a>
            <a
              href="#formacion"
              onClick={(e) => scrollToSection(e, "formacion")}
              className={`transition-colors ${darkMode ? "text-neutral-400 hover:text-white" : "text-neutral-500 hover:text-black"}`}
            >
              Formación
            </a>
          </nav>
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 rounded-full transition-colors ${darkMode ? "hover:bg-neutral-800 text-neutral-400 hover:text-white" : "hover:bg-neutral-100 text-neutral-600 hover:text-black"}`}
          aria-label="Cambiar tema"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </header>

      <main className="max-w-3xl mx-auto px-6 sm:px-8 pb-24 space-y-20">

        {/* Perfil */}
        <section id="inicio" className="flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-8 pt-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">{personalInfo.name}</h1>
            <p className={`text-lg font-medium whitespace-pre-line`}>
              {personalInfo.role}
            </p>
            <div className={`flex items-center gap-1.5 text-xs font-mono tracking-tight ${darkMode ? "text-neutral-400 hover:text-white" : "text-neutral-600 hover:text-black"}`}>
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{personalInfo.location}</span>
            </div>

            {/* Fila de Redes y Correo perfectamente alineados */}
            <div className="flex flex-wrap items-center gap-4 pt-1 text-sm">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub" className={`transition-colors ${darkMode ? "text-neutral-400 hover:text-white" : "text-neutral-500 hover:text-black"}`}>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={`transition-colors ${darkMode ? "text-neutral-400 hover:text-white" : "text-neutral-500 hover:text-black"}`}>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
                </svg>
              </a>
              <div className={`h-4 w-px ${darkMode ? "bg-neutral-800" : "bg-neutral-200"}`} />
              <a href={`mailto:${personalInfo.email}`} className={`flex items-center gap-1.5 transition-colors font-mono text-xs ${darkMode ? "text-neutral-400 hover:text-white" : "text-neutral-600 hover:text-black"}`}>
                <Mail size={15} />
                <span>{personalInfo.email}</span>
              </a>
            </div>
          </div>
          <div className="w-28 h-28 sm:w-40 sm:h-40 relative rounded-full overflow-hidden border border-neutral-800 shrink-0 bg-neutral-900 shadow-inner">
            <img src={personalInfo.avatar} alt={personalInfo.name} className="object-cover object-top w-full h-full grayscale-[15%] hover:grayscale-0 transition-all duration-300" />
          </div>
        </section>

        {/* Sobre mí */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">Sobre mí</h2>
          <p className={`leading-relaxed ${darkMode ? "text-neutral-400" : "text-neutral-600"}`}>
            {personalInfo.about}
          </p>
        </section>

        {/* Sección: Conocimientos */}
        <section id="conocimientos" className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">Conocimientos</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, id) => (
              <div
                key={skill.name}
                className={`h-8 w-fit px-3 flex items-center gap-2 rounded-xl border transition-colors shadow-sm ${darkMode
                    ? "bg-black border-neutral-800 ring-2 ring-neutral-800/40 text-neutral-200"
                    : "bg-white border-neutral-200 ring-2 ring-neutral-200/40 text-neutral-800"
                  }`}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-4 h-4 object-contain"
                />
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Proyectos */}
        <section id="proyectos" className="space-y-6">
          <h2 className="text-xl font-semibold tracking-tight">Proyectos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {projects.map((project, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedProject(project)}
                className={`group text-left block rounded-xl border p-4 transition-all cursor-pointer hover:-translate-y-1 ${darkMode ? "border-neutral-800 hover:border-neutral-600 bg-black" : "border-neutral-200 hover:border-neutral-400 bg-white"}`}
              >
                <div className="aspect-video w-full overflow-hidden rounded-md mb-4 bg-neutral-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-semibold mb-2 flex items-center justify-between">
                  <span>{project.title}</span>
                  <span className={`text-xs px-2 py-0.5 rounded border ${darkMode ? "border-neutral-800 text-neutral-500" : "border-neutral-200 text-neutral-400"}`}>Ver más</span>
                </h3>
                <p className={`text-sm line-clamp-2 whitespace-pre-line ${darkMode ? "text-neutral-400" : "text-neutral-600"}`}>
                  {project.shortDescription}
                </p>
              </button>
            ))}
          </div>
        </section>

        {/* Experiencia */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold tracking-tight">Experiencia</h2>
          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4 border-l border-neutral-800 pl-4">
                <div className="space-y-1">
                  <h3 className="font-medium">{exp.role}</h3>
                  <p className="text-sm text-neutral-500">{exp.company}</p>
                  <p className={`text-sm mt-2 max-w-xl whitespace-pre-line ${darkMode ? "text-neutral-400" : "text-neutral-600"}`}>{exp.description}</p>
                </div>
                <span className="text-sm shrink-0 text-neutral-500">{exp.date}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Educación */}
        <section id="formacion" className="space-y-6">
          <h2 className="text-xl font-semibold tracking-tight">Educación</h2>
          <div className="space-y-8">
            {education.map((edu, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4 border-l border-neutral-800 pl-4">
                <div className="space-y-1">
                  <h3 className="font-medium">{edu.degree}</h3>
                  <p className="text-sm text-neutral-500">{edu.institution}</p>
                  <p className={`text-sm mt-2 max-w-xl whitespace-pre-line ${darkMode ? "text-neutral-400" : "text-neutral-600"}`}>{edu.description}</p>
                </div>
                <span className="text-sm shrink-0 text-neutral-500">{edu.date}</span>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* MODAL DETALLADO DE PROYECTO */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border p-6 sm:p-8 shadow-2xl ${darkMode ? "bg-neutral-950 border-neutral-800 text-white" : "bg-white border-neutral-200 text-black"
              }`}
          >
            {/* Botón Cerrar */}
            <button
              onClick={() => setSelectedProject(null)}
              className={`absolute top-5 right-5 p-2 rounded-full transition-colors ${darkMode ? "hover:bg-neutral-800 text-neutral-400 hover:text-white" : "hover:bg-neutral-100 text-neutral-500 hover:text-black"
                }`}
              aria-label="Cerrar modal"
            >
              <X size={20} />
            </button>

            {/* Título */}
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight pr-10">
              {selectedProject.title}
            </h2>

            {/* Video o Imagen de fallback */}
            <div className="mt-6 aspect-video w-full rounded-xl overflow-hidden bg-black border border-neutral-800">
              {selectedProject.videoUrl ? (
                <video
                  controls
                  className="w-full h-full object-cover"
                  poster={selectedProject.image}
                >
                  <source src={selectedProject.videoUrl} type="video/mp4" />
                  Tu navegador no soporta reproducción de videos.
                </video>
              ) : (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Descripción detallada */}
            <div className="mt-6 space-y-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">Descripción</h3>
              <p className={`text-base leading-relaxed whitespace-pre-line ${darkMode ? "text-neutral-300" : "text-neutral-700"}`}>
                {selectedProject.fullDescription}
              </p>
            </div>

            {/* Funcionalidades */}
            {selectedProject.features?.length > 0 && (
              <div className="mt-6 space-y-2">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">Funcionalidades principales</h3>
                <ul className="space-y-1.5 list-disc list-inside text-sm">
                  {selectedProject.features.map((feat, index) => (
                    <li key={index} className={darkMode ? "text-neutral-300" : "text-neutral-700"}>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tecnologías */}
            <div className="mt-6 space-y-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">Tecnologías utilizadas</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`text-xs px-2.5 py-1 rounded-md border font-mono ${darkMode ? "border-neutral-800 bg-neutral-900 text-neutral-300" : "border-neutral-200 bg-neutral-100 text-neutral-700"
                      }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Enlaces externos opcionales */}
            {(selectedProject.link || selectedProject.github) && (
              <div className="mt-8 pt-4 border-t border-neutral-800 flex gap-4">
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-medium underline underline-offset-4 hover:opacity-80"
                  >
                    Ver deploy en vivo <ExternalLink size={14} />
                  </a>
                )}
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-medium underline underline-offset-4 hover:opacity-80"
                  >
                    Repositorio GitHub <ExternalLink size={14} />
                  </a>
                )}
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}