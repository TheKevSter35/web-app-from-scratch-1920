import {
  render
} from './render.js';

export function api (){
  const endpoint = 'https://orion.apiseeds.com/api/music/search/?q='
  const searchword = "trivium"
  const key = "&apikey=" + "3GIKwZk8GNseBxT3CZsEHLG3Ee34x2KEzjkqyHjzJ9fnvfbpqbH7Kx7zi5QkSuE7"
  const limit = "&limit=" + "20"
  const url = endpoint + searchword + key + limit;

  fetch(url)
  .then(response => {
    return response.json();
  })
  .then(data => {
    render(data);
  })
  .catch(err => {
    console.log(err);
  });
  
}

  