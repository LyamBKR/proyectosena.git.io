// Función para generar automáticamente la URL de la página
function generatePageUrl(id, title) {
    const folderName = `${id}. ${title}`;
    const fileName = `${id}. ${title}.html`;
    return `${folderName}/${fileName}`;
}

// Función para verificar si una página existe
function checkPageExists(url) {
    // Esta función se puede expandir para hacer una verificación real
    // Por ahora, asumimos que las páginas existen si están en la lista de páginas creadas
    const createdPages = [
        "1. Introduccion/1. Introduccion.html",
        "2. Procesos organizacionales/2. Procesos organizacionales.html"
    ];
    return createdPages.includes(url);
}

// Función para obtener la URL de la página de un tema
function getTopicPageUrl(topic) {
    // Si el tema ya tiene pageUrl definido, usarlo
    if (topic.pageUrl) {
        return topic.pageUrl;
    }
    // Si no, generar automáticamente
    return generatePageUrl(topic.id, topic.title);
}

// Función para verificar si un tema tiene página
function topicHasPage(topic) {
    // Para los temas 1 y 2, usar los valores predefinidos
    if (topic.id === 1 || topic.id === 2) {
        return topic.hasPage === true;
    }
    // Para otros temas, verificar automáticamente
    const generatedUrl = generatePageUrl(topic.id, topic.title);
    return checkPageExists(generatedUrl);
}

// Función para crear automáticamente una página HTML
function createPage(topic) {
    const folderName = `${topic.id}. ${topic.title}`;
    const fileName = `${topic.id}. ${topic.title}.html`;
    const folderPath = folderName;
    const filePath = `${folderPath}/${fileName}`;
    
    // Crear el contenido HTML de la página
    const pageContent = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${topic.id}. ${topic.title} - Proyecto SENA</title>
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <div class="container">
        <a href="../index.html" class="back-button">
            ← Volver al índice
        </a>
        
        <div class="epic-header">
            <h1 class="epic-title">${topic.id}. ${topic.title}</h1>
            <p class="epic-subtitle">Análisis y desarrollo de software - Lyam Acosta Forero</p>
            <div class="header-actions">
                <button class="download-pdf-btn" onclick="downloadPDF()">
                    📄 Descargar Manual del Proyecto (PDF)
                </button>
            </div>
        </div>

        <main class="main-content">
            <div class="content-card">
                <h2>Descripción</h2>
                <p>${topic.description}</p>
                
                <h2>Contenido detallado</h2>
                <p>${topic.content}</p>
                
                <div class="topic-meta">
                    <span class="topic-category">${getCategoryEmoji(topic.category)} Categoría: ${getCategoryName(topic.category)}</span>
                </div>
            </div>
        </main>

        <footer class="epic-footer">
            <p>2025-2026 / <strong><em>Desarrollador: Lyam Acosta Forero</em></strong>. Proyecto SENA - Análisis y Desarrollo de Software</p>
        </footer>
    </div>
    
    <script>
        // Función para descargar PDF
        function downloadPDF() {
            // Abrir el archivo PDF en una nueva ventana
            window.open('../pdf/Proyecto_SENA_Juego Secreto_World_Lyam_Acosta_Forero.html', '_blank');
            
            // Mostrar mensaje de confirmación
            alert('📄 Abriendo PDF del proyecto!\\n\\nEl documento se abrirá en una nueva ventana. Puedes imprimirlo o guardarlo como PDF desde el navegador.');
        }
    </script>
</body>
</html>`;

    // Aquí se podría implementar la creación real del archivo
    // Por ahora, solo mostramos un mensaje
    // Archivo creado: ${filePath}
    
    return filePath;
}

// Función para crear página desde el modal
function createPageForTopic(topicId) {
    const topic = topics.find(t => t.id === topicId);
    if (topic) {
        const filePath = createPage(topic);
        alert(`Página creada: ${filePath}\n\nNota: Esta es una demostración. En un entorno real, el archivo se crearía automáticamente.`);
        
        // Actualizar la lista de páginas creadas
        const createdPages = [
            "1. Introducción/1. Introducción.html",
            "2. Procesos organizacionales/2. Procesos organizacionales.html"
        ];
        createdPages.push(filePath);
        
        // Cerrar el modal y actualizar la vista
        closeModal();
        renderTopics();
    }
}

// Datos de los temas del proyecto
const topics = [
    {
        id: 1,
        title: "Introducción",
        description: "Conceptos básicos y fundamentos del desarrollo de software, incluyendo definiciones, objetivos y alcance del proyecto.",
        category: "introduccion",
        content: "La introducción establece el contexto y los fundamentos del proyecto de desarrollo de software, definiendo los objetivos, alcance y metodología a seguir.",
        hasPage: true,
        pageUrl: "1. Introducción/1. Introducción.html"
    },
    {
        id: 2,
        title: "Procesos organizacionales",
        description: "Análisis y definición de los procesos organizacionales que impactan en el desarrollo del software.",
        category: "procesos",
        content: "Los procesos organizacionales son fundamentales para entender cómo la organización opera y cómo el software debe integrarse en estos procesos existentes.",
        hasPage: true,
        pageUrl: "2. Procesos organizacionales/2. Procesos organizacionales.html"
    },
    {
        id: 3,
        title: "Ingeniería de requisitos",
        description: "Metodologías y técnicas para la identificación, análisis y especificación de requisitos de software.",
        category: "procesos",
        content: "La ingeniería de requisitos es el proceso sistemático de descubrir, analizar, documentar y validar los requisitos del sistema de software.",
        get hasPage() { return checkPageExists(this.pageUrl); },
        get pageUrl() { return generatePageUrl(this.id, this.title); }
    },
    {
        id: 4,
        title: "Recolección de información",
        description: "Técnicas y herramientas para recopilar información relevante del cliente y usuarios del sistema.",
        category: "procesos",
        content: "La recolección de información es crucial para entender las necesidades reales del cliente y los usuarios finales del sistema.",
        get hasPage() { return checkPageExists(this.pageUrl); },
        get pageUrl() { return generatePageUrl(this.id, this.title); }
    },
    {
        id: 5,
        title: "Formulación de Proyecto",
        description: "Estructuración y planificación del proyecto de desarrollo de software.",
        category: "procesos",
        content: "La formulación del proyecto define la estructura, objetivos, recursos y cronograma del desarrollo de software.",
        get hasPage() { return checkPageExists(this.pageUrl); },
        get pageUrl() { return generatePageUrl(this.id, this.title); }
    },
    {
        id: 6,
        title: "Formulario de recolección de información",
        description: "Herramientas estructuradas para la recopilación sistemática de información del proyecto.",
        category: "documentacion",
        content: "Los formularios de recolección de información proporcionan una estructura consistente para obtener datos relevantes del proyecto.",
        get hasPage() { return checkPageExists(this.pageUrl); },
        get pageUrl() { return generatePageUrl(this.id, this.title); }
    },
    {
        id: 7,
        title: "Especificación de Requerimientos",
        description: "Documentación detallada de los requisitos funcionales y no funcionales del sistema.",
        category: "documentacion",
        content: "La especificación de requerimientos documenta de manera detallada y precisa todos los requisitos del sistema de software.",
        get hasPage() { return checkPageExists(this.pageUrl); },
        get pageUrl() { return generatePageUrl(this.id, this.title); }
    },
    {
        id: 8,
        title: "Evaluación de los requerimientos",
        description: "Procesos de validación y verificación de los requisitos especificados.",
        category: "procesos",
        content: "La evaluación de requerimientos asegura que los requisitos sean correctos, completos, consistentes y factibles.",
        get hasPage() { return checkPageExists(this.pageUrl); },
        get pageUrl() { return generatePageUrl(this.id, this.title); }
    },
    {
        id: 9,
        title: "Metodologías de desarrollo de software",
        description: "Diferentes enfoques metodológicos para el desarrollo de software (ágil, cascada, etc.).",
        category: "metodologias",
        content: "Las metodologías de desarrollo definen el marco de trabajo y los procesos a seguir durante el desarrollo del software.",
        get hasPage() { return checkPageExists(this.pageUrl); },
        get pageUrl() { return generatePageUrl(this.id, this.title); }
    },
    {
        id: 10,
        title: "Metodología para el proyecto",
        description: "Selección y adaptación de la metodología específica para este proyecto.",
        category: "metodologias",
        content: "La metodología del proyecto define los procesos, herramientas y técnicas específicas que se utilizarán en este desarrollo.",
        get hasPage() { return checkPageExists(this.pageUrl); },
        get pageUrl() { return generatePageUrl(this.id, this.title); }
    },
    {
        id: 11,
        title: "Software y servicios de internet",
        description: "Análisis de herramientas de software y servicios web necesarios para el proyecto.",
        category: "arquitectura",
        content: "El análisis de software y servicios de internet identifica las tecnologías y servicios necesarios para la implementación.",
        get hasPage() { return checkPageExists(this.pageUrl); },
        get pageUrl() { return generatePageUrl(this.id, this.title); }
    },
    {
        id: 12,
        title: "Mejora de productos y procesos con la incorporación de TIC",
        description: "Estrategias para mejorar procesos organizacionales mediante tecnologías de información.",
        category: "procesos",
        content: "La incorporación de TIC permite optimizar y mejorar los procesos organizacionales existentes.",
        get hasPage() { return checkPageExists(this.pageUrl); },
        get pageUrl() { return generatePageUrl(this.id, this.title); }
    },
    {
        id: 13,
        title: "Diagramas para la especificación y análisis de requisitos",
        description: "Herramientas gráficas para modelar y analizar los requisitos del sistema.",
        category: "documentacion",
        content: "Los diagramas facilitan la comprensión y comunicación de los requisitos del sistema de manera visual.",
        get hasPage() { return checkPageExists(this.pageUrl); },
        get pageUrl() { return generatePageUrl(this.id, this.title); }
    },
    {
        id: 14,
        title: "Diagramas y plantillas para casos de uso del proyecto",
        description: "Modelado de casos de uso y plantillas para documentar la funcionalidad del sistema.",
        category: "documentacion",
        content: "Los casos de uso describen las interacciones entre los usuarios y el sistema de software.",
        get hasPage() { return checkPageExists(this.pageUrl); },
        get pageUrl() { return generatePageUrl(this.id, this.title); }
    },
    {
        id: 15,
        title: "Historias de usuario del proyecto",
        description: "Descripción de funcionalidades desde la perspectiva del usuario final.",
        category: "documentacion",
        content: "Las historias de usuario describen las funcionalidades del sistema desde la perspectiva del usuario final.",
        get hasPage() { return checkPageExists(this.pageUrl); },
        get pageUrl() { return generatePageUrl(this.id, this.title); }
    },
    {
        id: 16,
        title: "Modelo del dominio del Proyecto",
        description: "Representación conceptual del dominio de negocio y sus entidades.",
        category: "arquitectura",
        content: "El modelo del dominio representa las entidades, relaciones y reglas de negocio del sistema.",
        get hasPage() { return checkPageExists(this.pageUrl); },
        get pageUrl() { return generatePageUrl(this.id, this.title); }
    },
    {
        id: 17,
        title: "Validación de Documentos",
        description: "Procesos para verificar la calidad y completitud de la documentación del proyecto.",
        category: "documentacion",
        content: "La validación de documentos asegura que toda la documentación cumpla con los estándares de calidad.",
        get hasPage() { return checkPageExists(this.pageUrl); },
        get pageUrl() { return generatePageUrl(this.id, this.title); }
    },
    {
        id: 18,
        title: "Listas de chequeo para la validación de artefactos",
        description: "Herramientas de control de calidad para validar los entregables del proyecto.",
        category: "documentacion",
        content: "Las listas de chequeo proporcionan criterios específicos para validar cada artefacto del proyecto.",
        get hasPage() { return checkPageExists(this.pageUrl); },
        get pageUrl() { return generatePageUrl(this.id, this.title); }
    },
    {
        id: 19,
        title: "Especificación de los referentes técnicos del hardware - software y estimación de las condiciones económicas",
        description: "Definición de requisitos técnicos y análisis de costos del proyecto.",
        category: "arquitectura",
        content: "Esta especificación define los requisitos técnicos de hardware y software, así como la estimación económica del proyecto.",
        get hasPage() { return checkPageExists(this.pageUrl); },
        get pageUrl() { return generatePageUrl(this.id, this.title); }
    },
    {
        id: 20,
        title: "Ficha técnica de los productos requeridos",
        description: "Documentación detallada de las especificaciones técnicas de los productos necesarios.",
        category: "documentacion",
        content: "Las fichas técnicas documentan las especificaciones detalladas de todos los productos requeridos para el proyecto.",
        get hasPage() { return checkPageExists(this.pageUrl); },
        get pageUrl() { return generatePageUrl(this.id, this.title); }
    },
    {
        id: 21,
        title: "Diseño de tablas comparativas sobre presupuestos de hardware y software",
        description: "Análisis comparativo de costos y opciones de hardware y software.",
        category: "documentacion",
        content: "Las tablas comparativas facilitan la toma de decisiones sobre la selección de hardware y software basada en costos y características.",
        get hasPage() { return checkPageExists(this.pageUrl); },
        get pageUrl() { return generatePageUrl(this.id, this.title); }
    },
    {
        id: 22,
        title: "Propuesta técnica y económica para la implementación del proyecto",
        description: "Documento que presenta la solución técnica y el presupuesto para la implementación.",
        category: "documentacion",
        content: "La propuesta técnica y económica presenta la solución completa del proyecto con sus costos asociados.",
        get hasPage() { return checkPageExists(this.pageUrl); },
        get pageUrl() { return generatePageUrl(this.id, this.title); }
    },
    {
        id: 23,
        title: "Modelos conceptual y lógico para el proyecto",
        description: "Diseño de la estructura de datos y relaciones del sistema.",
        category: "arquitectura",
        content: "Los modelos conceptual y lógico definen la estructura de datos y las relaciones del sistema de software.",
        get hasPage() { return checkPageExists(this.pageUrl); },
        get pageUrl() { return generatePageUrl(this.id, this.title); }
    },
    {
        id: 24,
        title: "Informe de entregables para el proyecto de desarrollo de software",
        description: "Documentación de todos los productos y entregables del proyecto.",
        category: "documentacion",
        content: "El informe de entregables documenta todos los productos y resultados del proyecto de desarrollo de software.",
        get hasPage() { return checkPageExists(this.pageUrl); },
        get pageUrl() { return generatePageUrl(this.id, this.title); }
    },
    {
        id: 25,
        title: "Diagrama de Clases del proyecto de software",
        description: "Modelado orientado a objetos de la estructura del sistema.",
        category: "arquitectura",
        content: "El diagrama de clases representa la estructura del sistema usando conceptos de programación orientada a objetos.",
        get hasPage() { return checkPageExists(this.pageUrl); },
        get pageUrl() { return generatePageUrl(this.id, this.title); }
    },
    {
        id: 26,
        title: "Desarrollar la arquitectura de software de acuerdo con el patrón de diseño seleccionado",
        description: "Implementación de la arquitectura del sistema basada en patrones de diseño.",
        category: "arquitectura",
        content: "La arquitectura de software define la estructura y organización del sistema basada en patrones de diseño establecidos.",
        get hasPage() { return checkPageExists(this.pageUrl); },
        get pageUrl() { return generatePageUrl(this.id, this.title); }
    },
    {
        id: 27,
        title: "Arquitectura de Software",
        description: "Diseño de la estructura general y componentes del sistema de software.",
        category: "arquitectura",
        content: "La arquitectura de software define la estructura general, componentes y relaciones del sistema de software.",
        get hasPage() { return checkPageExists(this.pageUrl); },
        get pageUrl() { return generatePageUrl(this.id, this.title); }
    },
    {
        id: 28,
        title: "Validación de Documentos",
        description: "Procesos de verificación y validación de la documentación del proyecto.",
        category: "documentacion",
        content: "La validación de documentos asegura que toda la documentación cumpla con los estándares y requisitos establecidos.",
        get hasPage() { return checkPageExists(this.pageUrl); },
        get pageUrl() { return generatePageUrl(this.id, this.title); }
    },
    {
        id: 29,
        title: "Instrumentos para verificación de artefactos",
        description: "Herramientas y procesos para verificar la calidad de los entregables del proyecto.",
        category: "documentacion",
        content: "Los instrumentos de verificación proporcionan métodos y herramientas para asegurar la calidad de todos los artefactos del proyecto.",
        get hasPage() { return checkPageExists(this.pageUrl); },
        get pageUrl() { return generatePageUrl(this.id, this.title); }
    }
];

// Variables globales
let filteredTopics = [...topics];
let currentFilter = 'all';

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
    setupEventListeners();
    renderTopics();
});

// Función de inicialización
function initializePage() {
    // Página del proyecto SENA inicializada
}

// Configuración de event listeners
function setupEventListeners() {
    // Navegación
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavigation);
    });

    // Búsqueda
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    searchInput.addEventListener('input', handleSearch);
    searchBtn.addEventListener('click', handleSearch);

    // Filtros
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', handleFilter);
    });

    // Filter cards navigation
    const filterCards = document.querySelectorAll('.filter-card');
    filterCards.forEach(card => {
        card.addEventListener('click', handleFilterCardClick);
    });

    // Modal
    const modal = document.getElementById('topicModal');
    const closeBtn = document.querySelector('.close');
    
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Teclado
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
}

// Manejo de navegación
function handleNavigation(event) {
    // Solo aplicar en el index, no en otras páginas
    if (window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/')) {
        const href = event.target.getAttribute('href');
        
        // Solo interceptar enlaces internos (que empiecen con #)
        if (href && href.startsWith('#')) {
            event.preventDefault();
            
            // Remover clase active de todos los enlaces
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            
            // Agregar clase active al enlace clickeado
            event.target.classList.add('active');
            
            // Scroll suave a la sección
            const targetId = href.substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
        // Si no es un enlace interno, permitir el comportamiento normal (navegación a otras páginas)
    }
    // Si no es el index, permitir que el enlace funcione normalmente
}

// Manejo de búsqueda
function handleSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    
    if (searchTerm === '') {
        filteredTopics = [...topics];
    } else {
        filteredTopics = topics.filter(topic => 
            topic.title.toLowerCase().includes(searchTerm) ||
            topic.description.toLowerCase().includes(searchTerm) ||
            topic.content.toLowerCase().includes(searchTerm)
        );
    }
    
    renderTopics();
    updateFilterButtons();
}

// Manejo de filtros
function handleFilter(event) {
    const filter = event.target.getAttribute('data-filter');
    currentFilter = filter;
    
    // Actualizar botones de filtro
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Aplicar filtro
    if (filter === 'all') {
        filteredTopics = [...topics];
    } else {
        filteredTopics = topics.filter(topic => topic.category === filter);
    }
    
    renderTopics();
}

// Manejo de clics en filter cards
function handleFilterCardClick(event) {
    const category = event.currentTarget.getAttribute('data-category');
    
    // Navegar a la página correspondiente según la categoría
    switch(category) {
        case 'introduccion':
            window.location.href = '1. Introduccion/1. Introduccion.html';
            break;
        case 'procesos':
            window.location.href = '2. Procesos organizacionales/2. Procesos organizacionales.html';
            break;
        case 'requisitos':
            // Aquí puedes agregar la URL cuando se cree la página
            alert('Página en desarrollo: 3. Ingeniería de requisitos');
            break;
        case 'informacion':
            // Aquí puedes agregar la URL cuando se cree la página
            alert('Página en desarrollo: 4. Recolección de información');
            break;
        case 'formulacion':
            // Aquí puedes agregar la URL cuando se cree la página
            alert('Página en desarrollo: 5. Formulación de Proyecto');
            break;
        case 'metodologias':
            // Aquí puedes agregar la URL cuando se cree la página
            alert('Página en desarrollo: 6-10. Metodologías y formularios');
            break;
        case 'tecnologia':
            // Aquí puedes agregar la URL cuando se cree la página
            alert('Página en desarrollo: 11-15. Tecnología y servicios');
            break;
        case 'arquitectura':
            // Aquí puedes agregar la URL cuando se cree la página
            alert('Página en desarrollo: 16-25. Arquitectura y modelado');
            break;
        case 'desarrollo':
            // Aquí puedes agregar la URL cuando se cree la página
            alert('Página en desarrollo: 26-40. Desarrollo de software');
            break;
        case 'testing':
            // Aquí puedes agregar la URL cuando se cree la página
            alert('Página en desarrollo: 41-50. Testing e infraestructura');
            break;
        case 'entrega':
            // Aquí puedes agregar la URL cuando se cree la página
            alert('Página en desarrollo: 51-60. Entrega y mantenimiento');
            break;
        default:
            // Para 'all', mostrar todos los temas filtrados
            if (category === 'all') {
                currentFilter = 'all';
                filteredTopics = [...topics];
                renderTopics();
                updateFilterButtons();
            }
            break;
    }
}

// Actualizar botones de filtro
function updateFilterButtons() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const allBtn = document.querySelector('[data-filter="all"]');
    if (allBtn) {
        allBtn.classList.add('active');
    }
}

// Renderizar temas
function renderTopics() {
    const topicsGrid = document.getElementById('topicsGrid');
    
    if (filteredTopics.length === 0) {
        topicsGrid.innerHTML = `
            <div class="no-results">
                <h3>No se encontraron temas</h3>
                <p>Intenta con otros términos de búsqueda o cambia el filtro.</p>
            </div>
        `;
        return;
    }
    
    topicsGrid.innerHTML = filteredTopics.map(topic => `
        <div class="topic-card" data-topic-id="${topic.id}" data-category="${topic.category}">
            <div class="topic-number">${topic.id}</div>
            <h3 class="topic-title">${getCategoryEmoji(topic.category)} ${topic.title}</h3>
            <p class="topic-description">${topic.description}</p>
        </div>
    `).join('');
    
    // Agregar event listeners a las tarjetas
    const topicCards = document.querySelectorAll('.topic-card');
    topicCards.forEach(card => {
        card.addEventListener('click', function() {
            const topicId = parseInt(this.getAttribute('data-topic-id'));
            const topic = topics.find(t => t.id === topicId);
            if (topic) {
                showTopicModal(topic);
            }
        });
        
        // Efecto de hover con delay
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Animación de entrada
    setTimeout(() => {
        topicCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 100);
}

// Mostrar modal del tema
function showTopicModal(topic) {
    const modal = document.getElementById('topicModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    
    modalTitle.textContent = `${topic.id}. ${topic.title}`;
    
    // Construir el contenido del modal
    let modalHTML = `
        <p><strong>Descripción:</strong> ${topic.description}</p>
        <br>
        <p><strong>Contenido detallado:</strong></p>
        <p>${topic.content}</p>
        <br>
        <div class="topic-meta">
            <span class="topic-category">${getCategoryEmoji(topic.category)} Categoría: ${getCategoryName(topic.category)}</span>
        </div>
    `;
    
    // Agregar botón para ir a la página si existe o crear una nueva
    const hasPage = topicHasPage(topic);
    const pageUrl = getTopicPageUrl(topic);
    
    if (hasPage) {
        modalHTML += `
            <br>
            <div class="topic-actions">
                <button class="btn-primary" onclick="window.open('${pageUrl}', '_blank')">
                    📄 Ver página completa
                </button>
            </div>
        `;
    } else {
        modalHTML += `
            <br>
            <div class="topic-actions">
                <button class="btn-secondary" onclick="createPageForTopic(${topic.id})">
                    ➕ Crear página
                </button>
            </div>
        `;
    }
    
    modalContent.innerHTML = modalHTML;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Animación de entrada
    const modalContentEl = modal.querySelector('.modal-content');
    modalContentEl.style.animation = 'modalSlideIn 0.3s ease';
}

// Cerrar modal
function closeModal() {
    const modal = document.getElementById('topicModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Obtener nombre de categoría
function getCategoryName(category) {
    const categoryNames = {
        'introduccion': 'Introducción',
        'procesos': 'Procesos',
        'metodologias': 'Metodologías',
        'documentacion': 'Documentación',
        'arquitectura': 'Arquitectura'
    };
    
    return categoryNames[category] || category;
}

// Obtener emoji para cada categoría
function getCategoryEmoji(category) {
    const categoryEmojis = {
        'introduccion': '🚀',
        'procesos': '⚙️',
        'metodologias': '📋',
        'documentacion': '📚',
        'arquitectura': '🏗️'
    };
    
    return categoryEmojis[category] || '📄';
}

// Funciones de utilidad
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimización de búsqueda con debounce
const debouncedSearch = debounce(handleSearch, 300);
document.getElementById('searchInput').addEventListener('input', debouncedSearch);

// Funciones adicionales para interactividad
function addTopicToFavorites(topicId) {
    // Implementar funcionalidad de favoritos
    // Agregar tema ${topicId} a favoritos
}

function shareTopic(topicId) {
    // Implementar funcionalidad de compartir
    // Compartir tema ${topicId}
}

// Estadísticas de uso
function trackTopicView(topicId) {
    // Tema ${topicId} visualizado
}

// Función para exportar datos
function exportTopics() {
    const dataStr = JSON.stringify(topics, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'temas-proyecto-sena.json';
    link.click();
    URL.revokeObjectURL(url);
}

// Función para imprimir temas
function printTopics() {
    window.print();
}

// Inicializar tooltips y efectos adicionales
function initializeTooltips() {
    const topicCards = document.querySelectorAll('.topic-card');
    topicCards.forEach(card => {
        card.setAttribute('title', 'Haz clic para ver más detalles');
    });
}

// Función para cambiar tema visual
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
}

// Cargar tema guardado
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
}

// Inicializar tema al cargar
loadSavedTheme();

// Función para mostrar estadísticas
function showStats() {
    const stats = {
        totalTopics: topics.length,
        categories: [...new Set(topics.map(t => t.category))].length,
        filteredTopics: filteredTopics.length
    };
    
    alert(`Estadísticas del proyecto:
    - Total de temas: ${stats.totalTopics}
    - Categorías: ${stats.categories}
    - Temas filtrados: ${stats.filteredTopics}`);
}

// Agregar funcionalidad de teclado
document.addEventListener('keydown', function(event) {
    // Ctrl + F para buscar
    if (event.ctrlKey && event.key === 'f') {
        event.preventDefault();
        document.getElementById('searchInput').focus();
    }
    
    // Ctrl + S para exportar
    if (event.ctrlKey && event.key === 's') {
        event.preventDefault();
        exportTopics();
    }
});

// Sistema de temas del Proyecto SENA cargado correctamente

// ===== FUNCIONES COMUNES EXTRAÍDAS DE PÁGINAS =====

function openSitemapModal() {
    const modal = document.getElementById('sitemapModal');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeSitemapModal() {
    const modal = document.getElementById('sitemapModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function toggleProyectoDropdown() {
    const dropdown = document.querySelectorAll('.nav-dropdown')[0];
    const menu = dropdown.querySelector('.dropdown-menu');
    menu.classList.toggle('show');
}

function toggleDropdown() {
    const dropdown = document.querySelectorAll('.nav-dropdown')[1];
    const menu = dropdown.querySelector('.dropdown-menu');
    menu.classList.toggle('show');
}

function toggleFooterSitemap() {
    const menu = document.getElementById('footerSitemapMenu');
    menu.classList.toggle('show');
}

// Close dropdowns when clicking outside
document.addEventListener('click', function(event) {
    const dropdowns = document.querySelectorAll('.nav-dropdown');
    dropdowns.forEach(dropdown => {
        if (!dropdown.contains(event.target)) {
            const menu = dropdown.querySelector('.dropdown-menu');
            menu.classList.remove('show');
        }
    });
    
    const footerDropdown = document.querySelector('.footer-dropdown');
    if (footerDropdown && !footerDropdown.contains(event.target)) {
        const menu = document.getElementById('footerSitemapMenu');
        if (menu) {
            menu.classList.remove('show');
        }
    }
});
