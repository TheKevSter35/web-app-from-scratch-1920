import { render } from './render.js';

export function fetchdata(url) {
fetch(url)
.then(response => {
  let Loading = document.getElementById('info' )
  let html = ` <p class='loadingstate'>  <img src="../source/loading.gif"> </p>`;
  Loading.insertAdjacentHTML('beforeend', html);
  return response.json();

})
.then(data => {
 render(data);
  console.log(data)
})
.catch(err => {
  console.log(err);
  let errorMessage = document.getElementById('info' )
  let html = `<h2> Error Something went wrong</h2> `;
  errorMessage.insertAdjacentHTML('beforeend', html);
});

}