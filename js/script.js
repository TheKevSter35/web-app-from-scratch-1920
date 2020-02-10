//Source: https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/

const app = document.getElementById('list')
const block = document.createElement('li')

const button = document.getElementById('submitbtn')
button.addEventListener("click", getUserInput);

function getUserInput() {
  //Get the user input
  let userInput = document.getElementById("user-input-field").value
  console.log("user wants to search for: ", userInput)

  block.setAttribute('class', 'results')

  app.appendChild(block)

  const request = new XMLHttpRequest()
  endpoint = 'https://orion.apiseeds.com/api/music/search/?q=',
    searchword = (userInput),
    key = "&apikey=" + "3GIKwZk8GNseBxT3CZsEHLG3Ee34x2KEzjkqyHjzJ9fnvfbpqbH7Kx7zi5QkSuE7",
    limit = "&limit=" + "20",
    url = (endpoint) + (searchword) + (key) + (limit);

  request.open('GET', (url), true)
  request.onload = function () {
    // Begin accessing JSON data here
    const data = JSON.parse(this.response)


    if (request.status >= 200 && request.status < 400) {
      console.log(data.result)
      
      data.result.forEach(list => {
        
        const card = document.createElement('ul')


        const artist = document.createElement('strong')
        artist.textContent = list.artist + (" - ") + list.title


        const cover = document.createElement('img')
        cover.src = list.cover

        const album = document.createElement('P')
        album.textContent = ("Album: ") + list.album
        const track = document.createElement('a')
        track.textContent = ("button")
        track.href = ('#')  + list.track_id
       
        block.appendChild(card)
        card.setAttribute('class', 'song')
        card.appendChild(cover)
        card.appendChild(artist)
        card.appendChild(album)
        card.appendChild(track)
        track.setAttribute('id', 'show')
        // card.appendChild(title)
        
      })
    } else {
      const errorMessage = document.createElement('P')
      errorMessage.textContent = `Something went wrong :/`
      app.appendChild(errorMessage)
    }
    
  }
  request.send()
}

// let newData = {
//     id: create_UUID(),
//     title: data.title,
//     artist: data.artist,
//     cover: data.cover,
//     album: data.album
//   }


// console.log(newData)

