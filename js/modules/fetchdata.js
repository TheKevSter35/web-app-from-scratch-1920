import { render } from './render.js';

export function fetchdata(url) {
new Promise((resolve, reject) => {
fetch(url)
.then(response => {
  let Loading = document.getElementById('info' )
  let html = ` <p class='loadingstate'>  <img src="../source/loading.gif"> </p>`;
  Loading.insertAdjacentHTML('beforeend', html);
  return response.json();
})
.then(data => {
 resolve(render(data));
  console.log(data)
})
.catch(err => reject(err)) 


});

}