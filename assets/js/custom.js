$(document).ready(function () {
    const buttons = $('.filters__item');
    const blocks = $('.countries');
    buttons.each(function () {
        $(this).on('click', function () {
            $(this).toggleClass('active');
            if ($('.filters__item.active').length == 0) {
                $(buttons[0]).addClass('active');
            }
            buttons.each(function (index) {
                if ($(this).hasClass('active')) {
                    $(blocks[index]).addClass('show');
                } else {
                    $(blocks[index]).removeClass('show');
                }
            });
        });
    });
});