import { PROCESOS } from './procesos-data.js';

function $(sel){ return document.querySelector(sel); }
function render(p){
  $('#procTitulo').textContent = p.titulo;
  $('#procTipo').textContent = p.tipo;
  $('#procDescripcion').textContent = p.descripcion;
  $('#procAcciones').innerHTML = p.acciones.map(a=>`<li>${a}</li>`).join('');
  $('#procArtefactos').innerHTML = p.artefactos.map(a=>`<li>${a}</li>`).join('');
  $('#btnAbrirGuia').onclick = ()=>window.open('#', '_blank');
  $('#btnAbrirFlujo').onclick = ()=>window.open('#', '_blank');
}

document.addEventListener('DOMContentLoaded', ()=>{
  // El slug se define en cada página con <meta name="proc-slug" content="...">
  const meta = document.querySelector('meta[name="proc-slug"]');
  const slug = meta ? meta.getAttribute('content') : null;
  const data = slug ? PROCESOS[slug] : null;
  if(!data){ $('#procTitulo').textContent = 'Proceso no encontrado'; return; }
  render(data);
  // botón Home
  const btnHome = document.getElementById('btnHome');
  if(btnHome) btnHome.addEventListener('click', ()=> window.location.href = '../../' );
  const backLink = document.getElementById('backLink');
  if(backLink) backLink.addEventListener('click', (e)=>{ e.preventDefault(); window.location.href='../../'; });
});
