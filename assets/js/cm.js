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
        color:'orange',
        gptLink: 'https://chatgpt.com/g/g-682b49d9680481919733758f04628815-gpt-8-1-1-listado-de-elementos-de-configuracion'
      },
      { 
        key:'8.1.2', 
        color:'violet',
        gptLink: 'https://chatgpt.com/g/g-6839a93e84c88191b8aaf6451077b517-gpt-8-1-2-inventario-de-soup'
      },
      { 
        key:'8.1.3', 
        color:'peach' 
      }
    ];

    bloques.forEach(b => {
      const card = document.createElement('div');
      card.className = 'cm-card';
      const h = document.createElement('h4');
      h.textContent = `${b.key} — ${esc.subprocesos[b.key].titulo}`;
      
      const ul = document.createElement('ul');
      const items = esc.subprocesos[b.key].acciones;
      items.forEach(t => {
        const li = document.createElement('li'); li.textContent = t; ul.appendChild(li);
      });
      
      card.appendChild(h); 
      card.appendChild(ul);
      
      // Agregar botón GPT si existe el enlace
      if(b.gptLink) {
        const gptButton = document.createElement('a');
        gptButton.href = b.gptLink;
        gptButton.target = '_blank';
        gptButton.className = 'cm-gpt-button';
        gptButton.innerHTML = '🤖 Asistente GPT';
        card.appendChild(gptButton);
      }
      
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
    btn.textContent = `Escenario ${i+1}`;
    btn.addEventListener('click', ()=>renderEscenario(i));
    tabs.appendChild(btn);
  });

  renderEscenario(0);
}

document.addEventListener('DOMContentLoaded', loadCM);
