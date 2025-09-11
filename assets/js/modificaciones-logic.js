// Gestión de Modificaciones - Lógica SPA
// Siguiendo el patrón de cm.js y proceso.js

let gmData = null;

// Función auxiliar para seleccionar elementos
function $(sel) { 
  return document.querySelector(sel); 
}

function $$(sel) { 
  return document.querySelectorAll(sel); 
}

// Cargar datos de modificaciones
async function loadGestionCambios() {
  try {
    const response = await fetch('../../assets/js/modificaciones-data.json');
    gmData = await response.json();
    
    // Inicializar la aplicación
    initializeApp();
    renderHomePage();
    
    // Configurar navegación
    setupNavigation();
    
  } catch (error) {
    console.error('Error cargando datos de gestión de cambios:', error);
    showError('Error cargando los datos del sistema');
  }
}

// Inicializar elementos de la aplicación
function initializeApp() {
  if (!gmData) return;
  
  // Actualizar título y meta información
  document.title = `${gmData.titulo} — Sistema`;
  
  // Configurar hero section
  const heroTitle = $('.gm-hero-title');
  const heroSubtitle = $('.gm-hero-subtitle'); 
  const heroBadge = $('.gm-hero-badge');
  
  if (heroTitle) heroTitle.textContent = gmData.titulo;
  if (heroSubtitle) heroSubtitle.textContent = gmData.descripcion;
  if (heroBadge) heroBadge.textContent = gmData.badge;
}

// Renderizar página de inicio
function renderHomePage() {
  if (!gmData) return;
  
  // Renderizar grid de acciones
  renderActionsGrid();
  
  // Renderizar sección de características
  renderFeaturesSection();
}

// Renderizar lista de acciones como líneas apiladas
function renderActionsGrid() {
  const list = $('.gm-actions-list');
  if (!list) return;
  
  list.innerHTML = '';
  
  Object.values(gmData.procesos).forEach(proceso => {
    const line = document.createElement('div');
    line.className = 'gm-action-line';
    line.setAttribute('data-color', proceso.color);
    
    line.innerHTML = `
      <div class="gm-action-icon">${proceso.icon}</div>
      <div class="gm-clause-badge">${proceso.clausula}</div>
      <div class="gm-action-content">
        <h4 class="gm-action-title">${proceso.titulo}</h4>
        <p class="gm-action-description">${proceso.descripcion}</p>
      </div>
      <a href="${proceso.gptLink}" target="_blank" class="gm-action-gpt" onclick="event.stopPropagation()">
        🤖 GPT Especializado
      </a>
    `;
    
    // Click en la línea (excluyendo el botón GPT) va al detalle
    line.onclick = (event) => {
      if (!event.target.closest('.gm-action-gpt')) {
        showPage(proceso.id);
      }
    };
    
    list.appendChild(line);
  });
}

// Renderizar sección de características
function renderFeaturesSection() {
  const featuresGrid = $('.gm-features-grid');
  if (!featuresGrid || !gmData.features) return;
  
  featuresGrid.innerHTML = `
    <div class="gm-feature">
      <div class="gm-feature-icon blue">👥</div>
      <h4>${gmData.features.gpts.count} GPTs Especializados</h4>
      <p>${gmData.features.gpts.description}</p>
    </div>
    <div class="gm-feature">
      <div class="gm-feature-icon green">📥</div>
      <h4>${gmData.features.planillas.count} Planillas Integradas</h4>
      <p>${gmData.features.planillas.description}</p>
    </div>
    <div class="gm-feature">
      <div class="gm-feature-icon purple">⏱️</div>
      <h4>Trazabilidad Total</h4>
      <p>${gmData.features.trazabilidad.description}</p>
    </div>
  `;
}

// Mostrar página específica
function showPage(pageId) {
  // Ocultar todas las páginas
  $$('.gm-page').forEach(page => {
    page.classList.remove('active');
  });
  
  // Mostrar página seleccionada
  const targetPage = $(`#gm-${pageId}`);
  if (targetPage) {
    targetPage.classList.add('active');
    
    // Si no es la home, renderizar contenido de detalle
    if (pageId !== 'home') {
      renderDetailPage(pageId);
    }
  } else {
    // Si la página no existe, crear y mostrar
    if (pageId !== 'home' && gmData.procesos[pageId]) {
      createDetailPage(pageId);
    }
  }
  
  // Mostrar/ocultar navegación de retorno
  const navBack = $('.gm-nav-back');
  if (navBack) {
    if (pageId === 'home') {
      navBack.classList.remove('show');
    } else {
      navBack.classList.add('show');
    }
  }
  
  // Actualizar estados de navegación activa
  updateNavigationStates(pageId);
  
  // Scroll al inicio
  window.scrollTo(0, 0);
}

// Crear página de detalle dinámicamente
function createDetailPage(pageId) {
  const proceso = gmData.procesos[pageId];
  if (!proceso) return;
  
  const mainContent = $('.gm-main-content');
  if (!mainContent) return;
  
  const pageElement = document.createElement('div');
  pageElement.className = 'gm-page';
  pageElement.id = `gm-${pageId}`;
  
  pageElement.innerHTML = `
    <div class="gm-detail-header">
      <div class="gm-detail-icon ${proceso.color}">${proceso.icon}</div>
      <div class="gm-detail-info">
        <h1>${proceso.titulo}</h1>
        <p>IEC 62304 - Cláusula ${proceso.clausula}</p>
      </div>
    </div>
    
    <div class="gm-detail-content">
      <div class="gm-detail-main">
        <div class="gm-detail-section">
          <h2>Descripción</h2>
          <p>${proceso.descripcion}</p>
        </div>
        
        <div class="gm-detail-section">
          <h2>Objetivos</h2>
          <ul class="gm-objectives-list" id="objectives-${pageId}"></ul>
        </div>
        
        <div class="gm-detail-section">
          <h2>Proceso</h2>
          <ul class="gm-process-list" id="process-${pageId}"></ul>
        </div>
        
        <div class="gm-inputs-outputs">
          <div class="gm-io-section">
            <h3>Entradas</h3>
            <ul class="gm-io-list" id="inputs-${pageId}"></ul>
          </div>
          <div class="gm-io-section">
            <h3>Salidas</h3>
            <ul class="gm-io-list" id="outputs-${pageId}"></ul>
          </div>
        </div>
      </div>
      
      <div class="gm-detail-sidebar">
        <div class="gm-detail-section">
          <h3>Acción Disponible</h3>
          <a href="${proceso.gptLink}" target="_blank" class="gm-gpt-button ${proceso.color}">
            ${proceso.icon} ${proceso.titulo}
          </a>
          <p style="text-align: center; margin-top: 10px; font-size: 0.9em; color: #666;">
            Acceso directo al GPT especializado
          </p>
        </div>
        
        <div class="gm-detail-section">
          <h3>Planilla Asociada</h3>
          <div class="gm-planilla-info">
            <strong>${proceso.planilla}</strong>
          </div>
          <h4>Campos Principales:</h4>
          <ul class="gm-campos-list" id="campos-${pageId}"></ul>
        </div>
        
        <div class="gm-detail-section">
          <h3>Navegación</h3>
          <ul class="gm-navigation-list" id="navigation-${pageId}"></ul>
        </div>
      </div>
    </div>
  `;
  
  mainContent.appendChild(pageElement);
  
  // Mostrar la página recién creada
  pageElement.classList.add('active');
  
  // Renderizar contenido específico
  renderDetailPage(pageId);
}

// Renderizar contenido de página de detalle
function renderDetailPage(pageId) {
  const proceso = gmData.procesos[pageId];
  if (!proceso) return;
  
  // Renderizar objetivos
  renderList(`objectives-${pageId}`, proceso.objetivos, 'gm-list-number');
  
  // Renderizar proceso
  renderProcessList(`process-${pageId}`, proceso.proceso);
  
  // Renderizar entradas y salidas
  renderIOList(`inputs-${pageId}`, proceso.entradas, 'input');
  renderIOList(`outputs-${pageId}`, proceso.salidas, 'output');
  
  // Renderizar campos de planilla
  renderFieldsList(`campos-${pageId}`, proceso.campos);
  
  // Renderizar navegación lateral
  renderSideNavigation(`navigation-${pageId}`, pageId);
}

// Renderizar lista numerada
function renderList(containerId, items, numberClass) {
  const container = $(`#${containerId}`);
  if (!container || !items) return;
  
  container.innerHTML = '';
  items.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div class="${numberClass}">${index + 1}</div>
      <div>${item}</div>
    `;
    container.appendChild(li);
  });
}

// Renderizar lista de proceso con checkmarks
function renderProcessList(containerId, items) {
  const container = $(`#${containerId}`);
  if (!container || !items) return;
  
  container.innerHTML = '';
  items.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div class="gm-list-number">✓</div>
      <div>${item}</div>
    `;
    container.appendChild(li);
  });
}

// Renderizar lista de entradas/salidas
function renderIOList(containerId, items, type) {
  const container = $(`#${containerId}`);
  if (!container || !items) return;
  
  container.innerHTML = '';
  items.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div class="gm-io-bullet ${type}"></div>
      ${item}
    `;
    container.appendChild(li);
  });
}

// Renderizar lista de campos
function renderFieldsList(containerId, fields) {
  const container = $(`#${containerId}`);
  if (!container || !fields) return;
  
  container.innerHTML = '';
  fields.forEach(field => {
    const li = document.createElement('li');
    li.textContent = `• ${field}`;
    container.appendChild(li);
  });
}

// Renderizar navegación lateral
function renderSideNavigation(containerId, currentPageId) {
  const container = $(`#${containerId}`);
  if (!container) return;
  
  container.innerHTML = '';
  
  Object.values(gmData.procesos).forEach(proceso => {
    const li = document.createElement('li');
    li.className = 'gm-nav-item';
    
    const link = document.createElement('div');
    link.className = `gm-nav-link ${proceso.id === currentPageId ? 'active' : ''}`;
    link.textContent = proceso.titulo;
    link.onclick = () => showPage(proceso.id);
    
    li.appendChild(link);
    container.appendChild(li);
  });
}

// Configurar navegación global
function setupNavigation() {
  // Botón de retorno
  const backBtn = $('.gm-back-btn');
  if (backBtn) {
    backBtn.onclick = () => showPage('home');
  }
  
  // Inicializar en home
  showPage('home');
}

// Actualizar estados de navegación
function updateNavigationStates(currentPageId) {
  $$('.gm-nav-link').forEach(link => {
    link.classList.remove('active');
  });
  
  // Marcar el enlace activo en todas las navegaciones laterales
  $$(`#navigation-${currentPageId} .gm-nav-link`).forEach((link, index) => {
    const processes = Object.keys(gmData.procesos);
    if (processes[index] === currentPageId) {
      link.classList.add('active');
    }
  });
}

// Mostrar error
function showError(message) {
  const mainContent = $('.gm-main-content');
  if (mainContent) {
    mainContent.innerHTML = `
      <div style="text-align: center; padding: 50px; color: #e74c3c;">
        <h2>Error</h2>
        <p>${message}</p>
        <button onclick="location.reload()" class="btn">Recargar página</button>
      </div>
    `;
  }
}

// Agregar efectos de hover a las cards
function addHoverEffects() {
  document.addEventListener('DOMContentLoaded', function() {
    const actionCards = $$('.gm-action-card');
    actionCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
      });
    });
  });
}

// Inicializar aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  loadGestionCambios();
  addHoverEffects();
});

// Exponer funciones globales necesarias
window.showPage = showPage;