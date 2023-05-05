$(document).ready(function () {
    $('.contenedor-imagen').hover(function () {
        $('.texto-imagen', this).css('opacity', '1');
    }, function () {
        $('.texto-imagen', this).css('opacity', '0');
    });
});

