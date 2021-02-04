$(document).ready(function(){
    $(this).scrollTop(0);
});

$(function () {
    $(document).scroll(function () {
        var $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        $nav.toggleClass('navbar-inverse', $(this).scrollTop() < $nav.height());
    });
});
