$(document).ready(function () {
    $('.menu-burger').click(function () {
        $('.menu-burger').toggleClass('active')
        $('nav').toggleClass('active')
    });

    $("#mi_popup").show();

    // Cuando el usuario hace clic en el botón de "Cerrar" dentro de la ventana pop-up
    $(".cerrar").click(function () {
        // Ocultar la ventana pop-up
        $("#mi_popup").hide();
    });

    $("#mi_modal").hide();
    // Cuando el usuario hace clic en el botón de "Abrir modal"
    $("#abrir_modal").click(function () {
        // Mostrar la ventana modal
        $("#mi_modal").show();
    });

    // Cuando el usuario hace clic en el botón de "Cerrar" dentro de la ventana modal
    $(".cerrar").click(function () {
        // Ocultar la ventana modal
        $("#mi_modal").hide();
    });

    $('.contenedor-imagen').hover(function () {
        $('.texto-imagen', this).css('opacity', '1');
    }, function () {
        $('.texto-imagen', this).css('opacity', '0');
    });


    // Al hacer clic en el botón, mostrar la ventana modal
    $("#abrirModalContacto").click(function () {
        $("#modalContacto").show();
    });

    // Al hacer clic en la equis, ocultar la ventana modal
    $("#modalContacto .close").click(function () {
        $("#modalContacto").hide();
    });

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

                $("#busquedaPreder").hide();

                // Imprimir el HTML en el contenedor de resltados
                $("#resultados_busqueda").append(resultado_html);
            } else {
                $("#busquedaPreder").add();
            }

        });

    });

});

function limpiarBusqueda(elemento) {
    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }

}