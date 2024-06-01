$(document).ready(function () {
    $('.filters__item').each(function () {
        $(this).on('click', function () {
            $(this).toggleClass('active');
        });
    });

    // $('#id').attr('color',)
    // function showName() {
    //     let name = 'viktoriia';
    //     alert(name);
    // }
    // showName();

    // function show(a) {
    //     let x, y;
    //     x = a;
    //     y = x + 7;
    //     alert(y);
    // }
    // show(5);

    // let x = prompt('skolko let?');
    // if (x >= 18) {
    //     let imia = prompt('imia?');
    //     alert('privet, ' + imia);
    // } else {
    //     alert('poka');
    // }

    // $('#id').addClass('red');

});