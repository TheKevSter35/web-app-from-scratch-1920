// render data
import { router } from './router.js';
export function render(data) {
    let app = document.getElementById('list')
    let result = data.result;
    router(result)
    console.dir(result);
    
    result.forEach((data, id) => {
      let html = `
              <li class = "results">
                <img src= "${data.cover}"  >
                <strong>${data.title}</strong>
                <a href = "#${id}"></a>
              </li>
            `;
      app.insertAdjacentHTML('beforeend', html);
      
    });
    
  }