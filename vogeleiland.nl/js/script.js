document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('mobile-menu');
    const menu = document.querySelector('.menu');
    const searchIcon = document.getElementById('searchIcon');
    const searchBox = document.getElementById('searchBox');

    menuToggle.addEventListener('click', function () {
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });

    searchIcon.addEventListener('click', function () {
        searchBox.style.display = searchBox.style.display === 'block' ? 'none' : 'block';
    });

    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    searchButton.addEventListener('click', function () {
        const searchTerm = searchInput.value.toLowerCase();
        const content = document.querySelector('.content'); // Pas dit aan naar de daadwerkelijke container van je inhoud

        // Voeg hier code toe om de zoekfunctionaliteit te implementeren, bijvoorbeeld:
        const paragraphs = content.querySelectorAll('p');

        paragraphs.forEach(paragraph => {
            const text = paragraph.innerText.toLowerCase();

            if (text.includes(searchTerm)) {
                paragraph.style.backgroundColor = '#FFFF00'; // Markeer de gevonden tekst (voorbeeld)
            }
        });
    });

    // Sluit het menu wanneer er buiten wordt geklikt
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.menu') && !event.target.closest('#mobile-menu')) {
            menu.style.display = 'none';
        }
    });
});
