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

    const bloques = [
      { key:'8.1.1', color:'orange' },
      { key:'8.1.2', color:'violet' },
      { key:'8.1.3', color:'peach' },
      { key:'artefactos', color:'butter', isArtefactos:true }
    ];

    bloques.forEach(b => {
      const card = document.createElement('div');
      card.className = 'cm-card';
      const h = document.createElement('h4');
      if(b.isArtefactos){
        h.textContent = 'Artefactos de salida';
      }else{
        h.textContent = `${b.key} — ${esc.subprocesos[b.key].titulo}`;
      }
      const ul = document.createElement('ul');
      const items = b.isArtefactos ? esc.artefactos : esc.subprocesos[b.key].acciones;
      items.forEach(t => {
        const li = document.createElement('li'); li.textContent = t; ul.appendChild(li);
      });
      card.appendChild(h); card.appendChild(ul);
      grid.appendChild(card);
    });

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
