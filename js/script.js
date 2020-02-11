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
      var data = JSON.parse(this.response)

      if (request.status >= 200 && request.status < 400) {
        console.log(data)
        console.log(data.result[0])

        data.result.forEach(list => {
          console.log(list)

          const card = document.createElement('li')


          const title = document.createElement('strong')
          title.textContent = list.title


          const cover = document.createElement('img')
          cover.src = list.cover

          const track = document.createElement('a')
          track.insertAdjacentHTML('beforeEnd', (list.cover, list.title))
          track.href = ('#') + list.track_id

          block.appendChild(card)
          card.setAttribute('class', 'song')
          card.appendChild(cover)
          card.appendChild(title)
          card.appendChild(track)
          track.setAttribute('id', 'show')
          // card.appendChild(title)
          routie({

            '5cfcacdaba7d19ca6f2f5dd5': function () {
              const Displaylist = document.getElementById('list')
              Displaylist.innerHTML = ""
              const hash = window.location.hash.slice(1)
              console.log(hash)
              console.log(list.track_id)

              console.log(list)

              if (hash === list.track_id) {
                const details = document.getElementById('info')
                const container = document.createElement('article')
                const artist = document.createElement('H2')
                artist.textContent = list.artist + (" - ") + list.title
                const cover = document.createElement('img')
                cover.src = list.cover

                const album = document.createElement('P')
                album.textContent = ("Album: ") + list.album

                details.appendChild(container)
                container.appendChild(artist)
                container.appendChild(cover)
                container.appendChild(album)
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