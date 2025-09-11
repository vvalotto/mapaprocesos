con# Changelog

Todos los cambios importantes en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Versionado Semántico](https://semver.org/lang/es/).

## [Unreleased]

## [1.3.0] - 2025-09-11

### Sistema modular de Gestión de Modificaciones y estandarización arquitectónica

### Agregado
- **Sistema completo de Gestión de Modificaciones IEC 62304**
  - SPA modular con 5 procesos especializados (8.2.1 Solicitar, Aprobar, 8.2.2 Implementar, 8.2.3 Verificar, 8.2.4 Trazabilidad)
  - Enlaces directos a GPTs especializados de ChatGPT para cada proceso
  - Integración completa con planillas Excel específicas por proceso
  - Navegación dinámica entre procesos con información detallada
- **Estado de progreso 'partial'** para tiles de procesos
  - Nuevo estado visual (círculo naranja ⚠️) para procesos parcialmente implementados
  - Estado aplicado a "Administración de la Configuración" 
  - CSS: `.tile-status.partial` con color #f59e0b
- **Arquitectura modular estandarizada** para todos los procesos
  - Patrón de nomenclatura: `{proceso}-index.html`, `{proceso}-data.json`, `{proceso}-styles.css`, `{proceso}-logic.js`
  - Archivos centralizados en carpetas `/assets/css/` y `/assets/js/`
  - Sistema reutilizable para futuros procesos

### Mejorado
- **Consistencia visual** con sistema de diseño unificado
  - Cards de Gestión de Modificaciones usando estructura `tile` base
  - Hover effects idénticos a landing page (`translateY(-4px)`, `border-color: var(--brand)`)
  - Color system unificado con `data-color` attributes
  - Tipografías y espaciados estandarizados
- **Navegación optimizada** desde landing page
  - Enlace directo a `modificaciones-index.html` desde tile principal
  - Eliminación de página intermedia para mejor UX
  - Botones de retorno consistentes en toda la aplicación

### Estructural
- **Archivos reorganizados**:
  - `modificaciones-data.json` → `/assets/js/`
  - `modificaciones-logic.js` → `/assets/js/` 
  - `modificaciones-styles.css` → `/assets/css/`
  - `gestion-cambios.html` → `modificaciones-index.html`
- **Datos estructurados** en JSON con información completa:
  - Objetivos, procesos, entradas/salidas por cada actividad
  - Metadatos de GPTs y planillas asociadas
  - Información para renderizado dinámico

### Técnico
- **SPA JavaScript modular** con funciones especializadas:
  - `loadGestionCambios()`: Carga asíncrona de datos JSON
  - `renderActionsGrid()`: Generación dinámica de cards
  - `showPage()`: Navegación SPA con gestión de estados
  - `renderDetailPage()`: Renderizado dinámico de contenido detallado
- **CSS modular** extendiendo sistema base:
  - Variables específicas `--gm-*` manteniendo coherencia
  - Reutilización de componentes `.tile`, `.hero-section`, `.btn`
  - Responsive design heredado del sistema principal

### Preparación para despliegue
- **Estructura lista para GitHub Pages**
- **Documentación completa** en CHANGELOG para seguimiento de cambios
- **Patrón arquitectónico** establecido para escalabilidad futura

## [1.2.0] - 2025-09-08

### Modernización completa del sistema de diseño y UX

### Agregado
- **Hero sections modernos** con gradientes dinámicos y badges informativos
  - Landing page: gradiente azul-púrpura con badge de certificación IEC 62304
  - Configuración: gradiente rosa-magenta para diferenciación visual
  - Estructura consistente: breadcrumb + título + subtitle + acciones
- **Process tiles enhanced** con iconografía temática y status indicators
  - Iconos específicos: 📝 Requerimientos, ⚙️ Solución, 🔗 Integración, etc.
  - Indicadores de estado: ✓ completado (Gestión de Modificaciones), ○ pendiente
  - Descripciones contextuales para cada proceso
- **Cards interactivas premium** en página de configuración
  - Header estructurado: icono temático + status de disponibilidad GPT
  - Jerarquía visual clara: cláusula badge + título + acciones
  - Footer adaptativo: botón GPT vs placeholder "en desarrollo"
- **Tab navigation descriptivo** con contexto real en lugar de números genéricos
  - Parsing inteligente de nombres de escenarios
  - Layout jerárquico: número + descripción contextual

### Mejorado
- **Design system unificado** con componentes reutilizables
  - Variables CSS centralizadas para colores, sombras y gradientes
  - Hover effects consistentes con elevación y bordes dinámicos
  - Transiciones suaves usando `cubic-bezier` para animaciones profesionales
- **Responsive design mejorado** con breakpoints específicos para cada componente
  - Desktop: tiles expandidos, padding generoso
  - Mobile: layout vertical, componentes compactos
  - Adaptación inteligente de iconografía y tipografía
- **Interactividad avanzada** en todos los elementos
  - Process tiles: elevación -4px con borders dinámicos en hover
  - Cards CM: elevación -6px con sombras profundas
  - GPT buttons: gradiente ChatGPT-style con efectos de presión
- **Arquitectura CSS modular** con separación clara de responsabilidades
  - `styles.css`: componentes base del sistema
  - `cm-extra.css`: especializaciones para matriz de configuración
  - Utilities responsive integradas

### Corregido
- **JSON syntax error** en `cm-matriz.json` corregido
  - Eliminada coma trailing en array de acciones
  - Completado elemento faltante "Marcar riesgo (EOL/CVEs)"
  - Validación completa de estructura para los 4 escenarios
- **Content updates** con lenguaje simplificado y más directo
  - Títulos más específicos como "LMC y Línea Base (LB)"
  - Acciones condensadas para mejor legibilidad
  - Artefactos con nombres claros como "Linea Base Inicial"

### Técnico
- **+528 líneas agregadas, -241 líneas eliminadas** en 6 archivos
- **Componentes CSS modernos**: enhanced tiles, hero sections, premium cards
- **JavaScript mejorado** con renderizado estructurado header/content/footer
- **Compatibilidad completa** con contenido existente y nueva funcionalidad

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