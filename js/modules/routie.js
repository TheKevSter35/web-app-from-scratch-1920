import { request} from './request.js';
import { render} from './render.js';

export function routie() {
    
routie({
    [db.track_id]: function () {
        console.log("test123")
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
}
