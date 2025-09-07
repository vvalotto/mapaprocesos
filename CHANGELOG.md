con# Changelog

Todos los cambios importantes en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Versionado Semántico](https://semver.org/lang/es/).

## [Unreleased]

### Agregado
- Landing page navegable con mapa de procesos de desarrollo de software
- Sistema de navegación SPA (Single Page Application) con JavaScript vanilla
- Vista de detalle de procesos con información estructurada
- Diseño responsivo con CSS Grid y variables CSS personalizadas
- Navegación por teclado (tecla 'H' para volver al inicio)
- 8 procesos organizados en 3 categorías:
  - **Procesos de Proyecto**: Planificación y Control de Proyectos
  - **Procesos de Producto**: Desarrollo de Requerimientos, Solución Técnica, Integración del Producto, Verificación y Validación
  - **Procesos de Soporte**: Administración de la Configuración, Administración de Modificaciones y Problemas, Gestión de Riesgos

### Características técnicas
- Estructura de datos JSON para procesos con título, tipo, descripción, acciones y artefactos
- Event delegation para manejo eficiente de eventos de navegación
- Diseño visual inspirado en metodologías de desarrollo ágil
- Colores temáticos diferenciados por tipo de proceso
- Layout adaptativo para dispositivos móviles

### Archivos principales
- `index.html`: Punto de entrada con estructura HTML semántica
- `assets/css/styles.css`: Estilos con variables CSS y diseño responsivo
- `assets/js/app.js`: Lógica de navegación y datos de procesos
- `.nojekyll`: Configuración para GitHub Pages
- `.gitignore`: Exclusiones para control de versiones

## [Inicial] - 2025-09-07

### Agregado
- Estructura inicial del repositorio
- README.md con descripción del proyecto
- Licencia MIT