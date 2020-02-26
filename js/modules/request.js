import {
  render
} from './render.js';

export function request(userInput) {
  let request = new XMLHttpRequest()
  let endpoint = 'https://orion.apiseeds.com/api/music/search/?q=',
    searchword = (userInput),
    key = "&apikey=" + "3GIKwZk8GNseBxT3CZsEHLG3Ee34x2KEzjkqyHjzJ9fnvfbpqbH7Kx7zi5QkSuE7",
    limit = "&limit=" + "20",
    url = endpoint + searchword + key + limit;

  request.open('GET', (url), true)
  const list = document.getElementById('info')
  const loading = document.createElement('img')
  loading.setAttribute('id', 'searchgif')
  loading.src = "../source/loading.svg"
  list.appendChild(loading)

  request.onload = function () {

    loading.remove(searchgif);
    let data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {
      console.log('Results found')

      render(data)

    }
  
  }
  request.send()
}