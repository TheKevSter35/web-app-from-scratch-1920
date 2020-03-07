import { router } from './router.js';

//create overview list
const app = document.getElementById('list')
let block = document.createElement('ul')
block.setAttribute('class', 'results')
app.appendChild(block)

//render the data to html
export function render(data) {
  console.log(data.result)
  router(data.result)
  data.result.forEach(db => {
    const card = document.createElement('li')

    const title = document.createElement('strong')
    title.textContent = db.title

    const cover = document.createElement('img')
    cover.src = db.cover

    const track = document.createElement('a')
    track.insertAdjacentHTML('beforeEnd', (db.cover, db.title))

    //Give every result a link with the track id
    track.href = ('#') + db.track_id
    block.appendChild(card)
    card.setAttribute('class', 'song')
    card.appendChild(cover)
    card.appendChild(title)
    card.appendChild(track)
    track.setAttribute('id', 'show')

    routie({
      // if user click on a song route it to a detail page and render 
      [db.track_id]: function () {
        const Info = document.getElementById('info')
        Info.innerHTML = ""
        const hash = window.location.hash.slice(1)
        console.log(db.track_id)
        //if hash and track_id is the same render detail page
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
}