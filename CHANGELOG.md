con# Changelog

Todos los cambios importantes en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Versionado Semántico](https://semver.org/lang/es/).

## [Unreleased]

## [1.1.0] - 2025-09-07

### Mejoras significativas en UX y funcionalidad

### Corregido
- **Navegación 404**: Corregidos enlaces de navegación en todas las páginas de procesos
  - Reparado JavaScript con rutas incorrectas (`'..'` → `'../../'`)
  - Convertidos botones inconsistentes a enlaces estándar `<a href="../../">`
  - Eliminada ruta malformada `../el../` en página de configuración
- **Estructura visual**: Matriz CM reorganizada con cláusulas al mismo nivel
  - Cambio de layout 2 columnas → 3 columnas para cláusulas 8.1.1, 8.1.2, 8.1.3
  - Artefactos separados como sección no seleccionable
  - Responsive design mejorado (3→2→1 columnas)

### Agregado
- **Enlaces a GPTs especializados** en matriz de Administración de la Configuración:
  - 8.1.1: GPT para Listado de Elementos de Configuración
  - 8.1.2: GPT para Inventario de SOUP
  - Botones `🤖 Asistente GPT` con diseño premium y gradientes
- **Diseño visual premium** para matriz CM:
  - Tabs con gradientes dinámicos y efectos hover 3D
  - Cards con bordes superiores coloridos y animaciones
  - Lista de acciones con checkmarks y hover interactivo
  - Sección de artefactos con diseño diferenciado (borde dashed, fondo degradado)
  - Paleta de colores vibrante con variables CSS personalizadas

### Mejorado
- **Experiencia de usuario**: Navegación consistente y confiable en todas las páginas
- **Accesibilidad**: Enlaces estándar web en lugar de dependencias JavaScript
- **Diseño visual**: Sistema de colores moderno con gradientes y animaciones suaves
- **Organización**: Separación clara entre cláusulas normativas y artefactos de salida
- **Funcionalidad**: Integración directa con herramientas de IA especializadas

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