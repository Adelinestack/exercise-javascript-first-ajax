const axios = require('axios');

// Dans le fichier index.js créez une fonction fetchQuestions qui prend en paramètre
// le nombre de question souhaité (optionel) et affiche le résultat dans la console.
function fetchQuestions(nbQuestions, difficulty, type) {
  axios
    .get('https://opentdb.com/api.php', {
      params: {
        amount: nbQuestions,
        difficulty,
        type,
      },
    })
    .then(({ data: { results } }) =>
      results.map(function(val) {
        console.log(val.question);
      })
    );
}
fetchQuestions(5, 'easy');

function forwardGeocoding(adress, format) {
  axios
    .post('https://geocode.xyz', {
      data: {
        locate: adress,
        geoit: format,
      },
    })
    .then(({ data }) => console.log(data));
}
forwardGeocoding(`415 C'WEALTH AVE WEST Singapore`, 'json');
