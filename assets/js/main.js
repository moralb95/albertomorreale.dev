$(window).scroll(function () {
    $('#main-nav').toggleClass('navbar-scrolled', window.scrollY !== 0);
});

function scrollSmoothTo(elementId) {
    var element = document.getElementById(elementId);
    element.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    });

    return false;
}

const phrases = [
    'I\'m Alberto Morreale',
    'I come from Sicily',
    'I\'m a Web Developer',
]

$(document).ready(function () {
    const el = document.getElementById("messenger");
    const fx = new TextScramble(el);

    let counter = 0;
    const next = () => {
        fx.setText(phrases[counter]).then(() => {
            setTimeout(next, 2200)
        })

        phrases[counter].includes("Sicily") ? fx.el.classList.add("sicily-text") : fx.el.classList.remove("sicily-text");

        counter = (counter + 1) % phrases.length;
    }

    next();
});