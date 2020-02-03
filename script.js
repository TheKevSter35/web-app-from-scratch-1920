const app = document.getElementById('list')

const block = document.createElement('li')
block.setAttribute('class', 'results')

app.appendChild(block)

var request = new XMLHttpRequest()
// request.open('GET', 'https://orion.apiseeds.com/api/music/lyric/Breaking Benjamin/Dear agony?apikey=3GIKwZk8GNseBxT3CZsEHLG3Ee34x2KEzjkqyHjzJ9fnvfbpqbH7Kx7zi5QkSuE7 ', true)
request.open('GET', 'https://orion.apiseeds.com/api/music/search/?q=Killpop&apikey=3GIKwZk8GNseBxT3CZsEHLG3Ee34x2KEzjkqyHjzJ9fnvfbpqbH7Kx7zi5QkSuE7&limit=20 ', true)
request.onload = function() {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {
        console.log(data.result)

        data.result.forEach( list => {
        const card = document.createElement('ul')
       
    
        const artist = document.createElement('h3')
        artist.textContent = ("Artist: ") + list.artist
        
        const title = document.createElement('p')
        title.textContent = ("Song: ") + list.title

      
        const cover = document.createElement('img')
        cover.src = list.cover
        const album = document.createElement('P')
        album.textContent = ("Album: ") + list.album
    
        block.appendChild(card)
        card.appendChild(artist)
        card.appendChild(title)
        card.appendChild(cover)
        card.appendChild(album)
        })
    } else {
      const errorMessage = document.createElement('P')
      errorMessage.textContent = `Gah, it's not working!`
      app.appendChild(errorMessage)
    }
  }

request.send()





//Source: https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/