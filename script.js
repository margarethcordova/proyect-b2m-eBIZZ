// Cargar archivo JSON
$.getJSON("datos.json", function(data) {
  // Función que se ejecuta al hacer clic en el botón de búsqueda
  $("#boton_buscar").click(function() {
    // Obtener la palabra clave ingresada en el campo de búsqueda
    var palabra_clave = $("#campo_busqueda").val().toLowerCase();
    // Iterar sobre cada objeto en el archivo JSON
    $.each(data, function(index, item) {
      // Convertir el título y el texto a minúsculas para comparar con la palabra clave
      var titulo_minusculas = item.titulo.toLowerCase();
      var texto_minusculas = item.texto.toLowerCase();
      // Si la palabra clave coincide con el título o el texto
      if (titulo_minusculas.indexOf(palabra_clave) !== -1 || texto_minusculas.indexOf(palabra_clave) !== -1) {
        // Crear el HTML para imprimir los resultados
        var resultado_html = '<div class="resultado">';
        resultado_html += '<img class="logo-empresa" src="' + item.imagen + '">';
        resultado_html += '<p>' + item.texto + '</p>';
        resultado_html += '<div class="sub_imagenes">';
        // Iterar sobre cada sub-imagen y agregarla al HTML
        $.each(item.sub_imagenes, function(sub_index, sub_item) {
          resultado_html += '<img class="sub_img" src="' + sub_item + '">';
        });
        resultado_html += '</div></div>';
        // Imprimir el HTML en el contenedor de resultados
        $("#resultados_busqueda").append(resultado_html);
      }
    });
  });
});


// const formulario = document.querySelector('form');
// const resultado = document.querySelector('#resultado');

// formulario.addEventListener('submit', e => {
//   e.preventDefault();
  
//   const busqueda = formulario.buscar.value.toLowerCase();
  
//   fetch('app.json')
//     .then(response => response.json())
//     .then(data => {
//       const imagenesFiltradas = data.imagenes.filter(imagen => {
//         const titulo = imagen.titulo.toLowerCase();
//         const descripcion = imagen.descripcion.toLowerCase();
//         const etiquetas = imagen.etiquetas.map(etiqueta => etiqueta.toLowerCase());
        
//         return titulo.includes(busqueda) || descripcion.includes(busqueda) || etiquetas.includes(busqueda);
//       });
      
//       mostrarResultados(imagenesFiltradas);
//     });
// });

// function mostrarResultados(imagenes) {
//   resultado.innerHTML = '';
  
//   if (imagenes.length > 0) {
//     imagenes.forEach(imagen => {
//       const elemento = document.createElement('div');
//       elemento.innerHTML = `
//         <img src="${imagen.url}" alt="${imagen.titulo}">
//         <h2>${imagen.titulo}</h2>
//         <p>${imagen.descripcion}</p>
//         <p>Etiquetas: ${imagen.etiquetas.join(', ')}</p>
//         <div>
//         <img src="${imagen.funciones.join('-')}">
//         </div>
//       `;
//       resultado.appendChild(elemento);
//     });
//   } else {
//     resultado.innerHTML = '<p>No se encontraron imágenes</p>';
//   }
// }
