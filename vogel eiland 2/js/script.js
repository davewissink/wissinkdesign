document.addEventListener('DOMContentLoaded', function() {
    // Menu toggle
    function toggleMenu() {
        const menu = document.querySelector('.menu');
        menu.classList.toggle('show-menu');
    }

    // Slick Carousel voor de slider
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true, // Voeg deze regel toe om over te schakelen naar een fade-effect
        speed: 1000, // Aanpassing van de overgangssnelheid (in milliseconden)
        pauseOnHover: false, // Pauzeer de autoplay wanneer de muis over de slider beweegt
        pauseOnFocus: false, // Pauzeer de autoplay wanneer de slider wordt gefocust
    });
});
