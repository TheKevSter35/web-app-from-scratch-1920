import { render } from './render.js';

export function fetchdata(url) {
fetch(url)
.then(response => {
  return response.json();
})
.then(data => {
  render(data);
  console.log(data)
})
.catch(err => {
  console.log(err);
});
}