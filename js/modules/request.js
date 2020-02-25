import { render} from './render.js';
import { routie } from './routie.js';
export function request(userInput) {
  console.log('test')
  console.log(userInput)
  let request = new XMLHttpRequest()
  let endpoint = 'https://orion.apiseeds.com/api/music/search/?q=',
    searchword = (userInput),
    key = "&apikey=" + "3GIKwZk8GNseBxT3CZsEHLG3Ee34x2KEzjkqyHjzJ9fnvfbpqbH7Kx7zi5QkSuE7",
    limit = "&limit=" + "20",
    url = endpoint + searchword + key + limit;

    request.open('GET', (url), true)
    request.onload = function () {
    // Begin accessing JSON data here
    let data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
      render(data)
      routie(data)

    }
    
  }
  request.send()
}