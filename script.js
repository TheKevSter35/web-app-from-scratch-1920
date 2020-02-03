const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = 'logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

var request = new XMLHttpRequest()
// request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

// request.onload = function() {
//   // Begin accessing JSON data here
//   var data = JSON.parse(this.response)
//   if (request.status >= 200 && request.status < 400) {
//     data.forEach(movie => {
//       const card = document.createElement('div')
//       card.setAttribute('class', 'card')

//       const h1 = document.createElement('h1')
//       h1.textContent = movie.title

//       const p = document.createElement('p')
//       movie.description = movie.description.substring(0, 300)
//       p.textContent = `${movie.description}...`

//       container.appendChild(card)
//       card.appendChild(h1)
//       card.appendChild(p)
//     })
//   } else {
//     const errorMessage = document.createElement('marquee')
//     errorMessage.textContent = `Gah, it's not working!`
//     app.appendChild(errorMessage)
//   }
// }
request.open('GET', 'https://orion.apiseeds.com/api/music/lyric/Breaking Benjamin/Dear agony?apikey=3GIKwZk8GNseBxT3CZsEHLG3Ee34x2KEzjkqyHjzJ9fnvfbpqbH7Kx7zi5QkSuE7 ', true)

request.onload = function() {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {
        console.log(data.result)
        const card = document.createElement('div')
        card.setAttribute('class', 'card')
    
        const h1 = document.createElement('h1')
        h1.textContent = data.result.artist.name
    
        const p = document.createElement('p')
        data.result.track.text = data.result.track.text.substring(0, 300)
        p.textContent = `${data.result.track.text}...`
    
        container.appendChild(card)
        card.appendChild(h1)
        card.appendChild(p)
    } else {
      const errorMessage = document.createElement('marquee')
      errorMessage.textContent = `Gah, it's not working!`
      app.appendChild(errorMessage)
    }
  }

request.send()