# Mapa de Procesos (Prototipo Web)

Este repositorio contiene un **prototipo web navegable** que representa el *Marco de Procesos* para proyectos de desarrollo de software.  
El sitio está diseñado como una **landing page interactiva**, donde cada proceso (proyecto, producto y soporte) puede explorarse con mayor detalle: objetivos, acciones típicas y artefactos asociados.

El objetivo principal es **probar, iterar y compartir** el marco de procesos de manera simple y accesible, utilizando solo tecnologías web básicas (**HTML, CSS, JavaScript puro**) y el despliegue gratuito en **GitHub Pages**.

---

## 🌐 Demo
Una vez activado GitHub Pages, podrás acceder al prototipo en:  
👉 `https://vvalotto.github.io/mapaprocesos/`

---

## ✨ Características
- **Landing page** inspirada en el marco visual de procesos.
- **Navegación interactiva** por cada proceso (SPA ligera sin dependencias).
- **Contenido editable** en un objeto central (`PROCESOS` en JavaScript).
- **Sitio estático**, ideal para prototipado rápido.
- **Despliegue automático** en GitHub Pages.

---

## 🚀 Ejecutar localmente
Clonar el repositorio y abrir `index.html` en el navegador, o bien levantar un servidor local:

```bash
git clone https://github.com/<tu-usuario>/mapa-procesos.git
cd mapa-procesos
python -m http.server 8000
