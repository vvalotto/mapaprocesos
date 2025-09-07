// --- Datos de procesos ---
const PROCESOS = {
  planificacion: {
    titulo: "Planificación y Control de Proyectos",
    tipo: "Proceso de Proyecto",
    descripcion: "Define el alcance, cronograma, recursos, riesgos y mecanismos de seguimiento del proyecto. Controla desvíos y comunica el estado.",
    acciones: [
      "Definir objetivos y alcance",
      "Plan de iteraciones/hitos",
      "Asignación de roles y responsabilidades",
      "Seguimiento (burndown/OKR) y reportes"
    ],
    artefactos: ["Acta de proyecto","WBS / Roadmap","Plan de gestión de riesgos","Informe de avance"]
  },
  requerimientos: {
    titulo: "Desarrollo de Requerimientos",
    tipo: "Proceso de Producto",
    descripcion: "Elicitación, análisis, especificación y priorización de requisitos. Trazabilidad con diseño, pruebas y cambios.",
    acciones: [
      "Elicitación con stakeholders",
      "Especificación (casos de uso / historias / atributos de calidad)",
      "Priorización y aceptación",
      "Gestión de trazabilidad"
    ],
    artefactos: ["Catálogo de requisitos","Casos de uso / Historias","Criterios de aceptación","Matriz de trazabilidad"]
  },
  solucion: {
    titulo: "Solución Técnica",
    tipo: "Proceso de Producto",
    descripcion: "Diseño de arquitectura y componentes, estándares de codificación y decisiones técnicas clave.",
    acciones: ["Modelo C4","Diseño de componentes y APIs","Definición de estándares y DoD","Revisiones técnicas"],
    artefactos: ["ADR (Architecture Decision Records)","Diagramas C4","Guía de estilo / linters","Documentación de APIs"]
  },
  integracion: {
    titulo: "Integración del Producto",
    tipo: "Proceso de Producto",
    descripcion: "Integración continua, empaquetado y despliegues por entorno (dev/test/prod).",
    acciones: ["Pipelines CI/CD","Gestión de versiones y empaquetado","Deploy por entorno","Rollbacks y monitoreo"],
    artefactos: ["Pipeline.yml","Release notes","Manual de despliegue","Registro de versiones"]
  },
  vv: {
    titulo: "Verificación y Validación",
    tipo: "Proceso de Producto",
    descripcion: "Verificación: ¿construimos el producto correctamente? Validación: ¿construimos el producto correcto?",
    acciones: ["Plan de pruebas","Pruebas unitarias/integración/sistema","Evidencias de aceptación","Reporte de defectos"],
    artefactos: ["Plan y matriz de pruebas","Resultados y evidencias","Defect log","Informe de validación"]
  },
  configuracion: {
    titulo: "Administración de la Configuración de Software",
    tipo: "Proceso de Soporte",
    descripcion: "Identificar ítems de configuración, controlar versiones/ramas, establecer líneas base y trazabilidad de cambios.",
    acciones: ["Catálogo de IC","Estrategia de ramas y releases","Líneas base por hito","Auditorías de configuración"],
    artefactos: ["Inventario de IC","Política de versionado","Etiquetas y releases","Actas de línea base"]
  },
  modificaciones: {
    titulo: "Administración de Modificaciones y Problemas",
    tipo: "Proceso de Soporte",
    descripcion: "Ciclo de vida de solicitudes de cambio y gestión de incidentes: registro, priorización, resolución y cierre.",
    acciones: ["Solicitud y análisis de cambio","Estimación/impacto","Implementación y verificación","Cierre y comunicación"],
    artefactos: ["Formulario de cambio","Backlog priorizado","Registro de incidentes","Reporte de cierre"]
  },
  riesgos: {
    titulo: "Gestión de Riesgos",
    tipo: "Proceso de Soporte",
    descripcion: "Identificar, analizar, planificar respuestas y monitorear riesgos técnicos, de producto y de proyecto.",
    acciones: ["Registro de riesgos","Análisis cuali/cuantitativo","Planes de respuesta","Monitoreo y métricas"],
    artefactos: ["Risk Register","Heatmap","Planes de mitigación","Informe de seguimiento"]
  }
};

// --- Utilidades SPA ---
const $ = (sel)=>document.querySelector(sel);
const show = (id)=>{
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  $(id).classList.add('active');
  window.scrollTo({top:0,behavior:'instant'});
};

function renderProceso(id){
  const p = PROCESOS[id];
  if(!p) return;
  $('#procTitulo').textContent = p.titulo;
  $('#procTipo').textContent = p.tipo;
  $('#procDescripcion').textContent = p.descripcion;
  $('#procAcciones').innerHTML = p.acciones.map(a=>`<li>${a}</li>`).join('');
  $('#procArtefactos').innerHTML = p.artefactos.map(a=>`<li>${a}</li>`).join('');
  // Acciones de ejemplo
  $('#btnAbrirGuia').onclick = ()=>window.open('#', '_blank');
  $('#btnAbrirFlujo').onclick = ()=>window.open('#', '_blank');
  show('#detalle');
}

// Delegación de eventos: clic en cualquier .tile-link
document.addEventListener('click', (e)=>{
  const el = e.target.closest('.tile-link');
  if(!el) return;
  e.preventDefault();
  const id = el.dataset.id;
  renderProceso(id);
});

// Controles de volver a home
$('#btnHome').onclick = ()=>show('#landing');
$('#backLink').onclick = (e)=>{e.preventDefault();show('#landing')};
document.addEventListener('keydown', (e)=>{ if(e.key.toLowerCase()==='h') show('#landing') });
