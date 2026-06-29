// ================================================================
// 1. DATOS - TODO ES MODIFICABLE Y ESCALABLE
//    Añade, quita o edita campos libremente.
// ================================================================

const CV_DATA = {
    // -------- METADATOS --------
    meta: {
        title: "Eric David Rodriguez Flores - Software Engineer",
        theme: "modern" // "modern" o "gamer"
    },

    // -------- PERFIL PRINCIPAL --------
    profile: {
        name: "Eric David Rodriguez Flores",
        role: "MBA - Software & Civil Engineer",
        image: "profile.jpg",
        tagline: "Let's build together! 🚀",
        summary: `I am a Software Developer & Data Analyst with experience in the industrial and construction sectors, where I developed skills in Python and SQL to automate reports, build data pipelines, and optimize project budget control.
I define myself as a curious, self-taught person oriented toward continuous improvement. I enjoy understanding complex problems, cleaning chaotic data, and transforming it into clear information that helps make better decisions.
I am currently in a process of active growth toward Data, Computer Vision, Data Science and Machine Learning, complementing my experience with courses in predictive modeling, statistics, and software development best practices. My goal is to combine my operational experience with new technical capabilities to build smarter and more scalable solutions.
I am looking for a team where I can keep learning every day, contribute my current skills, and grow as a data professional.`
    },

    // -------- CONTACTO (SIDEBAR) --------
    contact: [
        { icon: "📍", label: "Address", value: "Edo Méx., México" },
        { icon: "📧", label: "Email", value: "fler.rdz87@gmail.com", link: "mailto:ivan.ivanov@gmail.com" },
        { icon: "🐙", label: "GitHub", value: "https://github.com/skycyborgnet", link: "https://github.com/skycyborgnet" },
        { icon: "🔗", label: "LinkedIn", value: "https://linkedin.com/in/skycyborgnet", link: "https://linkedin.com/in/skycyborgnet" },
        { icon: "📞", label: "Phone", value: "+52 8124 06 22 92" }
    ],

// -------- HABILIDADES TÉCNICAS (level: 0-100) --------
skills: [
    // --- Inteligencia Artificial y Agentes Autónomos ---
    { name: "Python", level: 75 },          // Omnipresente en analítica, ML, pipelines y automatización de software[cite: 78, 79, 81, 85, 88].
    { name: "LangChain", level: 50 },       // Core de la certificación de 10 cursos de IBM RAG y Agentic AI[cite: 81].
    { name: "LangGraph", level: 55 },       // Orquestación avanzada de flujos agenticos cíclicos con memoria[cite: 81].
    { name: "Hugging Face", level: 55 },    // Selección de modelos, fine-tuning y evaluación en la especialización de LLMs[cite: 87].
    { name: "Claude Code", level: 50 },     // Automatización e ingeniería de software asistida por agentes autónomos[cite: 78].

    // --- Ingeniería de Datos y Big Data ---
    { name: "SQL", level: 70 },             // Base absoluta para la gestión, extracción y manipulación de bases de datos relacionales.
    { name: "Apache Spark", level: 65 },    // Procesamiento de datos distribuidos a gran escala en arquitecturas Big Data.
    { name: "Apache Hadoop", level: 60 },   // Almacenamiento y procesamiento distribuido en ecosistemas de datos masivos.
    { name: "Data Pipelines", level: 65 },  // Modelado y automatización de flujos de ingeniería de datos con DelftX[cite: 85].

    // --- Ciencia de Datos, Estadística y Machine Learning ---
    { name: "R Programming", level: 65 },   // Análisis estadístico avanzado, manipulación de datos y modelado matemático.
    { name: "SAS / Model Studio", level: 60 }, // Plataforma empresarial para minería de datos y despliegue de modelos de ML.
    { name: "Scikit-Learn", level: 65 },    // Algoritmos predictivos, regresión y clustering en Machine Learning con Python[cite: 88].
    { name: "Pandas / NumPy", level: 65 },   // Manipulación, limpieza y análisis estadístico de datasets masivos[cite: 79].

    // --- Desarrollo Full-Stack y Cloud-Native ---
    { name: "Javascript", level: 60 },      // Base completa de la certificación backend de 13 cursos de IBM[cite: 82].
    { name: "Node.js", level: 60 },         // Lógica del lado del servidor intensiva en la ruta backend de IBM[cite: 82].
    { name: "Express", level: 55 },         // Framework utilizado para la creación de microservicios y REST APIs[cite: 82].
    { name: "Docker", level: 55 },          // Contenerización y aislamiento de microservicios para despliegues nativos[cite: 82].
    { name: "HTML / CSS", level: 60 },      // Desarrollo frontend semántico y estilizado web integrado[cite: 82].
    { name: "MongoDB", level: 50 },         // Base de datos NoSQL principal integrada en tus proyectos web[cite: 82].
    { name: "Kubernetes", level: 55 },      // Orquestación de contenedores y despliegues en clusters/OpenShift[cite: 82].

    // --- Ciberseguridad Ofensiva ---
    { name: "Kali Linux", level: 45 },      // Entorno y suite de herramientas para la especialización de hacking ético[cite: 83].
    { name: "Metasploit", level: 40 }       // Explotación de vulnerabilidades y testing de penetración controlado[cite: 83].
],

    // -------- IDIOMAS (level: 1-5) --------
    languages: [
        { name: "Spanish", level: 5, label: "Native" },
        { name: "English", level: 4, label: "Fluent" }
    ],

    // -------- CERTIFICADOS --------
    certificates: [
        { issuer: "Harvardx", name: "Data Science" },
        { issuer: "Harvardx", name: "Python for Data Science" },
        { issuer: "DeepLearning", name: "Data Engineering" },
        { issuer: "IBM", name: "Machine Learning" },
        { issuer: "IBM", name: "Data Science" },
        { issuer: "IBM", name: "Python for Data Engineering" },
        { issuer: "AWS", name: "AWS Cloud Support" },
        { issuer: "AWS", name: "Machine Learning" },
        { issuer: "IBM", name: "Data Analitycs" },
        { issuer: "Google", name: "Business Inteligence" },
        { issuer: "Google", name: "Machine Learning" }
    ],

    // -------- EXPERIENCIA LABORAL --------
    experience: [
        {
            year: "2024-Present",
            title: "Software Engineer",
            company: "Freelance",
            location: "Edo Méx, México",
            duration: "2 YEARS",
            description: `- Built digital applications for task automation.

- Developed computer vision systems for real-time object counting (Python, detection models).
- Optimized workflows with custom scripts (Java, Python, SQL), reducing processing times.
- Applied OOP and relational database design for large-scale data management.
- Used statistics and Python for automated counting and data-driven decisions across industries.
- Analyzed with the Natural Language API
- Designed Websites.`
        },
        {
            year: "2020-2022",
            title: "Software / Civil Engineer",
            company: "Constellation Brands (Worley)",
            location: "Coahuila, México",
            duration: "2 YEARS",
            description: `- Automated strategic reports using Python and Excel.
- Built data pipelines for cleaning and processing operational data with custom scripts.
- Extracted and processed large datasets from SAP S/4 HANA.
- Supported system implementation and continuous improvement.
- Managed master data and performance analysis in SAP S/4 HANA.
- Automated cleansing and consolidation of SAP data.
- Analyzed project costs and budgets using Excel, Python, and SQL.
- Updated WBS elements in SAP S/4 HANA.
- Analyzed unit prices and procurement data (PR/PO) with Python and SQL.
- Organized company assets following internal classification system.`
        },
        {
            year: "2015-2019",
            title: "Civil Structural Engineer",
            company: "VITRO",
            location: "Nuevo León, México",
            duration: "4 YEARS 4 MONTHS",
            description: `- Developed Python scripts to automate complex cost estimations and performed SQL queries on large datasets to analyze project profitability.	
- Implemented rigorous SQL validation constraints and Python-based data cleaning processes to ensure the integrity and quality of technical project documentation.
- Performed structural analysis and design in compliance with industry standards.
- Managed the construction of industrial plants and warehouses, overseeing projects from inception through successful delivery.
- Successfully negotiated with contractors and suppliers to optimize project profitability and cost-efficiency.
- Guaranteed full adherence to government regulations and building codes throughout the project lifecycle.
- Prepared and presented weekly progress reports, providing critical insights into ongoing engineering developments.
- Developed investment budgets to evaluate the viability of proposed projects, facilitating informed executive decision-making.
- Supervised construction sites to ensure strict compliance with project specifications and the maintenance of rigorous quality standards.
- Reviewed and approved contractor estimates, ensuring financial accuracy and transparency.
- Proficiently prepared cost estimates and Unit Price Analysis (UPA) to support precise project budgeting.
- Effectively managed project programming and construction controls, consistently meeting all deadlines and objectives.
- Executed and supervised construction works, prioritizing quality and operational efficiency at all times.
- Conducted comprehensive building assessments and structural repairs to enhance safety and long-term integrity.
- Performed structural analysis and design in compliance with industry standards, including API, NTCDF, LRFD, ACI 318, AWS, ASCE, and CFE, with high precision in technical drafting.`
        }
    ],

    // -------- PROYECTOS (NUEVA SECCIÓN) --------
    projects: [
        {
            title: "Dynamic Engineering App",
            description: "The Dynamic Engineering App is a specialized structural dynamics and earthquake engineering tool designed to bridge the gap between raw seismic data and structural analysis software. It automates the processing of ground motion records (accelerograms), converting raw acceleration time-series data into equivalent dynamic forces and generating compliance-ready response spectra for advanced structural design..",
            image: "project1.jpg",
            technologies: ["Python", "HTML", "CC", "JS"],
            link: "https://github.com/tu-usuario/Dynamic Engineering App"
        },
        {
            title: "Wind Loads Design CFE App",
            description: "The Wind Loads Design CFE App is an engineering software solution designed to automate the calculation of wind design forces on buildings and structures in strict compliance with the CFE Manual (Manual de Diseño de Obras Civiles - Diseño por Viento). The application streamlines the complex, multi-step algebraic pipeline required to determine velocity pressures, shape coefficients, and final design wind loads, eliminating manual lookup errors from code charts and maps..",
            image: "project2.jpg",
            technologies: ["Python", "HTML", "CC", "JS"],
            link: "https://github.com/tu-usuario/dashboard"
        },
        {
            title: "Data Science for MovieLens Project",
            description: "The MovieLens Project is an end-to-end Data Science and Big Data infrastructure project designed to ingest, process, and analyze massive datasets of user-generated movie ratings and metadata. The project implements scalable machine learning algorithms to build a personalized recommendation engine while providing deep business intelligence insights into user behavior, cinematic trends, and demographic preferences.",
            image: "project3.jpg",
            technologies: ["Python", "R studio", "Apache"],
            link: "https://github.com/tu-usuario/portfolio"
        },
        {
            title: "Google Fusion - Dashboard-Sells",
            description: "The Google Fusion: Dashboard-Sells project is an enterprise-grade business intelligence (BI) platform that automates the ingestion, transformation, and visualization of transactional sales data. By leveraging cloud-native data integration pipelines, the system consolidates fragmented sales data from multiple channels (CRMs, e-commerce platforms, and ERPs) into a centralized data warehouse, generating real-time, interactive dashboards to track revenue performance, representative quotas, and funnel conversion rates.",
            image: "project4.jpg",
            technologies: ["Google Fusion", "Excel", "Python"],
            link: "https://github.com/tu-usuario/api-rest"
        },
        {
            title: "Wine Quality Prediction",
            description: "It focuses on applying advanced statistical learning and machine learning techniques to predict the quality of wine based on its chemical profile. Utilizing datasets containing physicochemical properties of red and white variants (such as acidity, residual sugar, and alcohol content), the project builds, evaluates, and compares multiple predictive models to classify wine quality or predict it as a continuous score.",
            image: "project5.jpg",
            technologies: ["Python", "R studio", "Apache"],
            link: "https://github.com/tu-usuario/landing"
        },
    ],

    // -------- EDUCACIÓN --------
    education: [
        {
            year: "2005-2010",
            title: "Civil Engineer",
            institution: "Universidad Autonoma de Nuevo Leon (UANL)",
            location: "Nuevo Leon, Mexico",
            duration: "5 YEARS",
            description: `Civil Engineering.`
        },
        {
            year: "2020-2022",
            title: "Master of Business Administration",
            institution: "Uniersidad Tecnologica de Latinoamerica (UTEL)",
            location: "Mexico city, Mexico",
            duration: "2 YEARS",
            description: `Master of Business Administration.`
        },
        {
            year: "2022-2026",
            title: "Software Engineer",
            institution: "ABCD Example School",
            location: "Nuevo Leon, Mexico",
            duration: "4 YEARS",
            description: `Software Engineer.`
        }
    ],

    // -------- REDES SOCIALES (FOOTER) --------
    social: [
        { platform: "GitHub", url: "https://github.com/skycyborgnet", icon: "fab fa-github" },
        { platform: "LinkedIn", url: "https://linkedin.com/in/sky-cyborg-net", icon: "fab fa-linkedin" },
        { platform: "Twitter", url: "https://twitter.com/skycyborgnet", icon: "fab fa-twitter" },
        { platform: "YouTube", url: "https://youtube.com/skycyborgnet", icon: "fab fa-youtube" }
    ]
};

// ================================================================
// 2. MOTOR DE RENDERIZADO
//    Cada función inyecta los datos en el DOM.
// ================================================================

/**
 * Renderiza el HTML completo de la página
 */
function renderCV() {
    // --- Renderizar el contenedor principal ---
    const app = document.getElementById('app');
    if (!app) return;

    app.innerHTML = `
        <!-- ========== CONTENEDOR PRINCIPAL ========== -->
        <div class="cv-container">

            <!-- ========== SIDEBAR ========== -->
            <aside class="sidebar">
                <!-- Foto de perfil -->
                <div class="profile-box">
                    <img src="${CV_DATA.profile.image}" alt="${CV_DATA.profile.name}" id="profile-img">
                    <div class="profile-pixel-accent"></div>
                </div>

                <!-- Información de contacto -->
                <div class="sidebar-section">
                    <h3 class="sidebar-title">Information</h3>
                    <div id="contact-container"></div>
                </div>

                <!-- Habilidades técnicas -->
                <div class="sidebar-section">
                    <h3 class="sidebar-title">Tech Skills</h3>
                    <div id="skills-container"></div>
                </div>

                <!-- Idiomas -->
                <div class="sidebar-section">
                    <h3 class="sidebar-title">Languages</h3>
                    <div id="languages-container"></div>
                </div>

                <!-- Certificados -->
                <div class="sidebar-section">
                    <h3 class="sidebar-title">Certificates</h3>
                    <div id="certificates-container"></div>
                </div>
            </aside>

            <!-- ========== MAIN CONTENT ========== -->
            <main class="main-content">
                <!-- Encabezado -->
                <div class="main-header">
                    <h1 id="profile-name">${CV_DATA.profile.name}</h1>
                    <h2 id="profile-role">${CV_DATA.profile.role}</h2>
                </div>

                <!-- Resumen / "Let's build together!" -->
                <div class="summary" id="summary-container">
                    ${CV_DATA.profile.summary}
                </div>

                <!-- Experiencia -->
                <section class="section">
                    <h3 class="section-title"><i class="fas fa-briefcase"></i> Experience</h3>
                    <div id="experience-container"></div>
                </section>

                <!-- Educación -->
                <section class="section">
                    <h3 class="section-title"><i class="fas fa-graduation-cap"></i> Education</h3>
                    <div id="education-container"></div>
                </section>

                <!-- Proyectos -->
                <section class="section">
                    <h3 class="section-title"><i class="fas fa-folder-open"></i> Projects</h3>
                    <div id="projects-container" class="projects-grid"></div>
                </section>

                <!-- Footer -->
                <footer class="footer">
                    <div class="footer-content">
                        <p>&copy; ${new Date().getFullYear()} ${CV_DATA.profile.name}. All rights reserved.</p>
                        <div class="social-links" id="social-container"></div>
                    </div>
                </footer>
            </main>
        </div>
    `;

    // --- Renderizar cada sección ---
    renderContact();
    renderSkills();
    renderLanguages();
    renderCertificates();
    renderExperience();
    renderProjects();
    renderEducation();
    renderSocial();

    // --- Ejecutar animaciones después de renderizar ---
    setTimeout(animateSkills, 500);
    setTimeout(typeWriterEffect, 1500);
}

// --- Renderizar Contacto ---
function renderContact() {
    const container = document.getElementById('contact-container');
    if (!container) return;

    container.innerHTML = CV_DATA.contact.map(item => `
        <div class="info-item">
            <span class="icon">${item.icon}</span>
            ${item.link ? 
                `<a href="${item.link}" target="_blank">${item.value}</a>` : 
                `<span>${item.value}</span>`
            }
        </div>
    `).join('');
}

// --- Renderizar Habilidades (barras) ---
function renderSkills() {
    const container = document.getElementById('skills-container');
    if (!container) return;

    container.innerHTML = CV_DATA.skills.map(skill => `
        <div class="skill-item">
            <div class="skill-info">
                <span class="skill-name">${skill.name}</span>
                <span class="skill-percent">${skill.level}%</span>
            </div>
            <div class="skill-bar">
                <div class="skill-progress" style="width: ${skill.level}%;"></div>
            </div>
        </div>
    `).join('');
}

// --- Renderizar Idiomas (puntos) ---
function renderLanguages() {
    const container = document.getElementById('languages-container');
    if (!container) return;

    container.innerHTML = CV_DATA.languages.map(lang => {
        let dots = '';
        for (let i = 1; i <= 5; i++) {
            dots += i <= lang.level ? '●' : '<span class="empty-dot">●</span>';
        }
        return `
            <div class="lang-item">
                <span class="lang-name">${lang.name}</span>
                <span class="lang-level">${lang.label}</span>
                <div class="lang-dots">${dots}</div>
            </div>
        `;
    }).join('');
}

// --- Renderizar Certificados ---
function renderCertificates() {
    const container = document.getElementById('certificates-container');
    if (!container) return;

    container.innerHTML = CV_DATA.certificates.map(cert => `
        <div class="cert-item">
            <span class="cert-issuer">${cert.issuer}</span>
            <span class="cert-name">${cert.name}</span>
        </div>
    `).join('');
}

// --- Renderizar Experiencia ---
function renderExperience() {
    const container = document.getElementById('experience-container');
    if (!container) return;

    container.innerHTML = CV_DATA.experience.map(exp => `
        <div class="timeline-item">
            <div class="timeline-meta">
                <span class="timeline-year">${exp.year}</span>
                <span class="timeline-role">${exp.title}</span>
                <span class="timeline-location">${exp.location}</span>
            </div>
            <div class="timeline-company">${exp.company} · ${exp.duration}</div>
            <div class="timeline-desc">${exp.description}</div>
        </div>
    `).join('');
}

// --- Renderizar Proyectos (con imágenes) ---
function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;

    container.innerHTML = CV_DATA.projects.map(project => `
        <div class="project-card">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
                <div class="project-overlay">
                    <a href="${project.link}" target="_blank" class="project-link">
                        <i class="fas fa-external-link-alt"></i> View
                    </a>
                </div>
            </div>
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-desc">${project.description}</p>
                <div class="project-tags">
                    ${project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// --- Renderizar Educación ---
function renderEducation() {
    const container = document.getElementById('education-container');
    if (!container) return;

    container.innerHTML = CV_DATA.education.map(edu => `
        <div class="timeline-item">
            <div class="timeline-meta">
                <span class="timeline-year">${edu.year}</span>
                <span class="timeline-role">${edu.title}</span>
                <span class="timeline-location">${edu.location}</span>
            </div>
            <div class="timeline-company">${edu.institution} · ${edu.duration}</div>
            <div class="timeline-desc">${edu.description}</div>
        </div>
    `).join('');
}

// --- Renderizar Redes Sociales (Footer) ---
function renderSocial() {
    const container = document.getElementById('social-container');
    if (!container) return;

    container.innerHTML = CV_DATA.social.map(social => `
        <a href="${social.url}" target="_blank" aria-label="${social.platform}">
            <i class="${social.icon}"></i>
        </a>
    `).join('');
}

// ================================================================
// 3. ANIMACIONES Y EFECTOS
// ================================================================

/**
 * Anima las barras de habilidades al hacer scroll
 * Usa Intersection Observer para mejor rendimiento
 */
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    // Si no hay barras, salir
    if (!skillBars.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                // Guardar el ancho objetivo
                const targetWidth = bar.style.width;
                // Resetear a 0
                bar.style.width = '0%';
                // Forzar reflow para reiniciar animación
                void bar.offsetWidth;
                // Animar al ancho objetivo
                setTimeout(() => {
                    bar.style.width = targetWidth;
                }, 50);
                // Dejar de observar esta barra
                observer.unobserve(bar);
            }
        });
    }, { 
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    });

    skillBars.forEach(bar => observer.observe(bar));
}

/**
 * Efecto de escritura en el tagline
 * Escribe el texto carácter por carácter
 */
function typeWriterEffect() {
    const tagline = document.querySelector('.tagline');
    if (!tagline) return;

    const originalText = tagline.textContent;
    tagline.textContent = '';
    let charIndex = 0;

    function typeWriter() {
        if (charIndex < originalText.length) {
            tagline.textContent += originalText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 80);
        }
    }

    typeWriter();
}

/**
 * Detecta si el sidebar está en vista móvil y ajusta el scroll
 */
function handleMobileSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;

    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
        sidebar.style.position = 'relative';
        sidebar.style.height = 'auto';
        sidebar.style.overflow = 'visible';
    } else {
        sidebar.style.position = 'sticky';
        sidebar.style.height = '100vh';
        sidebar.style.overflow = 'auto';
    }
}

// ================================================================
// 4. FUNCIONES DE UTILIDAD (Opcionales)
// ================================================================

/**
 * Actualiza los datos y re-renderiza todo
 * Útil para actualizaciones dinámicas
 */
function updateCV(newData) {
    Object.assign(CV_DATA, newData);
    renderCV();
}

/**
 * Exporta los datos actuales a JSON
 */
function exportCVData() {
    const json = JSON.stringify(CV_DATA, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cv-data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

/**
 * Importa datos desde JSON
 */
function importCVData(jsonString) {
    try {
        const data = JSON.parse(jsonString);
        Object.assign(CV_DATA, data);
        renderCV();
        return true;
    } catch (error) {
        console.error('Error al importar datos:', error);
        return false;
    }
}

// ================================================================
// 5. INICIALIZACIÓN Y EVENTOS
// ================================================================

document.addEventListener('DOMContentLoaded', function() {
    // Renderizar el CV
    renderCV();
    
    // Manejar cambios de tamaño de ventana para el sidebar
    handleMobileSidebar();
    window.addEventListener('resize', handleMobileSidebar);
    
    // Mensaje de bienvenida en consola
    console.log('%c🚀 CV Full Width cargado correctamente', 'font-size: 16px; font-weight: bold; color: #2A7DE1;');
    console.log('%c📝 Modifica los datos en CV_DATA para actualizar el contenido', 'font-size: 12px; color: #4A5C72;');
    console.log('%c🔧 Funciones disponibles: updateCV(), exportCVData(), importCVData()', 'font-size: 12px; color: #4A5C72;');
    
    // Exponer funciones globalmente para debugging
    window.CV = {
        data: CV_DATA,
        update: updateCV,
        export: exportCVData,
        import: importCVData,
        render: renderCV
    };
});

// ================================================================
// 6. MANEJO DE ERRORES DE IMÁGENES (Fallback)
// ================================================================

/**
 * Maneja errores de carga de imágenes
 * Muestra placeholders si la imagen no existe
 */
document.addEventListener('error', function(e) {
    const target = e.target;
    if (target.tagName === 'IMG') {
        // Si es la foto de perfil
        if (target.id === 'profile-img') {
            target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"%3E%3Crect width="200" height="200" fill="%231e2a3a"/%3E%3Ctext x="50%25" y="50%25" font-size="60" text-anchor="middle" dy=".3em" fill="%235b8cbf"%3E👤%3C/text%3E%3C/svg%3E';
            target.alt = 'Foto de perfil no disponible';
        } else {
            // Para proyectos, mostrar placeholder
            const parent = target.closest('.project-image');
            if (parent) {
                parent.style.backgroundColor = '#e9edf2';
                parent.style.display = 'flex';
                parent.style.alignItems = 'center';
                parent.style.justifyContent = 'center';
                parent.innerHTML = `
                    <div style="color: #8899b0; font-size: 14px; text-align: center; padding: 20px;">
                        <i class="fas fa-image" style="font-size: 32px; display: block; margin-bottom: 8px;"></i>
                        Imagen no disponible
                    </div>
                `;
            }
        }
    }
}, true);