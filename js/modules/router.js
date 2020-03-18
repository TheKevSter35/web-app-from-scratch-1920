import {
    api,
    apiUserinput
} from './api.js';
import {
    render
} from './render.js';

export function router() {

    routie({
        'gifs/:id': id => {
            console.log ("render detail")
            console.log(id)
            api(id).then(data => {
                render(data, id)
            })
        }
    })
}