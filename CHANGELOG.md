con# Changelog

Todos los cambios importantes en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Versionado Semántico](https://semver.org/lang/es/).

## [Unreleased]

## [1.0.0] - 2025-09-07

### Transformación de arquitectura: SPA → Sistema Multi-página

### Agregado
- **Sistema de navegación multi-página** reemplazando la arquitectura SPA
- **8 páginas individuales de procesos** con URLs dedicadas en `/procesos/*/`
  - `planificacion/` - Planificación y Control de Proyectos
  - `requerimientos/` - Desarrollo de Requerimientos  
  - `solucion/` - Solución Técnica
  - `integracion/` - Integración del Producto
  - `vv/` - Verificación y Validación
  - `configuracion/` - Administración de la Configuración
  - `modificaciones/` - Administración de Modificaciones y Problemas
  - `riesgos/` - Gestión de Riesgos
- **Sistema de matriz de configuración** con soporte para datos complejos
- **Funcionalidades interactivas especializadas** por proceso
- **Estilos adicionales** para componentes específicos (`cm-extra.css`)

### Cambiado
- **Arquitectura**: De SPA interactiva a navegación web tradicional multi-página
- **JavaScript**: Reestructuración de `app.js` → `procesos-data.js` + `proceso.js`
- **CSS**: Optimización y consolidación de reglas de layout
- **Landing page**: Simplificada de vista interactiva a página estática con enlaces
- **Navegación**: Enlaces directos en lugar de navegación por JavaScript

### Mejorado
- **SEO**: URLs individuales para cada proceso mejoran indexación
- **Rendimiento**: Carga específica por página en lugar de SPA completa
- **Accesibilidad**: Navegación web estándar más accesible
- **Experiencia de usuario**: URLs compartibles y navegación intuitiva

### Características técnicas v1.0.0
- Navegación web tradicional con páginas dedicadas
- Datos centralizados de procesos en JSON
- Sistema modular de JavaScript por funcionalidad
- Layout responsivo con CSS Grid optimizado
- Soporte para matrices de configuración complejas
- Colores temáticos diferenciados por tipo de proceso

### Archivos principales v1.0.0
- `index.html`: Landing page estática con enlaces a procesos
- `assets/css/styles.css`: Estilos optimizados y consolidados
- `assets/css/cm-extra.css`: Estilos adicionales para componentes especializados
- `assets/js/procesos-data.js`: Datos centralizados de procesos
- `assets/js/proceso.js`: Lógica para páginas individuales de procesos
- `assets/js/cm.js` y `cm-matriz.json`: Sistema de matriz de configuración
- `procesos/*/index.html`: 8 páginas individuales de procesos

## [Inicial] - 2025-09-07

### Agregado
- Estructura inicial del repositorio
- README.md con descripción del proyecto
- Licencia MIT