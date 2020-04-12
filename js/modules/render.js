import { loader } from './loading.js';


// render data
export  function render(data, id) {
  loader('in-active');
  if (!id) {
    collection(data);
  } else {
    item(data);
  }
}

 function collection(data) {
  document.querySelector('section[data-route=gifs-detail]').innerHTML="";
  let app = document.querySelector('section[data-route=gifs]');
  console.log(data)
  let result = data;
  result.map(data => {
    let html = `
              <li class = "results">
              <img src= "${data.images.fixed_height_downsampled.url}"  >
                <a href = "#gifs/${data.id}"></a>
              </li>
            `;
            
    app.insertAdjacentHTML('beforeend', html);
    
  })
}

async function item(data) {
console.log(data)
let app = document.querySelector('section[data-route=gifs-detail]');

    let html = `
          <ul id="detail">
            <li class = "detailImg">
              
              <img src= "${data.images.original.url}"  >
            </li>
            <li class = "detailText">
            <h2>${data.title}  </h2>
              <p> ${data.import_datetime}  </p>
              </br>         
              <p><b>Uploaded by </b>${data.username ? data.username : 'Anonymous'}
              </p>         
              <p> <b>Rating: </b>${data.rating} </p>
            </li>
          </ul>
                `;
                  
    app.insertAdjacentHTML('beforeend', html);
}
