import { api, apiUserinput} from './modules/api.js';
import { router } from './modules/router.js';

let button = document.getElementById('submitbtn')
button.addEventListener("click", apiUserinput);

api()
router();
