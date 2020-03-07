import { fetchdata } from './fetchdata.js';
export function api (){
  let endpoint = 'https://orion.apiseeds.com/api/music/search/?q='
  let searchword = "trivium"
  let key = "&apikey=" + "3GIKwZk8GNseBxT3CZsEHLG3Ee34x2KEzjkqyHjzJ9fnvfbpqbH7Kx7zi5QkSuE7"
  let limit = "&limit=" + "20"
  let url = endpoint + searchword + key + limit;

  fetchdata(url)
}


  