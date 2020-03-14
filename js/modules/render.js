import {
  router
} from './router.js';
// render data

export function render(data) {
  let app = document.getElementById('list')
  document.getElementById('info').innerHTML = "";
  let result = data;
  // console.dir(result.data);
  result.data.forEach((data) => {
    let html = `
              <li class = "results">
                <img src= "${data.images.original.url}"  >
                <a href = "#${data.id}"></a>
              </li>
            `;
    app.insertAdjacentHTML('beforeend', html);

    routie({
      [data.id]: function () {
        console.log("test")
        let app = document.getElementById('info')
        document.getElementById('info').innerHTML = "";
        let html = `
                    <ul id="detail">
                            <li class = "detailImg">
                            <img src= "${data.images.original.url}"  >
                            </li>
                            <li class = "detailText">
                            <h2>${data.title}  </h2>
                            <p> ${data.import_datetime}  </p>
                            </br>         
                            <p><b>Uploaded by </b>${data.username ? data.username : 'Anonymous'}</p>
                            <p> <b>Rating: </b>${data.rating} </p>
                            </li>
                            </ul>
                          `;

        app.insertAdjacentHTML('beforeend', html);
      }
    })
  })
}