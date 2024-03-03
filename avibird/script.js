$(document).ready(function () {
  $('#loginForm').submit(function (event) {
      event.preventDefault();

      // Simpele controle voor inloggen
      var username = $('#username').val();
      var password = $('#password').val();

      if (username === 'admin' && password === 'admin') {
          // Inloggen geslaagd, doorsturen naar het dashboard
          window.location.href = 'dashboard.html';
      } else {
          // Inloggen mislukt, toon een foutmelding
          alert('Onjuiste gebruikersnaam of wachtwoord. Probeer opnieuw.');
      }
  });

  // Voorbeeld dashboard card updates
  $('#birdInfoCard').html('<h3>Bird Information</h3>');
  $('#birdsInDatabaseCard').html('<h3>Birds in Database</h3>');
  $('#breedingCardsCard').html('<h3>Breeding Cards</h3>');
});
