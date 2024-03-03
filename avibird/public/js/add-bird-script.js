document.addEventListener('DOMContentLoaded', function() {
    const addBirdForm = document.getElementById('addBirdForm');
  
    addBirdForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Retrieve form data
      const soort = document.getElementById('soort').value;
      const ondersoort = document.getElementById('ondersoort').value;
      const kleurslag = document.getElementById('kleurslag').value;
      const split = document.getElementById('split').value;
      const geslacht = document.getElementById('geslacht').value;
      const geboortedatumInput = document.getElementById('geboortedatum');
      const geboortedatum = formatDate(geboortedatumInput.value); // Converteer de datum
      const ringnummer = document.getElementById('ringnummer').value;
  
      // Send a POST request to the server to add the bird
      fetch('http://localhost:3000/vogels', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              soort: soort,
              ondersoort: ondersoort,
              kleurslag: kleurslag,
              split: split,
              geslacht: geslacht,
              geboortedatum: geboortedatum,
              ringnummer: ringnummer,
          }),
      })
      .then(response => response.json())
      .then(data => {
          console.log('Success:', data);
          // Voeg verdere acties toe indien nodig, bijv. weergeven van een gebruikersbericht.
      })
      .catch((error) => {
          console.error('Error:', error);
      });
    });
  
    // Aanvullende functies indien nodig
  
    // Functie om de datum te formatteren naar 'YYYY-MM-DD'
    function formatDate(inputDate) {
      const parts = inputDate.split('-');
      return `${parts[2]}-${parts[1]}-${parts[0]}`;
    }
  });
  