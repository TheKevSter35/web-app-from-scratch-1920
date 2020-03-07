// render data
export function render(data) {
    const app = document.getElementById('list')
    const result = data.result;
    console.dir(result);
    result.forEach((data, i) => {
      const html = `
              <li class = "results">
                <img src= "${data.cover}"  >
                <strong>${data.title}</strong>
                <a href = "#${data.track_id}"></a>
              </li>
            `;
      app.insertAdjacentHTML('beforeend', html);
    });
  }