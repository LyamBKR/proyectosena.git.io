# 📝 Changelog - Proyecto SENA

Todos los cambios notables de este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.5.0] - 2025-01-27

### ✨ Añadido
- **Contenido Completo de Propuesta de Investigación**
  - Reemplazado todo el contenido de "en construcción" con propuesta completa
  - Título de investigación: "¿Qué sucede con los videojuegos en Colombia?"
  - Sección de Planteamiento completa con justificación, antecedentes, problema y pregunta de investigación
  - Sección de Objetivos con objetivos específicos, actividades, recursos y resultados esperados
  - Sección de Metodología completa con enfoque mixto, nivel descriptivo/analítico
  - Información detallada sobre población objeto de investigación, muestra, técnicas e instrumentos
  - 132 líneas de contenido agregadas

### 📚 Documentación
- **CHANGELOG.md** actualizado con versión 2.5.0 y contenido completo de investigación

## [2.4.1] - 2025-01-27

### 🔧 Cambiado
- **Página de Investigación (Investigación/Investigación.html)**
  - Título actualizado de "Página en Construcción" a "Propuesta de Investigación Formativa"
  - Mejora en la descripción y propósito de la sección
  - Enfoque más específico en investigación formativa

### 📚 Documentación
- **README.md** actualizado con nuevo título de sección
- **CHANGELOG.md** actualizado con versión 2.4.1

## [2.4.0] - 2025-01-27

### ✨ Añadido
- **Nueva Página de Investigación**
  - Sección dedicada "Investigación" agregada al proyecto
  - Página con estilo consistente con el resto del sitio
  - Botón "Descargar Excel" para descarga de datos y reportes
  - Carpeta `investigación/` creada para almacenar archivos Excel
  - README.md en la carpeta de investigación con documentación
  - Enlace directo en el menú principal antes de "Desarrollador"
  - Integrada en el sitemap modal para navegación

### 🔧 Cambiado
- **Navegación Principal (index.html)**
  - Botón "Investigación" agregado como enlace directo en el menú principal
  - Enlace "Investigación" removido del submenú "Proyecto" para mejor accesibilidad
  - Posicionado estratégicamente antes del menú "Desarrollador"

- **Página de Investigación (Investigación/Investigación.html)**
  - Botón "VER PDF" reemplazado por "Descargar Excel"
  - Ícono actualizado a icono de descarga
  - Sección del visor PDF eliminada completamente
  - Botón "Descargar Excel" conectado a la carpeta `investigación/`
  - Mantiene el mismo estilo visual que las demás páginas del proyecto

### 📚 Documentación
- **README.md** actualizado con información sobre la nueva sección de Investigación
- **CHANGELOG.md** actualizado con los cambios de la versión 2.4.0
- Documentación de estructura del proyecto actualizada

## [2.3.0] - 2025-01-27

### ✨ Añadido
- **Refactorización de Estilos CSS**
  - Nuevas clases CSS agregadas a `style.css` para reemplazar estilos inline
  - Clases para process cards con bordes de colores (purple, green, blue, orange, red)
  - Clases para phase cards con diferentes variantes de color
  - Clases para badges de prioridad (alta, media, baja)
  - Clases para tablas con estilos consistentes
  - Clases específicas para diagramas UML
  - Más de 100 nuevas clases CSS para mejorar la mantenibilidad del código

### 🔧 Cambiado
- **Archivo 8. Evaluacion de requerimientos.html**
  - Reemplazados estilos inline por clases CSS externas
  - Más de 100 estilos inline convertidos a clases reutilizables
  - Mejora significativa en la mantenibilidad del código
  - Reducción de advertencias del linter

### 🐛 Corregido
- **Linter Warnings**
  - Eliminación progresiva de advertencias de estilos inline
  - Mejora en la calidad del código HTML/CSS
  - Código más mantenible y escalable

## [2.2.0] - 2025-01-27

### ✨ Añadido
- **Mejoras de Estilo y Estructura**
  - Títulos de introducción agregados en páginas 6, 7, 9, 22-28
  - Estilo unificado con página 10 como referencia
  - Secciones de introducción con `intro-highlight` y `intro-content`
  - Estructura consistente en todas las páginas principales

- **Mejoras de Navegación**
  - Revisión completa del modal del sitemap en todas las 60 páginas
  - Verificación de que todos los enlaces funcionen correctamente
  - Estructura del modal estandarizada en todo el proyecto

- **Verificación de Compatibilidad**
  - Script de verificación de límites de caracteres para GitHub
  - Confirmación de que todas las rutas están dentro del límite (255 caracteres)
  - Ruta más larga: 204 caracteres (dentro del límite)

### 🔧 Cambiado
- **Páginas 6 y 7**
  - Recreado estilo de la página 9 con secciones `intro-highlight`
  - Mejora de la estructura visual y organización del contenido
  - Consistencia en el diseño de las secciones de introducción

- **Páginas 22-28**
  - Agregado título de introducción estándar
  - Unificación del estilo con el resto del proyecto
  - Mejora de la jerarquía visual del contenido

### 🐛 Corregido
- **Modal del Sitemap**
  - Verificación y corrección de la estructura en todas las páginas
  - Asegura que todas las 60 páginas tengan el modal completo y correcto
  - Validación de todos los enlaces del sitemap

- **Títulos de Secciones**
  - Corrección de títulos truncados en algunas páginas
  - Estandarización de títulos de introducción

### 📚 Documentación
- **CHANGELOG.md** actualizado con los cambios recientes
- **README.md** actualizado con nuevas mejoras
- Verificación de compatibilidad con GitHub documentada

## [2.1.1] - 2025-01-27

### 🧹 Limpieza
- **Código Optimizado**
  - Eliminación de console.log y console.error innecesarios
  - Limpieza de reglas CSS duplicadas
  - Eliminación de líneas vacías excesivas
  - Optimización del código JavaScript
  - Revisión completa de todas las páginas (1-60)

## [2.1.0] - 2025-01-27

### ✨ Añadido
- **Visor de PDF Integrado**
  - Visor de PDF en todas las páginas del proyecto (módulos 1-60)
  - Sección "En Construcción 🚧" para módulos pendientes
  - Botones de descarga y mostrar/ocultar PDF
  - Diseño responsive para todos los dispositivos
  - Carga perezosa del contenido PDF

- **Documentación Completa**
  - README.md actualizado con nuevas funcionalidades
  - CHANGELOG.md con historial detallado de cambios
  - CONTRIBUTING.md con guía de contribución
  - LICENSE con licencia MIT
  - pdf/README.md con instrucciones del visor

## [2.0.0] - 2025-01-27

### ✨ Añadido
- **Sistema de Filtros Avanzados**
  - Filtros por categorías (introducción, desarrollo, testing, etc.)
  - Filtros por porcentaje de completado (0% a 100%)
  - Filtros de estado (En Progreso, Completados)
  - Búsqueda inteligente por título y descripción

- **Progreso Dinámico**
  - Barra de progreso general del proyecto
  - Actualización automática cuando un módulo llega al 100%
  - Contador de módulos completados (29/60)
  - Indicadores visuales de estado

- **Navegación Mejorada**
  - Menú dropdown con todos los 60 módulos
  - Iconos descriptivos para cada módulo
  - Categorización lógica de módulos
  - Estado activo en el menú de navegación

- **Interfaz de Usuario**
  - Botones de filtro con diseño consistente
  - Animaciones suaves en las transiciones
  - Diseño responsive mejorado
  - Colores y gradientes actualizados

### 🔧 Cambiado
- **Estructura de Navegación**
  - Menú principal reorganizado
  - Iconos actualizados para mejor identificación
  - Categorías de módulos estandarizadas

- **Sistema de Progreso**
  - Cálculo automático del progreso general
  - Actualización en tiempo real
  - Indicadores visuales mejorados

### 🐛 Corregido
- **Enlaces Rotos**
  - Corregidos enlaces de módulos 28 y 29
  - Verificación de todos los enlaces del proyecto
  - Codificación de caracteres especiales

- **Responsive Design**
  - Botones de filtro con tamaño consistente
  - Mejoras en dispositivos móviles
  - Ajustes de espaciado y alineación

### 📚 Documentación
- **README.md** actualizado con nuevas funcionalidades
- **CHANGELOG.md** creado para seguimiento de cambios
- **.gitignore** mejorado con más patrones
- Documentación técnica actualizada

## [1.0.0] - 2025-01-26

### ✨ Añadido
- **Estructura Base del Proyecto**
  - 60 páginas de módulos del SENA
  - Diseño responsive con CSS Grid y Flexbox
  - Navegación básica entre páginas
  - Estilos modernos con gradientes y animaciones

- **Funcionalidades Principales**
  - Búsqueda de módulos
  - Mapa del sitio
  - Enlaces a CVs del desarrollador
  - Integración con redes sociales

- **Contenido Educativo**
  - Módulos completos de desarrollo de software
  - Documentación técnica detallada
  - Ejemplos prácticos y casos de uso
  - Referencias y enlaces útiles

---

## 📊 Estadísticas del Proyecto

- **Total de Módulos**: 60
- **Módulos Completados**: 29 (48%)
- **Archivos HTML**: 60
- **Archivos CSS**: 1
- **Archivos JavaScript**: 1
- **Líneas de Código**: ~15,000+

## 🎯 Próximas Versiones

### [2.1.0] - Próximamente
- [ ] Sistema de favoritos
- [ ] Modo oscuro/claro
- [ ] Exportación de progreso
- [ ] Notificaciones de actualizaciones

### [2.2.0] - Futuro
- [ ] Integración con base de datos
- [ ] Sistema de usuarios
- [ ] Comentarios y feedback
- [ ] API REST para módulos

---

*Para más información sobre el proyecto, consulta el [README.md](README.md)*