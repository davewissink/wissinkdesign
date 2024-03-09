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
      fetch('http://localhost:3000/add-bird', {
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
          
          // Reset form fields after successful post request
          resetFormFields();
      })
      .catch((error) => {
          console.error('Error:', error);
      });
    });
  
    // Functie om de datum te formatteren naar 'YYYY-MM-DD'
    function formatDate(inputDate) {
      const parts = inputDate.split('-');
      return `${parts[2]}-${parts[1]}-${parts[0]}`;
    }

    // Functie om formulier velden te legen
    function resetFormFields() {
        document.getElementById('soort').value = '';
        document.getElementById('ondersoort').value = '';
        document.getElementById('kleurslag').value = '';
        document.getElementById('split').value = '';
        document.getElementById('geslacht').value = 'man'; // of een andere standaardwaarde indien nodig
        document.getElementById('geboortedatum').value = '';
        document.getElementById('ringnummer').value = '';
    }
});
