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
        { icon: "📍", label: "Address", value: "Coacalco de Berriozabal, Estado Méx., México" },
        { icon: "📧", label: "Email", value: "fler.rdz87@gmail.com", link: "mailto:fler.rdz87@gmail.com" },
        { icon: "🐙", label: "GitHub", value: "https://github.com/sky-cyborgnet", link: "https://github.com/sky-cyborgnet" },
        { icon: "🔗", label: "LinkedIn", value: "https://www.linkedin.com/in/sky-cyborg-net/", link: "https://www.linkedin.com/in/sky-cyborg-net/" },
        { icon: "📞", label: "Phone", value: "+52 8124 06 22 92" }
    ],

    // -------- HABILIDADES TÉCNICAS (level: 0-100) --------
    skills: [
        // --- Inteligencia Artificial y Agentes Autónomos ---
        { name: "Python", level: 75 },          
        { name: "LangChain", level: 50 },       
        { name: "LangGraph", level: 55 },       
        { name: "Hugging Face", level: 55 },    
        { name: "Claude Code", level: 50 },     

        // --- Ingeniería de Datos y Big Data ---
        { name: "SQL", level: 70 },             
        { name: "Apache Spark", level: 65 },    
        { name: "Apache Hadoop", level: 60 },   
        { name: "Data Pipelines", level: 65 },  

        // --- Ciencia de Datos, Estadística y Machine Learning ---
        { name: "R Programming", level: 65 },   
        { name: "SAS / Model Studio", level: 60 }, 
        { name: "Scikit-Learn", level: 65 },    
        { name: "Pandas / NumPy", level: 65 },   

        // --- Desarrollo Full-Stack y Cloud-Native ---
        { name: "Javascript", level: 60 },      
        { name: "Node.js", level: 60 },         
        { name: "Express", level: 55 },         
        { name: "Docker", level: 55 },          
        { name: "HTML / CSS", level: 60 },      
        { name: "MongoDB", level: 50 },         
        { name: "Kubernetes", level: 55 },      

        // --- Ciberseguridad Ofensiva ---
        { name: "Kali Linux", level: 45 },      
        { name: "Metasploit", level: 40 }       
    ],

    // -------- IDIOMAS (level: 1-5) --------
    languages: [
        { name: "Spanish", level: 5, label: "Native" },
        { name: "English", level: 4, label: "Fluent" }
    ],

    // -------- HABILIDADES PERSONALES (SIDEBAR) --------
    personalSkills: [
        { name: "Continuous Learning", icon: "🧠" },
        { name: "Problem Solving", icon: "🧩" },
        { name: "Effective Communication", icon: "🗣️" },
        { name: "Organization & Planning", icon: "📅" },
        { name: "Adaptability & Resilience", icon: "🔄" },
        { name: "Team Collaboration", icon: "🤝" }
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
            title: "Data Analyst",
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
            title: "Structural Engineer",
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

    // -------- EDUCACIÓN --------
    education: [
        {
            year: "2022-2026",
            title: "Software Engineer",
            institution: "Universidad Ciudadana de Nuevo Leon (UCNL)",
            location: "Nuevo Leon, Mexico",
            duration: "4 YEARS",
            description: `Software Engineering.`
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
            year: "2005-2010",
            title: "Civil Engineer",
            institution: "Universidad Autónoma de Nuevo León (UANL)",
            location: "Nuevo Leon, Mexico",
            duration: "5 YEARS",
            description: `Civil Engineering.`
        }
    ],

    // -------- PROYECTOS --------
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
        }
    ],

    // -------- EXPERIENCIA ADICIONAL CON IMÁGENES --------
    additionalExperience: [
        {
            title: "Sistema de Visión por Computadora para Conteo en Tiempo Real",
            description: "Desarrollo de un sistema automatizado utilizando Python, YOLO y OpenCV para conteo de objetos en líneas de producción, reduciendo errores manuales en un 95%.",
            image: "experience/computer-vision.jpg",
            issuer: "Freelance",
            date: "2024",
            link: "https://github.com/sky-cyborgnet/computer-vision"
        },
        {
            title: "Automatización de Pipelines de Datos en SAP S/4 HANA",
            description: "Implementación de pipelines ETL con Python y SQL para extracción, limpieza y consolidación de datos operativos, reduciendo tiempos de procesamiento en un 70%.",
            image: "experience/data-pipeline.jpg",
            issuer: "Constellation Brands (Worley)",
            date: "2021",
            link: "https://github.com/sky-cyborgnet/data-pipeline"
        },
        {
            title: "Optimización de Costos con Machine Learning en Construcción",
            description: "Modelo predictivo de costos utilizando regresión lineal y clustering para estimación de presupuestos en proyectos de construcción con precisión del 92%.",
            image: "experience/cost-optimization.jpg",
            issuer: "VITRO",
            date: "2018",
            link: "https://github.com/sky-cyborgnet/cost-prediction"
        },
        {
            title: "Aplicación Web para Diseño de Cargas de Viento (CFE)",
            description: "Aplicación interactiva que automatiza cálculos de cargas de viento según normativa CFE, eliminando errores de tablas manuales y reduciendo tiempo de diseño en un 80%.",
            image: "experience/wind-loads.jpg",
            issuer: "Proyecto Personal",
            date: "2023",
            link: "https://github.com/sky-cyborgnet/wind-loads-cfe"
        }
    ],

    // -------- CERTIFICADOS CON IMÁGENES --------
    certificateImages: [
        {
            title: "Google - Data Analytics Professional",
            description: "Professional certification from Google focused on data processing, analysis, and data visualization to drive strategic decision-making.",
            image: "certificates/GoogleDataAnalitycs.png.jpg",
            issuer: "Google",
            date: "2024",
            link: "https://grow.google/..."
        },
        {
            title: "IBM - Data Architecture Professional",
            description: "Professional certification in Data Architecture by IBM, covering data modeling design, governance, enterprise data storage, and information lifecycle management.",
            image: "certificates/IBM Data Architecture.png.jpg",
            issuer: "IBM",
            date: "2024",
            link: "https://www.credly.com/..."
        },
        {
            title: "IBM - Data Engineering Professional",
            description: "Professional program focused on data engineering with IBM, encompassing relational and NoSQL databases, ETL/ELT pipelines, and Big Data architectures.",
            image: "certificates/IBM Data Engineering.jpg",
            issuer: "IBM",
            date: "2024",
            link: "https://www.credly.com/..."
        },
        {
            title: "IBM - RAG and Agentic AI",
            description: "Advanced specialization in Generative Artificial Intelligence, centering on the development of Retrieval-Augmented Generation (RAG) systems and autonomous AI Agents.",
            image: "certificates/IBM RAG and Agentic AI.jpg",
            issuer: "IBM",
            date: "2024",
            link: "https://www.credly.com/..."
        },
        {
            title: "IBM - AI Engineering Professional",
            description: "Professional certification in AI Engineering from IBM, validating core skills in Machine Learning, Deep Learning, neural networks, and model deployment to production.",
            image: "certificates/IBM-AI-Engineering.png.jpg",
            issuer: "IBM",
            date: "2024",
            link: "https://www.credly.com/..."
        },
        {
            title: "ISC2 - Certified in Cybersecurity (CC)",
            description: "Foundational global cybersecurity credential, validating proficiency in security principles, business continuity, network concepts, and security operations.",
            image: "certificates/ISC2-CertifiedCybersecurity.png.jpg",
            issuer: "ISC2",
            date: "2023",
            link: "https://www.isc2.org/..."
        },
        {
            title: "ISC2 - Systems Security Certified Practitioner (SSCP)",
            description: "Advanced operational security certification, focused on implementing, monitoring, and administering IT infrastructure in accordance with security policies.",
            image: "certificates/ISC2SYSTEMSSECURITY.PNG",
            issuer: "ISC2",
            date: "2023",
            link: "https://www.isc2.org/..."
        },
        {
            title: "Microsoft - Power BI Data Analyst Professional",
            description: "Official certification in Data Analysis with Microsoft Power BI, covering data modeling, building dynamic dashboards, and publishing enterprise-level reports.",
            image: "certificates/Microsoft Power BI Data Analyst.jpg",
            issuer: "Microsoft",
            date: "2024",
            link: "https://learn.microsoft.com/..."
        },
        {
            title: "PyTorch for Deep Learning",
            description: "Hands-on specialization in building deep learning architectures using the PyTorch framework, including convolutional neural networks (CNNs) and computer vision.",
            image: "certificates/PytTorchfordeeplearning.png",
            issuer: "PyTorch",
            date: "2024",
            link: "https://pytorch.org/..."
        },
        {
            title: "Stanford - Machine Learning",
            description: "Academic Machine Learning certification by Stanford University, covering key algorithms for supervised and unsupervised learning, optimization, and industry best practices.",
            image: "certificates/Stanford Machine Learning.jpg",
            issuer: "Stanford University",
            date: "2023",
            link: "https://www.coursera.org/..."
        }
    ],

    // -------- REDES SOCIALES (FOOTER) --------
    social: [
        { platform: "LinkedIn", url: "https://linkedin.com/in/sky-cyborg-net", icon: "fab fa-linkedin" },
        { platform: "GitHub", url: "https://github.com/sky-cyborg-net", icon: "fab fa-github" },
        { platform: "Twitter", url: "https://twitter.com/skycyborgnet", icon: "fab fa-twitter" },
        { platform: "YouTube", url: "https://youtube.com/skycyborgnet", icon: "fab fa-youtube" }
    ]
};

// ================================================================
// 2. MOTOR DE RENDERIZADO
//    Cada función inyecta los datos en el DOM.
// ================================================================

function renderCV() {
    const app = document.getElementById('app');
    if (!app) return;

    app.innerHTML = `
        <!-- ========== CONTENEDOR PRINCIPAL ========== -->
        <div class="cv-container">

            <!-- ========== SIDEBAR (Acomodado según orden visual deseado) ========== -->
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

                <!-- Habilidades Personales (Subió aquí) -->
                <div class="sidebar-section">
                    <h3 class="sidebar-title">Personal Skills</h3>
                    <div id="personal-skills-container"></div>
                </div>

                <!-- Idiomas -->
                <div class="sidebar-section">
                    <h3 class="sidebar-title">Languages</h3>
                    <div id="languages-container"></div>
                </div>

                <!-- Habilidades técnicas (Bajó al final) -->
                <div class="sidebar-section">
                    <h3 class="sidebar-title">Tech Skills</h3>
                    <div id="skills-container"></div>
                </div>
            </aside>

            <!-- ========== MAIN CONTENT ========== -->
            <main class="main-content">
                <!-- Encabezado -->
                <div class="main-header">
                    <h1 id="profile-name">${CV_DATA.profile.name}</h1>
                    <h2 id="profile-role">${CV_DATA.profile.role}</h2>
                </div>

                <!-- Resumen -->
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

                <!-- Additional Experience -->
                <section class="section">
                    <h3 class="section-title"><i class="fas fa-star"></i> Additional Experience</h3>
                    <div id="additional-experience-container" class="certificates-grid"></div>
                </section>

                <!-- Certificados (con imágenes) -->
                <section class="section">
                    <h3 class="section-title"><i class="fas fa-award"></i> Certificates</h3>
                    <div id="certificates-images-container" class="certificates-grid"></div>
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
    renderLanguages();
    renderPersonalSkills(); 
    renderSkills();
    renderExperience();
    renderCertificateImages();
    renderAdditionalExperience();  
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

// --- Renderizar Habilidades Técnicas (barras) ---
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

// --- Renderizar Idiomas (Con puntos de nivel iluminados) ---
function renderLanguages() {
    const container = document.getElementById('languages-container');
    if (!container) return;

    container.innerHTML = CV_DATA.languages.map(lang => {
        // Genera 5 puntos en total. Si el nivel es 4, pinta 4 activos y 1 inactivo.
        let dotsHTML = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= lang.level) {
                dotsHTML += `<span class="lang-dot active"></span>`;
            } else {
                dotsHTML += `<span class="lang-dot"></span>`;
            }
        }

        return `
            <div class="lang-item" style="margin-bottom: 15px;">
                <div class="lang-info" style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                    <strong class="lang-name">${lang.name}</strong>
                    <span class="lang-label" style="font-size: 0.85em; opacity: 0.8;">${lang.label}</span>
                </div>
                <div class="lang-dots" style="display: flex; gap: 6px;">
                    ${dotsHTML}
                </div>
            </div>
        `;
    }).join('');
}


// --- Renderizar Habilidades Personales ---
function renderPersonalSkills() {
    const container = document.getElementById('personal-skills-container');
    if (!container) return;

    container.innerHTML = CV_DATA.personalSkills.map(skill => `
        <div class="info-item">
            <span class="icon">${skill.icon}</span>
            <span>${skill.name}</span>
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
            <div class="timeline-desc" style="white-space: pre-line;">${exp.description}</div>
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

// --- Renderizar Proyectos ---
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

// --- Renderizar Experiencia Adicional con Imágenes ---
function renderAdditionalExperience() {
    const container = document.getElementById('additional-experience-container');
    if (!container) return;

    container.innerHTML = CV_DATA.additionalExperience.map(item => `
        <div class="certificate-card">
            <div class="certificate-image">
                <img src="${item.image}" alt="${item.title}" loading="lazy">
                <div class="certificate-overlay">
                    <a href="${item.link}" target="_blank" class="certificate-link">
                        <i class="fas fa-external-link-alt"></i> View
                    </a>
                </div>
            </div>
            <div class="certificate-info">
                <div class="certificate-badge">
                    <span class="cert-issuer-badge">${item.issuer}</span>
                    <span class="cert-date">${item.date}</span>
                </div>
                <h3 class="certificate-title">${item.title}</h3>
                <p class="certificate-desc">${item.description}</p>
            </div>
        </div>
    `).join('');
}

// --- Renderizar Certificados con Imágenes ---
function renderCertificateImages() {
    const container = document.getElementById('certificates-images-container');
    if (!container) return;

    container.innerHTML = CV_DATA.certificateImages.map(cert => `
        <div class="certificate-card">
            <div class="certificate-image">
                <img src="${cert.image}" alt="${cert.title}" loading="lazy">
                <div class="certificate-overlay">
                    <a href="${cert.link}" target="_blank" class="certificate-link">
                        <i class="fas fa-external-link-alt"></i> View
                    </a>
                </div>
            </div>
            <div class="certificate-info">
                <div class="certificate-badge">
                    <span class="cert-issuer-badge">${cert.issuer}</span>
                    <span class="cert-date">${cert.date}</span>
                </div>
                <h3 class="certificate-title">${cert.title}</h3>
                <p class="certificate-desc">${cert.description}</p>
            </div>
        </div>
    `).join('');
}

// --- Renderizar Redes Sociales ---
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

function animateSkills() {
    console.log("Animando barras de habilidades...");
    // Aquí puedes añadir lógica de Intersection Observer si lo usas
}

function typeWriterEffect() {
    console.log("Efecto de máquina de escribir iniciado...");
}

// Ejecución inicial para pintar la vista
document.addEventListener("DOMContentLoaded", () => {
    renderCV();
});