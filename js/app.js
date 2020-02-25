import {getUserInput} from './modules/userinput.js';
import {request} from './modules/request.js';
import {render} from './modules/render.js';
import {routie} from './modules/routie.js';


const button = document.getElementById('submitbtn')
button.addEventListener("click", getUserInput);
// const value = getUserInput()
// console.log(value)


// request()
// requestOnload()