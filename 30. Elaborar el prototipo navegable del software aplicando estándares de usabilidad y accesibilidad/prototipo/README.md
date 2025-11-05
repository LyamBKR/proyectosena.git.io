# 🚀 Prototipo Funcional - Sistema de Gestión de Usuarios

## 📋 Descripción

Este es el prototipo navegable funcional desarrollado con JavaScript puro para el sistema de gestión de usuarios del videojuego "Juego Secreto". Implementa todas las funcionalidades requeridas según la especificación del proyecto.

## ✨ Funcionalidades Implementadas

### 1. 🔐 Pantalla de Autenticación
- Validación de credenciales (usuario/email y contraseña)
- Campos requeridos con validación en tiempo real
- Enlace para recuperación de contraseña (simulado)
- Integración con sistema de usuarios
- Manejo de errores de autenticación

### 2. 📝 Pantalla de Registro de Usuario
- Campos obligatorios:
  - Nombres
  - Apellidos
  - Cédula/Número de identificación (validación de formato)
  - Fecha de nacimiento (validación de edad mínima: 18 años)
- Campo opcional:
  - Email (para notificaciones)
- Validación en tiempo real de todos los campos
- Prevención de duplicados (verificación de cédula existente)

### 3. ⚠️ Pantalla de Manejo de Errores
- Muestra mensajes de error claros y descriptivos
- Diferentes tipos de errores:
  - Errores de autenticación
  - Errores de validación
  - Errores de conexión (simulados)
  - Errores de servidor (simulados)
- Opciones de acción:
  - Reintentar operación
  - Volver a la pantalla anterior
  - Regresar al inicio

### 4. 🎨 Paleta de Colores
Implementada según especificación:
- **Verde Esmeralda (#2E7D32)**: Color primario - Botones principales, enlaces activos
- **Azul Profundo (#1976D2)**: Color secundario - Fondos, elementos informativos
- **Naranja Alerta (#F57C00)**: Color terciario - Advertencias, acciones secundarias

## 🎯 Características de Usabilidad

### Accesibilidad
- ✅ Navegación completa por teclado (Tab, Enter, Espacio)
- ✅ Etiquetas ARIA y atributos semánticos
- ✅ Compatible con lectores de pantalla
- ✅ Contraste adecuado (WCAG AA)
- ✅ Soporte para modo alto contraste
- ✅ Reducción de animaciones (prefers-reduced-motion)

### Responsive Design
- ✅ Diseño adaptativo para móvil, tablet y desktop
- ✅ Media queries optimizadas
- ✅ Formularios que se ajustan al tamaño de pantalla

### Validación
- ✅ Validación en tiempo real de campos
- ✅ Mensajes de error claros y específicos
- ✅ Feedback visual inmediato
- ✅ Validación de formato (email, cédula, fecha)

### Experiencia de Usuario
- ✅ Estados de carga visibles
- ✅ Feedback visual en todas las interacciones
- ✅ Transiciones suaves entre pantallas
- ✅ Mensajes de éxito informativos

## 🚀 Cómo Usar

### Acceso Directo
1. Abre el archivo `index.html` en tu navegador
2. O accede desde la página 30 del proyecto usando el botón "Probar Prototipo Funcional"

### Usuario de Prueba
El prototipo incluye un usuario de demostración:
- **Email/Usuario**: `demo@ejemplo.com`
- **Contraseña**: `demo123`

### Flujo de Navegación
1. **Pantalla Inicial**: Selecciona "Iniciar Sesión" o "Registrarse"
2. **Autenticación**: Ingresa credenciales válidas
3. **Registro**: Completa todos los campos obligatorios
4. **Errores**: Se muestran automáticamente cuando ocurren

## 📁 Estructura de Archivos

```
prototipo/
├── index.html          # Página principal del prototipo
├── styles.css         # Estilos con paleta de colores
├── app.js            # Lógica JavaScript funcional
└── README.md         # Este archivo
```

## 🔧 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con variables CSS
- **JavaScript (Vanilla)**: Sin dependencias externas
- **LocalStorage**: Almacenamiento simulado de usuarios

## 📊 Almacenamiento

El prototipo utiliza `localStorage` para simular el almacenamiento de usuarios. Los datos se guardan localmente en el navegador bajo la clave `juego_secreto_users`.

### Estructura de Datos
```javascript
{
  email: string,
  password: string,
  nombres: string,
  apellidos: string,
  cedula: string,
  fechaNacimiento: string (YYYY-MM-DD),
  fechaRegistro: string (ISO)
}
```

## 🧪 Pruebas y Debugging

### Funciones de Prueba Disponibles en Consola
```javascript
// Simular error de conexión
simulateConnectionError()

// Simular error de servidor
simulateServerError()

// Mostrar error personalizado
showError('error-id', 'Mensaje de error', { detalle: '...', sugerencia: '...' })
```

## 🎨 Personalización

### Variables CSS
Todas las variables de color están definidas en `:root` en `styles.css`:
```css
--color-primary: #2E7D32;
--color-secondary: #1976D2;
--color-tertiary: #F57C00;
```

### Modificar Colores
Simplemente cambia los valores de las variables CSS en `styles.css` para personalizar la paleta.

## 📱 Compatibilidad

- ✅ Chrome/Edge (últimas versiones)
- ✅ Firefox (últimas versiones)
- ✅ Safari (últimas versiones)
- ✅ Dispositivos móviles (iOS/Android)

## 🔐 Seguridad (Nota Importante)

Este es un **prototipo funcional** para demostración. En un entorno de producción se deben implementar:
- Autenticación segura con tokens
- Encriptación de contraseñas (hash)
- Validación del lado del servidor
- Protección CSRF
- HTTPS obligatorio
- Sanitización de inputs

## 📝 Notas de Desarrollo

- El prototipo está diseñado para funcionar completamente offline
- No requiere conexión a internet ni servidor backend
- Todos los datos se almacenan localmente en el navegador
- Ideal para pruebas y demostraciones rápidas

## 🎓 Desarrollado Para

**Proyecto SENA - Análisis y Desarrollo de Software**
- **Desarrollador**: Lyam Acosta Forero
- **Proyecto**: Videojuego "Juego Secreto"
- **Módulo**: 30. Elaborar el prototipo navegable del software aplicando estándares de usabilidad y accesibilidad

---

**Versión**: 1.0.0  
**Fecha**: 2025  
**Estado**: ✅ Funcional y Completado

