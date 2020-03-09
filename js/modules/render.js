// render data
import { router } from './router.js';
export function render(data) {
    let app = document.getElementById('list')
    let result = data;
    router(result)
    console.dir(result.data);
    result.data.forEach((data) => {
      let html = `
              <li class = "results">
              
                <img src= "${data.images.original.url}"  >
                
                <a href = "#${data.id}"></a>
              </li>
            `;
      app.insertAdjacentHTML('beforeend', html);
      
    });
    
  }