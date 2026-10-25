"use client";

import { useState, useEffect, useRef } from "react";
import { Mail, Moon, Sun, X, ExternalLink, ChevronLeft, ChevronRight, FileText } from "lucide-react";
import { Icons } from "./components/Icons";

interface Project {
  title: string;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  features: string[];
  technologies: { name: string; icon: string }[];
  link?: string;
  github?: string;
  report?: string;
}

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const personalInfo = {
  name: "Juan Pedro Roldán",
  role: "Ingeniería en Sistemas de Información (UTN)\nDesarrollador de Software & Datos.",
  about: "Estudiante avanzado de Ingeniería en Sistemas de Información, a falta de dos materias para graduarme, orientado al desarrollo de software y análisis de datos. Desarrollé plataformas web con Django, Typescript, Next.js, React y PostgreSQL, trabajando con metodologías ágiles. En el área de datos, construí en Python un pipeline de Machine Learning (limpieza, análisis exploratorio, modelado y validación) para predecir el score crediticio de clientes bancarios, sobre 100.000 registros, y un sistema de comprensión visual de escenas que combina modelos de visión y LLMs. Busco una posición en desarrollo de software, análisis o ciencia de datos, donde aplicar mi base en programación y bases de datos.",
  github: "https://github.com/juanro03",
  linkedin: "https://www.linkedin.com/in/juan-pedro-roldan/",
  email: "roldanjuan2003@gmail.com",
  location: "La Pampa, Argentina | Córdoba, Argentina · Remoto",
  avatar: "/perfil.jpg"
};

const skills = [
  { name: "TypeScript", icon: `${DEVICON}/typescript/typescript-original.svg` },
  { name: "React", icon: `${DEVICON}/react/react-original.svg` },
  { name: "Next.js", icon: `${DEVICON}/nextjs/nextjs-original.svg` },
  { name: "Django", icon: `${DEVICON}/django/django-plain.svg` },
  { name: "Java", icon: `${DEVICON}/java/java-original.svg` },
  { name: "Spring", icon: `${DEVICON}/spring/spring-original.svg` },
  { name: "Python", icon: `${DEVICON}/python/python-original.svg` },
  { name: "Pandas", icon: `${DEVICON}/pandas/pandas-original.svg` },
  { name: "NumPy", icon: `${DEVICON}/numpy/numpy-original.svg` },
  { name: "scikit-learn", icon: `${DEVICON}/scikitlearn/scikitlearn-original.svg` },
  { name: "Matplotlib", icon: `${DEVICON}/matplotlib/matplotlib-original.svg` },
  { name: "Jupyter", icon: `${DEVICON}/jupyter/jupyter-original.svg` },
  { name: "PostgreSQL", icon: `${DEVICON}/postgresql/postgresql-original.svg` },
  { name: "MySQL", icon: `${DEVICON}/mysql/mysql-original.svg` },
  { name: "MongoDB", icon: `${DEVICON}/mongodb/mongodb-original.svg` },
  { name: "Supabase", icon: `${DEVICON}/supabase/supabase-original.svg` },
  { name: "Git", icon: `${DEVICON}/git/git-original.svg` },
  { name: "Docker", icon: `${DEVICON}/docker/docker-original.svg` },
];

const projects: Project[] = [
  {
    title: "Clasificación de Score Crediticio de Clientes Bancarios",
    shortDescription: "Machine Learning sobre 100.000 registros: XGBoost alcanzó un F1 macro de 0,78, y la validación por cliente midió el rendimiento real con clientes nuevos.",
    fullDescription: "Proyecto de Ciencia de Datos desarrollado para la cátedra de Ciencia de Datos (UTN FRC), que clasifica a clientes bancarios en tres niveles de riesgo crediticio (Good, Standard y Poor) a partir de sus datos financieros y de su comportamiento de pago.\nEl dataset, con 100.000 registros mensuales de 12.500 clientes, tenía muchos problemas de calidad: valores nulos, edades negativas y números guardados como texto. Diseñé un proceso ETL que imputa cada dato faltante con la información del mismo cliente en otros meses, sin eliminar ninguna fila.\nComparé seis modelos, desde una regresión logística hasta XGBoost, que alcanzó un F1 macro de 0,78. El hallazgo más interesante fue metodológico: como cada cliente aparece varias veces en el dataset, la evaluación tradicional sobreestimaba el rendimiento por fuga de información. Separando los datos por cliente medí el desempeño real con clientes nuevos (F1 ≈ 0,69), una lección clave para cualquier modelo que vaya a producción.",
    images: [
      "/creditscore-modelos.png",
      "/creditscore-eda.png",
      "/creditscore-correlacion.png",
      "/creditscore-matrices.png",
      "/creditscore-importancia.png",
      "/creditscore-clientes-nuevos.png",
    ],
    features: [
      "Limpieza de 100.000 registros con datos faltantes o erróneos, sin perder información.",
      "Análisis exploratorio para descubrir qué distingue a un buen cliente de uno riesgoso.",
      "Comparación de 6 modelos de Machine Learning: XGBoost fue el mejor, con un F1 macro de 0,78.",
      "Ajuste de hiperparámetros y manejo del desbalance de clases (hay muchos más clientes de riesgo medio).",
      "Interpretación del modelo: qué variables pesan más al evaluar a un cliente.",
      "Validación agrupada por cliente para detectar la fuga de información y medir el rendimiento real con clientes nuevos (F1 ≈ 0,69).",
    ],
    technologies: [
      { name: "Python", icon: `${DEVICON}/python/python-original.svg` },
      { name: "Pandas", icon: `${DEVICON}/pandas/pandas-original.svg` },
      { name: "scikit-learn", icon: `${DEVICON}/scikitlearn/scikitlearn-original.svg` },
      { name: "Matplotlib", icon: `${DEVICON}/matplotlib/matplotlib-original.svg` },
      { name: "Jupyter", icon: `${DEVICON}/jupyter/jupyter-original.svg` },
    ],
    link: "https://colab.research.google.com/drive/1-FXmw9MqZ83OvMpkjWD9ZjIaoHdxnsYC?usp=sharing",
    report: "https://drive.google.com/file/d/1XrUDdlQLINg961EMDzx50jYrH3f8fq57/view?usp=sharing",
  },

  {
    title: "Comprensión Visual de Escenas",
    shortDescription: "Pipeline de visión por computadora y LLMs que detecta, segmenta y describe los objetos de una imagen, y responde preguntas sobre la escena.",
    fullDescription: "Trabajo práctico de la cátedra de Inteligencia Artificial (UTN FRC, 2026), presentado como competencia en Kaggle. El objetivo es convertir una fotografía en una representación estructurada de la escena (un JSON con cada objeto, su máscara, posición, tamaño, color y relaciones espaciales) y responder preguntas en lenguaje natural usando solo esa representación.\nLa pipeline encadena tres modelos fundacionales sin reentrenarlos. OWLv2 detecta objetos a partir de sus nombres entre 120 categorías del dataset LVIS (F1 de cajas 0,65). SAM2 recorta la silueta exacta de cada objeto (F1 de máscaras 0,62) y segmenta correctamente el 92 % de las cajas bien detectadas. Por último, un LLM liviano (Qwen2.5-3B) traduce cada pregunta en español a una consulta estructurada, que se valida y se ejecuta con código determinista. Así, el modelo de lenguaje nunca inventa respuestas: si la pregunta no se puede responder, lo dice.\nAntes de modelar, construí un evaluador local con 17 pruebas automáticas que reproduce la política de evaluación de LVIS, y un análisis exploratorio que guió cada decisión: el 54 % de los objetos son pequeños, lo que explica buena parte de los que se pierden. Después corrí 6 experimentos controlados con reglas de decisión fijadas de antemano (un detector más grande, otros umbrales, varias plantillas de texto, otra forma de elegir la categoría). Casi ninguno superó a la línea base, y documentar por qué fue tan valioso como el resultado.",
    images: [
      "/imagen4.png",
      "/imagen3.png",
      "/imagen5.png",
      "/imagen2.png",
      "/imagen1.png",
      "/escenas-deteccion.png",

    ],
    features: [
      "Detección open-vocabulary con OWLv2 sobre 120 categorías, sin reentrenar el modelo.",
      "Segmentación de instancias con SAM2 a partir de las cajas detectadas.",
      "Escena estructurada en JSON, validada contra un schema y con chequeos de consistencia.",
      "Preguntas en lenguaje natural: el LLM traduce y el código responde, sin inventar datos.",
      "Control de los textos del LLM: la fidelidad de las respuestas pasó de 0,60 a 1,00.",
      "Trazabilidad por etapa y análisis de dónde se pierde cada uno de los 1.790 objetos anotados.",
    ],
    technologies: [
      { name: "Python", icon: `${DEVICON}/python/python-original.svg` },
      { name: "PyTorch", icon: `${DEVICON}/pytorch/pytorch-original.svg` },
      { name: "Pandas", icon: `${DEVICON}/pandas/pandas-original.svg` },
      { name: "Jupyter", icon: `${DEVICON}/jupyter/jupyter-original.svg` },
    ],
    github: "https://github.com/juanro03/Comprension_visual_escenas-TP-IA-2026",
  },

  {
    title: "Terrax",
    shortDescription: "Plataforma web para una pyme de servicios con drones agrícolas: lotes, campañas y reportes de cada campo en un solo lugar.",
    fullDescription: "Terrax es mi Proyecto Final de Grado y nace como solución de negocio para una pyme que brinda servicios de monitoreo y aplicación con drones agrícolas.\nLa plataforma permite administrar a los clientes de la empresa, registrar sus campos y lotes, cargar los reportes generados por los drones y tener trazabilidad total de las campañas, los datos y las actividades realizadas sobre cada lote. El productor agropecuario accede a toda esa información desde un solo lugar, lo que le facilita la toma de decisiones.\nEl proyecto se gestionó con Scrum y Jira.",
    images: ["/Login.png", "/Home.png", "/Campos.png", "/Lotes.png", "/Usuarios.png", "/Calculadora.png"],
    features: [
      "Monitoreo de lotes agrícolas.",
      "Carga y visualización de reportes generados por drones.",
      "Planificación de campañas de siembra y cosecha.",
      "Calculadora de caldo para fertilización y fumigación.",
      "Pronósticos meteorológicos y alertas de clima por lote.",
      "Autenticación segura y control de roles de usuario.",
    ],
    technologies: [
      { name: "Python", icon: `${DEVICON}/python/python-original.svg` },
      { name: "Django", icon: `${DEVICON}/django/django-plain.svg` },
      { name: "React", icon: `${DEVICON}/react/react-original.svg` },
      { name: "PostgreSQL", icon: `${DEVICON}/postgresql/postgresql-plain.svg` },
    ],
    github: "https://github.com/juanro03/Terrax_App_PF_G3",
  },

  {
    title: "PampaGol",
    shortDescription: "Sitio en producción con posiciones, resultados, goleadores e historial de todas las ligas de fútbol de La Pampa.",
    fullDescription: "PampaGol es un proyecto personal, en producción, que centraliza la información de la Liga Pampeana de Fútbol.\nSurge ante la falta de un sitio que se actualice de forma constante y muestre todos los torneos: los medios tradicionales suelen desactualizarse y la información queda dispersa en redes sociales. Por ejemplo, si quisiera saber cómo salió un partido del equipo de mi pueblo en 2022, quién hizo los goles o qué equipo salió campeón, tendría que rastrear noticias en Google o ir muy atrás en páginas informativas.\nPor eso decidí guardar lo que ocurre cada fin de semana en cada localidad de la provincia, año tras año, para que cualquiera pueda revivir resultados, goles y campeonatos en un solo lugar. Diseñé el modelo de datos y desarrollé la aplicación de punta a punta.",
    images: ["/pampagol.png", "/PampaInicio.png", "/pampamovil1.png", "/pampamovil2.png", "/pampamovil3.png"],
    features: [
      "Posiciones de todas las ligas y divisiones de la Liga Pampeana de Fútbol.",
      "Resultados fecha por fecha.",
      "Tablas de goleadores.",
      "Historial de torneos y campeonatos pasados.",
      "Foro de debate entre hinchas.",
      "Información de clubes: historia y estadios.",
    ],
    technologies: [
      { name: "TypeScript", icon: `${DEVICON}/typescript/typescript-original.svg` },
      { name: "Next.js", icon: `${DEVICON}/nextjs/nextjs-original.svg` },
      { name: "React", icon: `${DEVICON}/react/react-original.svg` },
      { name: "Supabase", icon: `${DEVICON}/supabase/supabase-original.svg` },
    ],
    link: "https://pampagol.com.ar/",
  },
];

const experience = [
  {
    role: "Administrador de Redes",
    company: "Hospital Privado Universitario de Córdoba",
    date: "Abr. 2025 - Sep. 2026",
    description: "Administré, monitoreé y aseguré la alta disponibilidad de la red de datos de 5 hospitales y más de 20 centros médicos y farmacias de la ciudad de Córdoba: más de 150 switches Aruba / HP / Cisco y más de 30 routers MikroTik / Fortinet. Gestioné la conectividad remota por VPN y los usuarios en Active Directory, documenté la topología, realicé relevamientos, soluciones de capa física y cableado estructurado.\n\nHerramientas utilizadas: Zabbix, Wireshark, FortiClient, OpenVPN, Active Directory, MikroTik, Aruba Central, i-doit."
  }
];

const education = [
  {
    degree: "Ingeniería en Sistemas de Información",
    institution: "Universidad Tecnológica Nacional (UTN FRC)",
    date: "Mar. 2021 - Dic. 2026 (egreso previsto)",
    description: "Promedio: 8,23.\n\nMaterias destacadas: Diseño de Sistemas, Algoritmos, Patrones de Diseño, Arquitectura de Software, Bases de Datos, Redes y Seguridad Informática, Desarrollo Web, Inteligencia Artificial, Ciencia de Datos."
  },
  {
    degree: "Full Stack Developer",
    institution: "Argentina Programa",
    date: "2023",
    description: "Java, Spring Boot, Angular, MySQL."
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
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [projectImageIndexes, setProjectImageIndexes] = useState<Record<string, { current: number; previous: number | null }>>({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const MODAL_DURATION = 300;

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    document.documentElement.style.colorScheme = darkMode ? "dark" : "light";
  }, [darkMode]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setProjectImageIndexes((currentIndexes) => {
        const nextIndexes = { ...currentIndexes };

        for (const project of projects) {
          if (project.images.length > 1) {
            const currentIndex = currentIndexes[project.title]?.current ?? 0;
            nextIndexes[project.title] = {
              current: (currentIndex + 1) % project.images.length,
              previous: currentIndex,
            };
          }
        }

        return nextIndexes;
      });
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, []);

  const openProject = (project: Project) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setSelectedImageIndex(0);
    setSelectedProject(project);
    // Doble rAF: primero se pinta el modal en estado "oculto" y recién después pasa a "visible",
    // así el navegador tiene un estado inicial desde el cual animar
    requestAnimationFrame(() => requestAnimationFrame(() => setIsModalVisible(true)));
  };

  const closeProject = () => {
    setIsModalVisible(false);
    closeTimeout.current = setTimeout(() => setSelectedProject(null), MODAL_DURATION);
  };

  // Cerrar con Escape
  useEffect(() => {
    if (!selectedProject) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeProject();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedProject]);

  // Limpiar el timer si el componente se desmonta
  useEffect(() => () => { if (closeTimeout.current) clearTimeout(closeTimeout.current); }, []);


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
              href="#experiencia"
              onClick={(e) => scrollToSection(e, "experiencia")}
              className={`transition-colors ${darkMode ? "text-neutral-400 hover:text-white" : "text-neutral-500 hover:text-black"}`}
            >
              Experiencia
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
          <p className={`leading-relaxed text-justify ${darkMode ? "text-neutral-400" : "text-neutral-600"}`}>
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
                className={`h-8 grow px-3 flex items-center justify-center gap-2 rounded-xl border transition-colors shadow-sm ${darkMode
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
            <div className="grow-[999]" aria-hidden="true" />
          </div>
        </section>

        {/* Proyectos */}
        <section id="proyectos" className="space-y-6">
          <h2 className="text-xl font-semibold tracking-tight">Proyectos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {projects.map((project, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSelectedImageIndex(projectImageIndexes[project.title]?.current ?? 0);
                  openProject(project);
                }}
                className={`group text-left block rounded-xl border p-4 transition-all cursor-pointer hover:-translate-y-1 ${darkMode ? "border-neutral-800 hover:border-neutral-600 bg-black" : "border-neutral-200 hover:border-neutral-400 bg-white"}`}
              >
                <div className="relative aspect-video w-full overflow-hidden rounded-md mb-4 bg-neutral-900">
                  <img
                    src={project.images[projectImageIndexes[project.title]?.current ?? 0]}
                    alt={`${project.title} - imagen ${(projectImageIndexes[project.title]?.current ?? 0) + 1}`}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {projectImageIndexes[project.title]?.previous !== null &&
                    projectImageIndexes[project.title]?.previous !== undefined && (
                      <img
                        key={`${project.title}-${projectImageIndexes[project.title].previous}-${projectImageIndexes[project.title].current}`}
                        src={project.images[projectImageIndexes[project.title]?.previous ?? 0]}
                        alt=""
                        aria-hidden="true"
                        className="project-image-fade absolute inset-0 h-full w-full object-cover"
                      />
                    )}
                </div>
                <h3 className="font-semibold mb-2 flex items-center justify-between">
                  <span>{project.title}</span>
                  <span className={`text-xs px-2 py-0.5 rounded border ${darkMode ? "border-neutral-800 text-neutral-500" : "border-neutral-200 text-neutral-400"}`}>Ver más</span>
                </h3>
                <p className={`text-sm line-clamp-2 whitespace-pre-line ${darkMode ? "text-neutral-400" : "text-neutral-600"}`}>
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {project.technologies.map((tech) => (
                    <div key={tech.name}
                      className={`h-7 px-2.5 flex items-center gap-1.5 rounded-lg border transition-colors shadow-sm ${darkMode
                        ? "bg-neutral-900/50 border-neutral-800 text-neutral-300"
                        : "bg-neutral-50 border-neutral-200 text-neutral-700"
                        }`}
                    >
                      <img src={tech.icon} alt={tech.name} className="w-3.5 h-3.5 object-contain" />
                      <span className="text-xs font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Experiencia */}
        <section id="experiencia" className="space-y-6">
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
          <h2 className="text-xl font-semibold tracking-tight">Formación</h2>
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
        <div onClick={closeProject} className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ease-out motion-reduce:transition-none ${isModalVisible ? "opacity-100" : "opacity-0"}`}
        >
          <div onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label={selectedProject.title}
            className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border p-6 sm:p-8 shadow-2xl
        transition-all duration-300 ease-out motion-reduce:transition-none
        ${isModalVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4"}
        ${darkMode ? "bg-neutral-950 border-neutral-800 text-white" : "bg-white border-neutral-200 text-black"}`}
          >
            {/* Botón Cerrar */}
            <button
              onClick={closeProject}
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

            {/* Carrusel de imágenes */}
            <div className="mt-6">
              <div
                className="relative w-full rounded-xl overflow-hidden bg-black border border-neutral-800"
                style={{ aspectRatio: "16 / 9" }}
              >
                {/* Imágenes apiladas: solo la seleccionada es visible */}
                {selectedProject.images.map((image, index) => (
                  <div
                    key={`${image}-${index}`}
                    aria-hidden={index !== selectedImageIndex}
                    className={`absolute inset-0 transition-opacity duration-500 ease-in-out motion-reduce:transition-none ${index === selectedImageIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                      }`}
                  >
                    {/* Fondo: la misma imagen, ampliada y desenfocada */}
                    <img
                      src={image}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl brightness-75 saturate-150"
                    />
                    {/* Imagen principal, completa y nítida */}
                    <img
                      src={image}
                      alt={`${selectedProject.title} - imagen ${index + 1}`}
                      className="relative w-full h-full object-contain drop-shadow-2xl"
                    />
                  </div>
                ))}

                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() => setSelectedImageIndex((index) => (index - 1 + selectedProject.images.length) % selectedProject.images.length)}
                      aria-label="Imagen anterior"
                      className="absolute z-20 left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/70 p-2 text-white transition-colors hover:bg-black"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedImageIndex((index) => (index + 1) % selectedProject.images.length)}
                      aria-label="Imagen siguiente"
                      className="absolute z-20 right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/70 p-2 text-white transition-colors hover:bg-black"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
              </div>

              {selectedProject.images.length > 1 && (
                <div className="mt-3 flex justify-center gap-2" aria-label="Seleccionar imagen del proyecto">
                  {selectedProject.images.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setSelectedImageIndex(index)}
                      aria-label={`Mostrar imagen ${index + 1}`}
                      aria-current={index === selectedImageIndex ? "true" : undefined}
                      className={`h-2 rounded-full transition-all ${index === selectedImageIndex ? "w-6 bg-neutral-500" : "w-2 bg-neutral-700 hover:bg-neutral-500"}`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Enlaces externos opcionales */}
            {(selectedProject.link || selectedProject.github || selectedProject.report) && (
              <div className="mt-8 pt-4 border-t border-neutral-800 flex gap-4">
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-medium underline underline-offset-4 hover:opacity-80"
                  >
                    Link al proyecto <ExternalLink size={14} />
                  </a>
                )}
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-medium underline underline-offset-4 hover:opacity-80"
                  >
                    Link al Repositorio <ExternalLink size={14} />
                  </a>
                )}
                {selectedProject.report && (
                  <a
                    href={selectedProject.report}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-medium underline underline-offset-4 hover:opacity-80"
                  >
                    Link al Informe PDF <ExternalLink size={14} />
                  </a>
                )}
              </div>
            )}

            {/* Descripción detallada */}
            <div className="mt-6 space-y-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">Descripción</h3>
              <p className={`text-base leading-relaxed whitespace-pre-line text-justify hyphens-auto ${darkMode ? "text-neutral-300" : "text-neutral-700"}`}>
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
            <div className="mt-6 space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">Tecnologías utilizadas</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className={`h-8 w-fit px-3 flex items-center gap-2 rounded-xl border transition-colors shadow-sm ${darkMode
                      ? "bg-black border-neutral-800 ring-2 ring-neutral-800/40 text-neutral-200"
                      : "bg-white border-neutral-200 ring-2 ring-neutral-200/40 text-neutral-800"
                      }`}
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-4 h-4 object-contain"
                    />
                    <span className="text-sm font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>



          </div>
        </div>
      )}

    </div>
  );
}