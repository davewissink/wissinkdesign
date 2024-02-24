document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('mobile-menu');
    const menu = document.querySelector('.menu');
    const searchIcon = document.getElementById('searchIcon');
    const searchBox = document.getElementById('searchBox');

    menuToggle.addEventListener('click', function () {
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        searchBox.style.display = 'none';
    });

    searchIcon.addEventListener('click', function (event) {
        event.stopPropagation(); // Stop de click event van het verspreiden naar het document
        searchBox.style.display = searchBox.style.display === 'block' ? 'none' : 'block';
    });

    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    searchButton.addEventListener('click', function () {
        const searchTerm = searchInput.value.toLowerCase();
        const content = document.querySelector('.content');

        const paragraphs = content.querySelectorAll('p');

        paragraphs.forEach(paragraph => {
            const text = paragraph.innerText.toLowerCase();

            if (text.includes(searchTerm)) {
                paragraph.style.backgroundColor = '#FFFF00';
            }
        });
    });

    // Sluit het menu en de zoekbox als er buiten wordt geklikt
    document.addEventListener('click', function (event) {
        const isClickInsideMenu = menu.contains(event.target) || menuToggle.contains(event.target);
        const isClickInsideSearch = searchBox.contains(event.target) || searchIcon.contains(event.target);

        if (!isClickInsideMenu && !isClickInsideSearch) {
            menu.style.display = 'none';
            searchBox.style.display = 'none';
        }
    });

    // Image Slider
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        const slides = document.querySelectorAll('.slide');

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }

        slideIndex++;

        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        slides[slideIndex - 1].style.display = 'block';
        setTimeout(showSlides, 3000);
    }
});
