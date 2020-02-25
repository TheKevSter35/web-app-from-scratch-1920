
const app = document.getElementById('list')
  let block = document.createElement('ul')
  block.setAttribute('class', 'results')
  app.appendChild(block)


export function render(data) {
data.result.forEach(db => {
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
  // routie (db.track_id)
  routie({

    [db.track_id]: function () {
      const Info = document.getElementById('info')
      Info.innerHTML = ""
      // const Displaylist = document.getElementById('list')
      // Displaylist.innerHTML = ""
      const hash = window.location.hash.slice(1)
      // console.log(hash)
      // console.log(db.track_id)
      // console.log(db)

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