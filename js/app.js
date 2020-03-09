import { api, apiUserinput} from './modules/api.js';

const button = document.getElementById('submitbtn')
button.addEventListener("click", apiUserinput);


api()
