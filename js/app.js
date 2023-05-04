$(document).ready(function () {
    $('.menu-burger').click(function () {
        $('.menu-burger').toggleClass('active')
        $('nav').toggleClass('active')
    })
});

// Cargar archivo JSON
$.getJSON("../json/data.json", function (data) {
    // Función que se ejecuta al hacer clic en el botón de búsqueda
    $("#boton_buscar").click(function () {
        // Obtener la palabra clave ingresada en el campo de búsqueda
        var palabra_clave = $("#campo_busqueda").val().toLowerCase();
        // Iterar sobre cada objeto en el archivo JSON
        $.each(data, function (index, item) {
            // Convertir el título y el texto a minúsculas para comparar con la palabra clave
            var titulo_minusculas = item.titulo.toLowerCase();
            var texto_minusculas = item.texto.toLowerCase();
            // Si la palabra clave coincide con el título o el texto
            if (titulo_minusculas.indexOf(palabra_clave) !== -1 || texto_minusculas.indexOf(palabra_clave) !== -1) {
                // Crear el HTML para imprimir los resultados
                var resultado_html = '<div class="result-empresa">';
                resultado_html += '<img class="logo-empresa" src="' + item.imagen + '">';
                resultado_html += '<p>' + item.texto + '</p>';
                resultado_html += '<div class="sub_imagenes">';

                // Iterar sobre cada sub-imagen y agregarla al HTML
                $.each(item.sub_imagenes, function (sub_index, sub_item) {
                    resultado_html += '<div class="funcionalidad"><img class="sub_img" src="' + sub_item + '"></div>';
                });
                resultado_html += '<div class="sub_imagenes">';

                resultado_html += '</div></div>';


                limpiarBusqueda(document.getElementById("resultados_busqueda"));
                // limpiarBusqueda(document.getElementById("busquedaPreder"));

                // document.getElementById("busquedaPreder").remove();

                // Imprimir el HTML en el contenedor de resltados
                $("#resultados_busqueda").append(resultado_html);
            }

        });

    });
});

function limpiarBusqueda(elemento) {
    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }

}