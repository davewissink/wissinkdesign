document.addEventListener('DOMContentLoaded', function () {
    const addItemForm = document.getElementById('addItemForm');
    const itemList = document.getElementById('itemList');
  
    addItemForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const fileInput = document.getElementById('file');
      const uploadedFile = fileInput.files[0];
  
      if (!uploadedFile) {
        alert('Selecteer een afbeelding voordat je het item toevoegt.');
        return;
      }
  
      // Hier kun je de logica toevoegen om de afbeelding naar een server te uploaden
      // en de URL van de geüploade afbeelding te verkrijgen. Voor nu gebruiken we een placeholder-URL.
      const item = {
        vogelsoort: document.getElementById('item').value,
        prijs: document.getElementById('price').value,
        verkoper: document.getElementById('seller').value,
        beschrijving: document.getElementById('description').value,
        contactgegevens: document.getElementById('contact').value,
        afbeelding: 'https://via.placeholder.com/150', // Plaats hier de URL van de geüploade afbeelding
      };
  
      addItemToPage(item);
      resetForm();
    });
  
    function addItemToPage(item) {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${item.afbeelding}" class="card-img-top" alt="${item.vogelsoort}">
        <div class="card-body">
          <h5 class="card-title">${item.vogelsoort}</h5>
          <p class="card-text">${item.beschrijving}</p>
          <p class="card-text"><strong>Prijs:</strong> €${item.prijs}</p>
          <p class="card-text"><strong>Verkoper:</strong> ${item.verkoper}</p>
          <p class="card-text"><strong>Contact:</strong> ${item.contactgegevens}</p>
        </div>
      `;
      itemList.appendChild(card);
    }
  
    function resetForm() {
      addItemForm.reset();
    }
  });
  