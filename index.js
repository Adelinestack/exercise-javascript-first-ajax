const axios = require('axios');

//Exo trivial pursuit
// Dans le fichier index.js créez une fonction fetchQuestions qui prend en paramètre
// le nombre de question souhaité (optionel) et affiche le résultat dans la console.
// function fetchQuestions(nbQuestions, difficulty, type) {
//   axios
//     .get('https://opentdb.com/api.php', {
//       params: {
//         amount: nbQuestions,
//         difficulty,
//         type,
//       },
//     })
//     .then(({ data: { results } }) =>
//       results.map(function(val) {
//         console.log(val.question);
//       })
//     );
// }
// fetchQuestions(5, 'easy');

//Exo Géolocalisation
// function forwardGeocoding(adress, format) {
//   axios
//     .post('https://geocode.xyz', {
//       data: {
//         locate: adress,
//         geoit: format,
//       },
//     })
//     .then(({ data }) => console.log(data));
// }
// forwardGeocoding(`415 C'WEALTH AVE WEST Singapore`, 'json');

// function reverseGeocoding(coordinates, format) {
//   axios
//     .post('https://geocode.xyz', {
//       data: {
//         locate: coordinates,
//         geoit: format,
//       },
//     })
//     .then(({ data }) => console.log(data));
// }
// reverseGeocoding('55.6802779000,12.5900501000', 'json');

// function sentimentAnalysis(textToAnalyse) {
//   axios
//     .post('https://geocode.xyz', {
//       data: {
//         sentiment: 'analysis',
//         geoit: 'json',
//         scantext: textToAnalyse,
//       },
//     })
//     .then(
//       ({
//         data: {
//           sentimentanalysis: {
//             allsentiments: { sentimentitem },
//           },
//         },
//       }) => console.log(sentimentitem)
//     );
// }
// sentimentAnalysis(
//   `The most important museums of Amsterdam are located on the Museumplein, located at the southwestern side of the Rijksmuseum.`
// );

//Exo Chuck Norris
// function randomChuck() {
//   axios
//     .get('https://api.chucknorris.io/jokes/random')
//     .then(({ data }) => console.log(data.value));
// }
// randomChuck();

// function chuckNorrisInCategory(category) {
//   axios
//     .get('https://api.chucknorris.io/jokes/random', {
//       params: {
//         category,
//       },
//     })
//     .then(({ data }) => console.log(data.value));
// }
// chuckNorrisInCategory('food');

// function searchChuckNorrisFact(textToSearch) {
//   axios
//     .get('https://api.chucknorris.io/jokes/search', {
//       params: {
//         query: textToSearch,
//       },
//     })
//     .then(({ data: { result } }) => console.log(result[0].value));
// }
// searchChuckNorrisFact('larger size');

//Exo Stories
// function getTopHackerNewsStories() {
//   axios
//     .get('https://hacker-news.firebaseio.com/v0/topstories.json')
//     .then(({ data }) => console.log(data));
// }

// function getHackerNewsTitleById(storyId) {
//   axios
//     .get(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
//     .then(({ data }) => console.log(data.title));
// }

// function getTopHackerNewsStoriesTitles() {
//   axios
//     .get('https://hacker-news.firebaseio.com/v0/topstories.json')
//     .then(({ data }) => data)
//     .then(data => data.map(storyId => getHackerNewsTitleById(storyId)));
// }
// getTopHackerNewsStoriesTitles();

//Exo city bikes
// function getBikeInCity(cityToFind) {
//   axios
//     .get(`http://api.citybik.es/v2/networks`)
//     .then(({ data: { networks } }) => networks)
//     .then(networks =>
//       networks.filter(({ location: { city } }) => city === cityToFind)
//     )
//     .then(cityNetworks => cityNetworks.map(cityNetwork => cityNetwork.id))
//     .then(citiesId =>
//       citiesId.map(cityId =>
//         axios
//           .get(`http://api.citybik.es/v2/networks/${cityId}`)
//           .then(({ data: { network: { stations } } }) =>
//             stations.filter(station => station.free_bikes > 40)
//           )
//           .then(console.log)
//       )
//     );
// }
// getBikeInCity('Paris');

//exo game of thrones
function getHouses() {
  axios
    .get(`https://www.anapioficeandfire.com/api/houses`)
    .then(({ data }) => data.map(house => console.log(house.name)));
}

getHouses();

function getMembersOfHouseById(houseId) {
  axios
    .get(`https://www.anapioficeandfire.com/api/houses/${houseId}`)
    .then(({ data: { swornMembers } }) => swornMembers)
    .then(swornMembersUrl =>
      swornMembersUrl.map(swornMemberUrl =>
        axios
          .get(`${swornMemberUrl}`)
          .then(({ data: { name } }) => console.log(name))
      )
    );
}
getMembersOfHouseById(362);
