// Script para agregar barras de progreso a las páginas
(function() {
    'use strict';
    
    // Función para crear la barra de progreso
    function createProgressBar() {
        // Crear el contenedor de la barra de progreso
        const progressContainer = document.createElement('div');
        progressContainer.className = 'page-progress-container';
        
        // Crear la barra de progreso
        const progressFill = document.createElement('div');
        progressFill.className = 'page-progress-fill';
        
        // Agregar la barra al contenedor
        progressContainer.appendChild(progressFill);
        
        // Insertar al inicio del body
        document.body.insertBefore(progressContainer, document.body.firstChild);
        
        return progressFill;
    }
    
    // Función para determinar el progreso basado en el número de página
    function getPageProgress() {
        // Obtener el nombre del archivo actual
        const currentFile = window.location.pathname.split('/').pop();
        
        // Extraer el número de página del nombre del archivo
        const pageMatch = currentFile.match(/^(\d+)\./);
        if (!pageMatch) return 0;
        
        const pageNumber = parseInt(pageMatch[1]);
        
        // Páginas 1-29: 100% completado
        if (pageNumber >= 1 && pageNumber <= 29) {
            return 100;
        }
        
        // Páginas 30-60: 0% (en progreso)
        if (pageNumber >= 30 && pageNumber <= 60) {
            return 0;
        }
        
        // Para el index.html, mostrar 100%
        if (currentFile === 'index.html' || currentFile === '') {
            return 100;
        }
        
        return 0;
    }
    
    // Función para inicializar la barra de progreso
    function initProgressBar() {
        const progressFill = createProgressBar();
        const progress = getPageProgress();
        
        // Aplicar la clase correspondiente y el ancho
        if (progress === 100) {
            progressFill.classList.add('completed');
        } else {
            progressFill.classList.add('in-progress');
        }
        
        // Animar la barra después de un pequeño delay
        setTimeout(() => {
            progressFill.style.width = progress + '%';
        }, 100);
    }
    
    // Inicializar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initProgressBar);
    } else {
        initProgressBar();
    }
})();
