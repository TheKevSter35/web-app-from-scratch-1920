//Source: https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/

const Module = (function () { //self invoking function (private-scope)
  const button = document.getElementById('submitbtn')
  button.addEventListener("click", getUserInput);
  const app = document.getElementById('list')
  let block = document.createElement('ul')

  function getUserInput() {
    //Get the user input
    const userInput = document.getElementById("user-input-field").value
    console.log("Searching for: ", userInput)

    block.setAttribute('class', 'results')
    app.appendChild(block)


    const request = new XMLHttpRequest()
    endpoint = 'https://orion.apiseeds.com/api/music/search/?q=',
      searchword = (userInput),
      key = "&apikey=" + "3GIKwZk8GNseBxT3CZsEHLG3Ee34x2KEzjkqyHjzJ9fnvfbpqbH7Kx7zi5QkSuE7",
      limit = "&limit=" + "20",
      url = endpoint + searchword + key + limit;

    request.open('GET', (url), true)
    request.onload = function () {
      // Begin accessing JSON data here
      let data = JSON.parse(this.response)

      if (request.status >= 200 && request.status < 400) {
        console.log(data)
        console.log(data.result[0])

        data.result.forEach(db => {
          console.log(db)

          const card = document.createElement('li')


          const title = document.createElement('strong')
          title.textContent = db.title


          const cover = document.createElement('img')
          cover.src = db.cover

          const track = document.createElement('a')
          track.insertAdjacentHTML('beforeEnd', (db.cover, db.title))
          track.href = ('#') + db.track_id

          block.appendChild(card)
          card.setAttribute('class', 'song')
          card.appendChild(cover)
          card.appendChild(title)
          card.appendChild(track)
          track.setAttribute('id', 'show')
          // card.appendChild(title)
          routie({

            '5cfcacdaba7d19ca6f2f5dd5': function () {
              // const Displaylist = document.getElementById('list')
              // Displaylist.innerHTML = ""
              const hash = window.location.hash.slice(1)
              console.log(hash)
              console.log(db.track_id)

              console.log(db)

              if (hash === db.track_id) {
                const details = document.getElementById('info')
                const container = document.createElement('article')
                const content = document.createElement('header')
                const artist = document.createElement('H2')
                artist.textContent = ("Artist: ") + db.artist 
                const title = document.createElement('H3')
                title.textContent = ("Title: ") + db.title
                const cover = document.createElement('img')
                cover.src = db.cover
                const album = document.createElement('P')
                album.textContent = ("Album: ") + db.album

                details.appendChild(container)
                container.appendChild(cover)
                container.appendChild(content)
                content.appendChild(artist)
                content.appendChild(title)
                content.appendChild(album)
              }



            }
          });
        })
      } else {
        const errorMessage = document.createElement('P')
        errorMessage.textContent = `Something went wrong :/`
        app.appendChild(errorMessage)
      }
    }
    request.send()
  }
})();