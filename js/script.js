var app = document.getElementById('list')
var block = document.createElement('li')

var button = document.getElementById('submitbtn')
button.addEventListener("click", getUserInput);

function getUserInput() {
  //Get the user input
  let userInput = document.getElementById("user-input-field").value
  console.log("user wants to search for: ", userInput)

  block.setAttribute('class', 'results')

  app.appendChild(block)

  var request = new XMLHttpRequest()
  endpoint = 'https://orion.apiseeds.com/api/music/search/?q=',
    searchword = (userInput),
    key = "&apikey=" + "3GIKwZk8GNseBxT3CZsEHLG3Ee34x2KEzjkqyHjzJ9fnvfbpqbH7Kx7zi5QkSuE7",
    limit = "&limit=" + "20",
    url = (endpoint) + (searchword) + (key) + (limit);

  // request.open('GET', 'https://orion.apiseeds.com/api/music/search/?q=unsainted&apikey=3GIKwZk8GNseBxT3CZsEHLG3Ee34x2KEzjkqyHjzJ9fnvfbpqbH7Kx7zi5QkSuE7&limit=20 ', true)
  request.open('GET', (url), true)

  request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {
      console.log(data.result)

      data.result.forEach(list => {
        var card = document.createElement('ul')

        var artist = document.createElement('strong')
        artist.textContent = list.artist + (" - ") + list.title


        var cover = document.createElement('img')
        cover.src = list.cover

        var album = document.createElement('P')
        album.textContent = ("Album: ") + list.album

        block.appendChild(card)
        card.appendChild(cover)
        card.appendChild(artist)
        card.appendChild(album)

        // card.appendChild(title)
      })
    } else {
      var errorMessage = document.createElement('P')
      errorMessage.textContent = `Something went wrong :/`
      app.appendChild(errorMessage)
    }
  }
  request.send()
}
//Source: https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/