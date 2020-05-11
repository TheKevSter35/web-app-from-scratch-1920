

export async function api (id) {
  let endpoint = 'https://api.giphy.com/v1/gifs/'
  let query = "search?&q="
  let key = "quS2dai4NJv0dJVwt1KN0r1GxnGHx6B4"
  let topic = "cats"
  let limit = "&limit=" + "24"
  let offset = "&offset=" + "0"
  let rating = "&rating=" + "g"
  let lang = "&lang=" + "en"
  let url = ""


  if (id) {
    url = `${endpoint}${id}?api_key=${key}`
  } else {
    url = `${endpoint}${query}${topic}&api_key=${key}${limit}${offset}${rating}${lang}`;
  }
  
  return fetch(url)
  .then(response => response.json())
  .then(data =>  clean(data.data))
  .then(data =>  store(data))
  .catch(err => {
    console.log(err);
  });
}


export async function apiUserinput() {
  let userInput = document.getElementById("user-input-field").value
  let endpoint = 'https://api.giphy.com/v1/gifs/search?'
  let key = "&api_key=" + "quS2dai4NJv0dJVwt1KN0r1GxnGHx6B4"
  let searchword = "&q=" + (userInput)
  let limit = "&limit=" + "24"
  let offset = "&offset=" + "0"
  let rating = "&rating=" + "g"
  let lang = "&lang=" + "en"
  let url = endpoint + key + searchword + limit + offset + rating + lang;


  return fetch(url)
  .then(response => response.json())
  .then(data =>  clean(data))
  .then(data =>  store(data))
  .catch(err => {
    console.log(err);
  });

}

function clean(data) {
  // // asynchronously clean data before returning, fake it with timeout (Loading State)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
     
    }, 1);
  });
}

function store(data) {
  // asynchronously store data before returning, fake it with timeout (Loading State)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 1);
  });
}