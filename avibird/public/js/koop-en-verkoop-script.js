document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM is geladen');

    const addItemForm = document.getElementById('addItemForm');
    const itemList = document.getElementById('itemList');
    let nextItemId = 1; // Unieke id's toewijzen aan items

    function addItemToCards(item) {
        const card = document.createElement('div');
        const itemId = nextItemId++; // Unieke id toewijzen en verhogen voor het volgende item
        card.className = 'card';
        card.setAttribute('data-item-id', itemId); // Toevoegen van het item-id aan de card
        card.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">Prijs: €${item.price}</p>
                <p class="card-text">Verkoper: ${item.seller}</p>
                <button class="btn btn-danger btn-block" onclick="removeItem(${itemId})">Verwijder</button>
            </div>
        `;
        itemList.appendChild(card);
    }

    addItemForm.addEventListener('submit', function (event) {
        event.preventDefault();
        console.log('Formulier ingediend');

        const newItem = {
            name: document.getElementById('item').value,
            price: document.getElementById('price').value,
            seller: document.getElementById('seller').value
        };

        addItemToCards(newItem);

        addItemForm.reset();
    });

    window.removeItem = function (itemId) {
        console.log('Verwijder item met id:', itemId);
        const card = itemList.querySelector(`[data-item-id="${itemId}"]`);

        // Voer hier je authenticatiecontrole uit (bijvoorbeeld vergelijken met de huidige gebruiker)
        const isAuthorized = true; // Vervang dit door een echte controle op basis van je authenticatiesysteem

        if (isAuthorized) {
            itemList.removeChild(card);
        } else {
            console.log('Ongeautoriseerde verwijderpoging.');
        }
    };
});
