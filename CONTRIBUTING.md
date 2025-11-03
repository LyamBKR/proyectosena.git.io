# 🤝 Guía de Contribución - Proyecto SENA

¡Gracias por tu interés en contribuir al Proyecto SENA! Este documento proporciona
guías para contribuir al proyecto de manera efectiva.

## 📋 Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [Cómo Contribuir](#cómo-contribuir)
- [Proceso de Desarrollo](#proceso-de-desarrollo)
- [Estándares de Código](#estándares-de-código)
- [Reportar Problemas](#reportar-problemas)
- [Solicitar Funcionalidades](#solicitar-funcionalidades)

## 📜 Código de Conducta

Este proyecto sigue un código de conducta para asegurar un ambiente acogedor y
colaborativo para todos los participantes.

### Nuestros Compromisos

- Usar lenguaje acogedor e inclusivo
- Respetar diferentes puntos de vista y experiencias
- Aceptar críticas constructivas con gracia
- Enfocarse en lo que es mejor para la comunidad
- Mostrar empatía hacia otros miembros de la comunidad

## 🚀 Cómo Contribuir

### 1. Fork del Proyecto

1. Ve al repositorio del proyecto
2. Haz clic en "Fork" en la esquina superior derecha
3. Clona tu fork localmente:
   ```bash
   git clone https://github.com/tu-usuario/proyecto-sena.git
   cd proyecto-sena
   ```

### 2. Crear una Rama

```bash
git checkout -b feature/nueva-funcionalidad
# o
git checkout -b fix/correccion-bug
```

### 3. Hacer Cambios

- Realiza tus cambios siguiendo los estándares de código
- Añade tests si es necesario
- Actualiza la documentación si corresponde

### 4. Commit y Push

```bash
git add .
git commit -m "feat: añadir nueva funcionalidad de filtros"
git push origin feature/nueva-funcionalidad
```

### 5. Crear Pull Request

1. Ve a tu fork en GitHub
2. Haz clic en "New Pull Request"
3. Describe tus cambios detalladamente
4. Espera la revisión del equipo

## 🔧 Proceso de Desarrollo

### Estructura del Proyecto

```
proyecto-sena/
├── index.html              # Página principal
├── css/
│   └── style.css          # Estilos principales
├── js/
│   └── script.js          # JavaScript principal
├── [1-60]. [Módulos]/     # 60 páginas de módulos SENA
│   ├── [Número]. [Título].html  # Página HTML del módulo
│   └── [Número]. [Título].pdf   # PDF del módulo (opcional)
├── Investigación/         # Sección especial de investigación
│   ├── Investigación.html # Página de investigación con descarga Excel
│   └── investigación/     # Carpeta con archivos Excel de investigación
│       └── README.md      # Documentación de la carpeta de investigación
├── cv/                    # CVs del desarrollador
├── pdf/                   # Documentos PDF adicionales
│   └── README.md          # Instrucciones del visor PDF
├── README.md              # Documentación principal
├── CHANGELOG.md           # Historial de cambios
├── CONTRIBUTING.md        # Guía de contribución
└── LICENSE                # Licencia MIT
```

### Convenciones de Nombres

- **Carpetas de Módulos**: Formato `[Número]. [Título del módulo]`
- **Archivos HTML**: Formato `[Número]. [Título del módulo].html`
- **Archivos PDF**: Formato `[Número]. [Título del módulo].pdf`
- **Límite de Caracteres**: Máximo 255 caracteres para rutas completas (GitHub)
  - Ruta más larga actual: 204 caracteres
  - Todas las rutas verificadas y dentro del límite

### Flujo de Trabajo

1. **Desarrollo**: Trabaja en tu rama feature
2. **Testing**: Prueba tus cambios localmente
3. **Documentación**: Actualiza README/CHANGELOG si es necesario
4. **Pull Request**: Crea PR con descripción detallada
5. **Revisión**: El equipo revisa y comenta
6. **Merge**: Una vez aprobado, se integra al proyecto

## 📝 Estándares de Código

### HTML

- Usar indentación de 4 espacios
- Atributos en comillas dobles
- Etiquetas semánticas apropiadas
- Comentarios descriptivos para secciones complejas

```html
<!-- Ejemplo de estructura HTML -->
<section class="feature-section">
    <div class="container">
        <h2 class="section-title">Título de la Sección</h2>
        <!-- Contenido aquí -->
    </div>
</section>
```

### CSS

- Usar variables CSS para colores y espaciado
- Organizar por secciones con comentarios
- Usar metodología BEM para nombres de clases
- Responsive design mobile-first

```css
/* Ejemplo de estructura CSS */
.feature-section {
    padding: var(--space-lg);
    background: var(--bg-primary);
}

.feature-section__title {
    font-size: var(--font-size-xl);
    color: var(--text-primary);
}
```

### JavaScript

- Usar const/let en lugar de var
- Funciones con nombres descriptivos
- Comentarios JSDoc para funciones complejas
- Manejo de errores apropiado

```javascript
/**
 * Filtra módulos por categoría
 * @param {string} category - Categoría a filtrar
 * @returns {Array} Array de módulos filtrados
 */
function filterByCategory(category) {
    return projectModules.filter(module => 
        module.category === category
    );
}

/**
 * Controla la visibilidad del visor de PDF
 */
function togglePdfViewer() {
    const iframe = document.querySelector('.pdf-viewer-iframe');
    const container = document.querySelector('.pdf-viewer-iframe-container');
    
    if (iframe.style.display === 'none') {
        iframe.style.display = 'block';
        container.style.height = '600px';
    } else {
        iframe.style.display = 'none';
        container.style.height = '0px';
    }
}
```

### Visor de PDF

- **Ubicación**: Al final de cada página, antes del footer
- **Funcionalidad**: Mostrar/ocultar y descargar PDF
- **Responsive**: Se adapta a diferentes tamaños de pantalla
- **Accesibilidad**: Compatible con lectores de pantalla

### Estructura de Páginas

- **Título de Introducción**: Todas las páginas principales tienen un título de introducción
- **Sección Intro**: Uso de `intro-highlight` y `intro-content` para consistencia
- **Modal Sitemap**: Todas las páginas incluyen el modal del sitemap antes del cierre de `</body>`
- **Navegación**: Enlaces de navegación previo/actual/siguiente en todas las páginas

```html
<!-- Estructura del visor de PDF -->
<section class="pdf-viewer-section">
    <div class="pdf-viewer-container">
        <div class="pdf-viewer-header">
            <h3 class="pdf-viewer-title">📄 Documento PDF</h3>
            <p class="pdf-viewer-subtitle">Visualiza el contenido completo</p>
        </div>
        <div class="pdf-viewer-content">
            <div class="pdf-viewer-iframe-container">
                <iframe src="../pdf/Proyecto_SENA_Completo.pdf" 
                        class="pdf-viewer-iframe"
                        title="Visor de PDF - Proyecto SENA"
                        loading="lazy">
                </iframe>
            </div>
            <div class="pdf-viewer-actions">
                <a href="../pdf/Proyecto_SENA_Completo.pdf" 
                   class="pdf-viewer-button" 
                   target="_blank" 
                   rel="noopener">
                    <span class="pdf-viewer-icon">📥</span>
                    <span>Descargar PDF</span>
                </a>
                <button class="pdf-viewer-button" onclick="togglePdfViewer()">
                    <span class="pdf-viewer-icon">👁️</span>
                    <span>Mostrar/Ocultar PDF</span>
                </button>
            </div>
        </div>
    </div>
</section>
```

## 🐛 Reportar Problemas

### Antes de Reportar

1. Verifica que el problema no haya sido reportado antes
2. Actualiza a la última versión
3. Revisa la documentación

### Información Requerida

- **Descripción**: Descripción clara del problema
- **Pasos para Reproducir**: Lista de pasos específicos
- **Comportamiento Esperado**: Lo que debería pasar
- **Comportamiento Actual**: Lo que está pasando
- **Screenshots**: Si aplica
- **Información del Sistema**: Navegador, OS, etc.

### Template de Issue

```markdown
## 🐛 Descripción del Problema
[Descripción clara del problema]

## 🔄 Pasos para Reproducir
1. Ve a '...'
2. Haz clic en '...'
3. Desplázate hasta '...'
4. Ve el error

## ✅ Comportamiento Esperado
[Lo que debería pasar]

## ❌ Comportamiento Actual
[Lo que está pasando]

## 📱 Información Adicional
- Navegador: [ej. Chrome 91]
- OS: [ej. Windows 10]
- Versión: [ej. 2.0.0]
```

## 💡 Solicitar Funcionalidades

### Antes de Solicitar

1. Verifica que la funcionalidad no exista
2. Revisa si hay issues similares
3. Considera el alcance del proyecto

### Información Requerida

- **Descripción**: Descripción clara de la funcionalidad
- **Justificación**: Por qué es útil para el proyecto
- **Casos de Uso**: Ejemplos específicos de uso
- **Alternativas**: Otras soluciones consideradas

## 📚 Recursos Adicionales

- [Documentación del SENA](https://www.sena.edu.co/)
- [Guías de Desarrollo Web](https://developer.mozilla.org/)
- [Estándares de Accesibilidad](https://www.w3.org/WAI/WCAG21/quickref/)

## 📞 Contacto

- **Desarrollador Principal**: Lyam Acosta Forero
- **GitHub**: [@LyamBKR](https://github.com/LyamBKR)
- **LinkedIn**: [Lyam Acosta Forero](https://www.linkedin.com/in/lyam-acosta-forero-11aa34204/)

---

¡Gracias por contribuir al Proyecto SENA! 🎓✨