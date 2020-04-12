import {
    api,
    apiUserinput
} from './api.js';
import {
    loader
} from './loading.js';
import {
    render
} from './render.js';

export async function router() {

    routie({
        '':() => {
            loader('active');
            api().then(data => {
                render(data)
                updateUI('gifs');
            })
            
        },
        'search': () => {
            apiUserinput().then(data => {
                render(data.data)
                updateUI('gifs');
            })
        },
        'gifs/:id': id => {
            updateUI('gifs-detail');
            api(id).then(data => {
                render(data, id)
            })
        }
        
    })
}

function updateUI(route) {
    const sections = document.querySelectorAll('section');
    const activeSection = document.querySelector(`[data-route=${route}]`);
  
    sections.forEach(section => {
      section.classList.remove('active');
    });
  
    activeSection.classList.add('active');
  }