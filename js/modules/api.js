import { fetchdata } from './fetchdata.js';

export function api (){
  let endpoint = 'http://api.giphy.com/v1/gifs/search?'
  let key = "&api_key=" + "quS2dai4NJv0dJVwt1KN0r1GxnGHx6B4"
  let searchword = "&q=" + "nerd"
  let limit = "&limit=" + "20"
  let offset = "&offset=" + "0"
  let rating = "&rating=" + "g"
  let lang = "&lang=" + "en"
  let url = endpoint + key + searchword + limit + offset + rating + lang;

  fetchdata(url)
}
const button = document.getElementById('submitbtn')
button.addEventListener("click", apiUserinput);

export function apiUserinput (){

  const button = document.getElementById('submitbtn')
button.addEventListener("click", apiUserinput);
  let userInput = document.getElementById("user-input-field").value
    console.log("Searching for: ", userInput)

  let endpoint = 'http://api.giphy.com/v1/gifs/search?'
  let key = "&api_key=" + "quS2dai4NJv0dJVwt1KN0r1GxnGHx6B4"
  let searchword = "&q=" + (userInput)
  let limit = "&limit=" + "20"
  let offset = "&offset=" + "0"
  let rating = "&rating=" + "g"
  let lang = "&lang=" + "en"
  let url = endpoint + key + searchword + limit + offset + rating + lang;

  fetchdata(url)
}

