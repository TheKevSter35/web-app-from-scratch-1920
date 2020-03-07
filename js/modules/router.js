import { render } from './render.js';
export function router (data, result, ) {
routie({
    id: function (result) {
        console.log(id)
        console.log(data[0].title)
      const hash = window.location.hash.slice(1)
    //   if (hash === data[0]) {
        console.log("test")
        const details = document.getElementById('info')
                const container = document.createElement('article')
                const content = document.createElement('header')
                const artist = document.createElement('H2')
                artist.textContent = ("Artist: ") + data[0].artist
                const title = document.createElement('H3')
                title.textContent = ("Title: ") + data[0].title
                const cover = document.createElement('img')
                cover.src = data[0].cover
                const album = document.createElement('P')
                album.textContent = ("Album: ") + data[0].album

                details.appendChild(container)
                container.appendChild(cover)
                container.appendChild(content)
                content.appendChild(artist)
                content.appendChild(title)
                content.appendChild(album)
              
            
    //   }
    }
  })
}