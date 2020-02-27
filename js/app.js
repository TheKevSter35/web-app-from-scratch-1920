//imports 
import {
    getUserInput
} from './modules/userinput.js';

import {
    request
} from './modules/request.js';

import {
    render
} from './modules/render.js';

import {
    router
} from './modules/router.js';


//search form
const button = document.getElementById('submitbtn')
button.addEventListener("click", getUserInput);
