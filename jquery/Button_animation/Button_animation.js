// BUTTON_1
$(document).ready(function () {

    $('.button_01').click(function () {
        $(this).addClass('button_gradient_01')
        setTimeout(function () { $('.button_01').removeClass('button_gradient_01'); }, 600);
    });
});

