// ============================================
// PROTOTIPO FUNCIONAL - JAVASCRIPT
// Sistema de Gestión de Usuarios
// ============================================

// Almacenamiento simulado (LocalStorage)
const STORAGE_KEY = 'juego_secreto_users';

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    setupFormValidations();
});

// Inicializar aplicación
function initializeApp() {
    // Cargar usuarios de ejemplo si no existen
    if (!localStorage.getItem(STORAGE_KEY)) {
        const defaultUsers = [
            {
                email: 'demo@ejemplo.com',
                password: 'demo123',
                nombres: 'Usuario',
                apellidos: 'Demo',
                cedula: '123456789',
                fechaNacimiento: '1990-01-01'
            }
        ];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultUsers));
    }
    
    // Mostrar pantalla inicial
    showScreen('home-screen');
}

// Navegación entre pantallas
function showScreen(screenId) {
    // Ocultar todas las pantallas
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Mostrar pantalla seleccionada
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
        
        // Limpiar formularios al cambiar de pantalla
        if (screenId === 'login-screen' || screenId === 'register-screen') {
            clearForm(screenId === 'login-screen' ? 'login-form' : 'register-form');
        }
    }
}

// Limpiar formulario
function clearForm(formId) {
    const form = document.getElementById(formId);
    if (form) {
        form.reset();
        // Limpiar mensajes de error
        form.querySelectorAll('.error-message').forEach(error => {
            error.textContent = '';
        });
    }
}

// Configurar validaciones de formularios
function setupFormValidations() {
    // Validación de fecha de nacimiento
    const fechaInput = document.getElementById('register-fecha-nacimiento');
    if (fechaInput) {
        fechaInput.addEventListener('change', validateFechaNacimiento);
    }
    
    // Validación de cédula
    const cedulaInput = document.getElementById('register-cedula');
    if (cedulaInput) {
        cedulaInput.addEventListener('input', validateCedula);
    }
    
    // Validación de email
    const emailInputs = document.querySelectorAll('input[type="email"]');
    emailInputs.forEach(input => {
        input.addEventListener('blur', validateEmail);
    });
}

// Validar fecha de nacimiento (debe ser mayor de 18 años)
function validateFechaNacimiento(event) {
    const input = event.target;
    const errorElement = document.getElementById('register-fecha-error');
    const fecha = new Date(input.value);
    const hoy = new Date();
    const edad = hoy.getFullYear() - fecha.getFullYear();
    const mes = hoy.getMonth() - fecha.getMonth();
    
    if (mes < 0 || (mes === 0 && hoy.getDate() < fecha.getDate())) {
        edad--;
    }
    
    if (edad < 18) {
        showFieldError('register-fecha-error', 'Debes ser mayor de 18 años para registrarte');
        input.setCustomValidity('Debes ser mayor de 18 años');
    } else {
        clearFieldError('register-fecha-error');
        input.setCustomValidity('');
    }
}

// Validar cédula (solo números, 6-12 dígitos)
function validateCedula(event) {
    const input = event.target;
    const value = input.value.replace(/\D/g, ''); // Solo números
    const errorElement = document.getElementById('register-cedula-error');
    
    if (value.length > 0 && (value.length < 6 || value.length > 12)) {
        showFieldError('register-cedula-error', 'La cédula debe tener entre 6 y 12 dígitos');
        input.setCustomValidity('Cédula inválida');
    } else {
        clearFieldError('register-cedula-error');
        input.setCustomValidity('');
        input.value = value; // Actualizar solo con números
    }
}

// Validar email
function validateEmail(event) {
    const input = event.target;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errorId = input.id.replace('register-email', 'register-email-error') || 
                    input.id.replace('login-email', 'login-email-error');
    const errorElement = document.getElementById(errorId);
    
    if (input.value && !emailRegex.test(input.value)) {
        showFieldError(errorId, 'Por favor ingresa un email válido');
        input.setCustomValidity('Email inválido');
    } else {
        clearFieldError(errorId);
        input.setCustomValidity('');
    }
}

// Manejar Login
function handleLogin(event) {
    event.preventDefault();
    
    const form = event.target;
    const email = form.email.value.trim();
    const password = form.password.value;
    
    // Validaciones básicas
    if (!email || !password) {
        showError('login-error', 'Por favor completa todos los campos requeridos');
        return;
    }
    
    // Mostrar loading
    showLoading(true);
    
    // Simular petición asíncrona
    setTimeout(() => {
        showLoading(false);
        
        // Buscar usuario
        const users = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        const user = users.find(u => 
            (u.email === email || u.cedula === email) && u.password === password
        );
        
        if (user) {
            // Login exitoso
            showSuccess('login-success', '¡Bienvenido de nuevo!', {
                nombre: `${user.nombres} ${user.apellidos}`,
                email: user.email
            });
        } else {
            // Credenciales incorrectas
            showError('login-error', 'Credenciales incorrectas', {
                detalle: 'El usuario o contraseña ingresados no son correctos. Por favor verifica tus datos e intenta nuevamente.',
                sugerencia: 'Si olvidaste tu contraseña, puedes recuperarla usando el enlace correspondiente.'
            });
        }
    }, 1000);
}

// Manejar Registro
function handleRegister(event) {
    event.preventDefault();
    
    const form = event.target;
    const datos = {
        nombres: form.nombres.value.trim(),
        apellidos: form.apellidos.value.trim(),
        cedula: form.cedula.value.trim(),
        fechaNacimiento: form.fechaNacimiento.value,
        email: form.email.value.trim() || null
    };
    
    // Validaciones
    if (!datos.nombres || !datos.apellidos || !datos.cedula || !datos.fechaNacimiento) {
        showError('register-error', 'Por favor completa todos los campos obligatorios');
        return;
    }
    
    // Validar edad
    const fecha = new Date(datos.fechaNacimiento);
    const hoy = new Date();
    const edad = hoy.getFullYear() - fecha.getFullYear();
    const mes = hoy.getMonth() - fecha.getMonth();
    
    if (mes < 0 || (mes === 0 && hoy.getDate() < fecha.getDate())) {
        edad--;
    }
    
    if (edad < 18) {
        showError('register-error', 'Debes ser mayor de 18 años para registrarte');
        return;
    }
    
    // Mostrar loading
    showLoading(true);
    
    // Simular petición asíncrona
    setTimeout(() => {
        showLoading(false);
        
        // Verificar si el usuario ya existe
        const users = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        const usuarioExistente = users.find(u => u.cedula === datos.cedula);
        
        if (usuarioExistente) {
            showError('register-error', 'Usuario ya registrado', {
                detalle: `Ya existe un usuario registrado con la cédula ${datos.cedula}.`,
                sugerencia: 'Si ya tienes una cuenta, puedes iniciar sesión en lugar de registrarte.'
            });
            return;
        }
        
        // Validar email si fue proporcionado
        if (datos.email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(datos.email)) {
                showError('register-error', 'Email inválido', {
                    detalle: 'El formato del email ingresado no es válido.',
                    sugerencia: 'Por favor verifica que el email tenga el formato correcto (ejemplo@dominio.com).'
                });
                return;
            }
        }
        
        // Guardar usuario (simulación)
        const nuevoUsuario = {
            ...datos,
            password: 'temp123', // En producción, esto se generaría de forma segura
            fechaRegistro: new Date().toISOString()
        };
        
        users.push(nuevoUsuario);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
        
        // Registro exitoso
        showSuccess('register-success', '¡Registro exitoso!', {
            nombre: `${datos.nombres} ${datos.apellidos}`,
            cedula: datos.cedula,
            mensaje: 'Tu cuenta ha sido creada exitosamente. Ahora puedes iniciar sesión.'
        });
    }, 1500);
}

// Mostrar Error
function showError(errorId, message, details = null) {
    // Si se pasa un ID de error específico, usar ese
    if (errorId && errorId !== 'login-error' && errorId !== 'register-error') {
        const errorElement = document.getElementById(errorId);
        if (errorElement) {
            errorElement.textContent = message;
            return;
        }
    }
    
    // Mostrar pantalla de error
    const errorScreen = document.getElementById('error-screen');
    const titleElement = document.getElementById('error-title');
    const messageElement = document.getElementById('error-message');
    const detailsElement = document.getElementById('error-details');
    
    // Guardar contexto para acciones
    errorScreen.dataset.context = errorId === 'login-error' ? 'login' : 
                                  errorId === 'register-error' ? 'register' : 'general';
    
    titleElement.textContent = 'Error';
    messageElement.textContent = message;
    
    if (details) {
        let detailsHTML = '';
        if (details.detalle) {
            detailsHTML += `<p><strong>Detalle:</strong> ${details.detalle}</p>`;
        }
        if (details.sugerencia) {
            detailsHTML += `<p><strong>Sugerencia:</strong> ${details.sugerencia}</p>`;
        }
        detailsElement.innerHTML = detailsHTML;
        detailsElement.style.display = 'block';
    } else {
        detailsElement.innerHTML = '';
        detailsElement.style.display = 'none';
    }
    
    showScreen('error-screen');
}

// Mostrar Éxito
function showSuccess(successId, message, info = null) {
    const successScreen = document.getElementById('success-screen');
    const titleElement = document.getElementById('success-title');
    const messageElement = document.getElementById('success-message');
    const infoElement = document.getElementById('success-info');
    
    titleElement.textContent = '¡Éxito!';
    messageElement.textContent = message;
    
    if (info) {
        let infoHTML = '';
        if (info.nombre) {
            infoHTML += `<p><strong>Nombre:</strong> ${info.nombre}</p>`;
        }
        if (info.cedula) {
            infoHTML += `<p><strong>Cédula:</strong> ${info.cedula}</p>`;
        }
        if (info.email) {
            infoHTML += `<p><strong>Email:</strong> ${info.email}</p>`;
        }
        if (info.mensaje) {
            infoHTML += `<p>${info.mensaje}</p>`;
        }
        infoElement.innerHTML = infoHTML;
        infoElement.style.display = 'block';
    } else {
        infoElement.innerHTML = '';
        infoElement.style.display = 'none';
    }
    
    showScreen('success-screen');
}

// Manejar acciones de error
function handleErrorAction(action) {
    const errorScreen = document.getElementById('error-screen');
    const context = errorScreen.dataset.context;
    
    switch (action) {
        case 'retry':
            if (context === 'login') {
                showScreen('login-screen');
            } else if (context === 'register') {
                showScreen('register-screen');
            }
            break;
        case 'back':
            if (context === 'login' || context === 'register') {
                showScreen('home-screen');
            } else {
                showScreen('home-screen');
            }
            break;
        case 'home':
            showScreen('home-screen');
            break;
        default:
            showScreen('home-screen');
    }
}

// Mostrar/Ocultar Loading
function showLoading(show) {
    const overlay = document.getElementById('loading-overlay');
    if (show) {
        overlay.classList.add('active');
    } else {
        overlay.classList.remove('active');
    }
}

// Mostrar error en campo específico
function showFieldError(errorId, message) {
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.setAttribute('role', 'alert');
    }
}

// Limpiar error de campo
function clearFieldError(errorId) {
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
        errorElement.textContent = '';
        errorElement.removeAttribute('role');
    }
}

// Simular errores de conexión (para pruebas)
function simulateConnectionError() {
    showError('connection-error', 'Error de conexión', {
        detalle: 'No se pudo establecer conexión con el servidor. Por favor verifica tu conexión a internet.',
        sugerencia: 'Revisa tu conexión a internet e intenta nuevamente en unos momentos.'
    });
}

// Simular error de servidor (para pruebas)
function simulateServerError() {
    showError('server-error', 'Error del servidor', {
        detalle: 'El servidor está experimentando problemas técnicos. Nuestro equipo ha sido notificado.',
        sugerencia: 'Por favor intenta nuevamente en unos minutos. Si el problema persiste, contacta con soporte.'
    });
}

// Exportar funciones para uso en consola (debugging)
if (typeof window !== 'undefined') {
    window.showError = showError;
    window.simulateConnectionError = simulateConnectionError;
    window.simulateServerError = simulateServerError;
}

