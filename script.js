const formulario = document.querySelector('form');
const resultado = document.querySelector('#resultado');

formulario.addEventListener('submit', e => {
  e.preventDefault();
  
  const busqueda = formulario.buscar.value.toLowerCase();
  
  fetch('app.json')
    .then(response => response.json())
    .then(data => {
      const imagenesFiltradas = data.imagenes.filter(imagen => {
        const titulo = imagen.titulo.toLowerCase();
        const descripcion = imagen.descripcion.toLowerCase();
        const etiquetas = imagen.etiquetas.map(etiqueta => etiqueta.toLowerCase());
        
        return titulo.includes(busqueda) || descripcion.includes(busqueda) || etiquetas.includes(busqueda);
      });
      
      mostrarResultados(imagenesFiltradas);
    });
});

function mostrarResultados(imagenes) {
  resultado.innerHTML = '';
  
  if (imagenes.length > 0) {
    imagenes.forEach(imagen => {
      const elemento = document.createElement('div');
      elemento.innerHTML = `
        <img src="${imagen.url}" alt="${imagen.titulo}">
        <h2>${imagen.titulo}</h2>
        <p>${imagen.descripcion}</p>
        <p>Etiquetas: ${imagen.etiquetas.join(', ')}</p>
      `;
      resultado.appendChild(elemento);
    });
  } else {
    resultado.innerHTML = '<p>No se encontraron imágenes</p>';
  }
}
