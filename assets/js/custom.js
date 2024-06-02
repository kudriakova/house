$(document).ready(function () {
    $('.filters__item').each(function () {
        $(this).on('click', function () {
            $(this).toggleClass('active');
        });
    });
});