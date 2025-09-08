async function loadCM(){
  const res = await fetch('../../assets/js/cm-matriz.json');
  const data = await res.json();
  const tabs = document.querySelector('.cm-tabs');
  const grid = document.querySelector('.cm-grid');
  const meta = document.querySelector('.cm-meta');

  function renderEscenario(idx){
    tabs.querySelectorAll('.cm-tab').forEach((b,i)=>b.classList.toggle('active', i===idx));
    const esc = data.escenarios[idx];
    grid.innerHTML = '';

    // Renderizar solo las cláusulas 8.1.x (sin artefactos)
    const bloques = [
      { 
        key:'8.1.1',
        icon: '📋',
        color:'orange',
        gptLink: 'https://chatgpt.com/g/g-682b49d9680481919733758f04628815-gpt-8-1-1-listado-de-elementos-de-configuracion'
      },
      { 
        key:'8.1.2',
        icon: '📦',
        color:'violet',
        gptLink: 'https://chatgpt.com/g/g-6839a93e84c88191b8aaf6451077b517-gpt-8-1-2-inventario-de-soup'
      },
      { 
        key:'8.1.3',
        icon: '🏷️',
        color:'peach' 
      }
    ];

    bloques.forEach((b, index) => {
      const card = document.createElement('div');
      card.className = 'cm-card enhanced';
      
      // Header con icono y status
      const header = document.createElement('div');
      header.className = 'cm-card-header';
      header.innerHTML = `
        <div class="cm-card-icon">${b.icon}</div>
        <div class="cm-card-status ${b.gptLink ? 'available' : 'pending'}">
          ${b.gptLink ? '🤖' : '⏳'}
        </div>
      `;
      
      // Título
      const titleDiv = document.createElement('div');
      titleDiv.className = 'cm-card-title';
      titleDiv.innerHTML = `
        <div class="cm-clause">${b.key}</div>
        <h4>${esc.subprocesos[b.key].titulo}</h4>
      `;
      
      // Lista de acciones
      const ul = document.createElement('ul');
      ul.className = 'cm-actions-list';
      const items = esc.subprocesos[b.key].acciones;
      items.forEach(t => {
        const li = document.createElement('li'); 
        li.textContent = t; 
        ul.appendChild(li);
      });
      
      // Footer con botón GPT si existe
      const footer = document.createElement('div');
      footer.className = 'cm-card-footer';
      if(b.gptLink) {
        footer.innerHTML = `
          <a href="${b.gptLink}" target="_blank" class="cm-gpt-button">
            🤖 Abrir Asistente
          </a>
        `;
      } else {
        footer.innerHTML = `
          <div class="cm-placeholder">
            <span>⚠️ Asistente en desarrollo</span>
          </div>
        `;
      }
      
      card.appendChild(header);
      card.appendChild(titleDiv);
      card.appendChild(ul);
      card.appendChild(footer);
      grid.appendChild(card);
    });

    // Agregar artefactos como sección separada (no seleccionable)
    const artefactosSection = document.createElement('div');
    artefactosSection.className = 'cm-artefactos';
    artefactosSection.innerHTML = `
      <h3>📋 Artefactos de salida</h3>
      <div class="cm-artefactos-list">
        ${esc.artefactos.map(a => `<div class="cm-artefacto">${a}</div>`).join('')}
      </div>
    `;
    grid.appendChild(artefactosSection);

    meta.textContent = `${data.clausula} · Escenario: ${esc.nombre}`;
  }

  // build tabs
  data.escenarios.forEach((e,i)=>{
    const btn = document.createElement('button');
    btn.className = 'cm-tab';
    btn.innerHTML = `
      <div class="tab-number">Escenario ${i+1}</div>
      <div class="tab-title">${e.nombre.split(')')[1]?.trim() || e.nombre}</div>
    `;
    btn.addEventListener('click', ()=>renderEscenario(i));
    tabs.appendChild(btn);
  });

  renderEscenario(0);
}

document.addEventListener('DOMContentLoaded', loadCM);
