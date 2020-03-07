// /*** Fetching data -> refactor into module later ***/

//imports 
// import {
//     getUserInput
// } from './modules/userinput.js';
import {
    api
    
} from './modules/api.js';

api()
// const endpoint = 'https://orion.apiseeds.com/api/music/search/?q='
// const searchword = "trivium"
// const key = "&apikey=" + "3GIKwZk8GNseBxT3CZsEHLG3Ee34x2KEzjkqyHjzJ9fnvfbpqbH7Kx7zi5QkSuE7"
// const limit = "&limit=" + "20"
// const url = endpoint + searchword + key + limit;

// fetch(url)
// .then(response => {
//   return response.json();
// })
// .then(data => {
//   render(data);
// })
// .catch(err => {
//   console.log(err);
// });





// // import {
//     router
// } from './modules/router.js';



// const endpoint = 'https://orion.apiseeds.com/api/music/search/?q='
// const searchword = "trivium"
// const key = "&apikey=" + "3GIKwZk8GNseBxT3CZsEHLG3Ee34x2KEzjkqyHjzJ9fnvfbpqbH7Kx7zi5QkSuE7"
// const limit = "&limit=" + "20"
// const url = endpoint + searchword + key + limit;

// fetch(url)
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     render(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// // render data
// function render(data) {
//     const app = document.getElementById('list')
//   const result = data.result;
//   console.dir(result);
//   result.forEach((item, i) => {
//     const html = `
//             <li class= "results">
              
//               <img src='${item.cover}'>
//               <strong>${item.title}</strong>
//               <a href="#${item.track_id}">}link</a>
            
//             </li>
//           `;
//     app.insertAdjacentHTML('beforeend', html);
//   });
// }