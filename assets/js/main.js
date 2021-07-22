$(window).scroll(function () {
    $('#main-nav').toggleClass('navbar-scrolled', window.scrollY !== 0);
});