import { fetchdata } from './fetchdata.js';

export function api (){
  let endpoint = 'http://api.giphy.com/v1/gifs/search?'
  let key = "&api_key=" + "quS2dai4NJv0dJVwt1KN0r1GxnGHx6B4"
  let searchword = "&q=" + "cats"
  let limit = "&limit=" + "24"
  let offset = "&offset=" + "0"
  let rating = "&rating=" + "g"
  let lang = "&lang=" + "en"
  let url = endpoint + key + searchword + limit + offset + rating;

  fetchdata(url)
}
