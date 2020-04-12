import { apiUserinput} from './modules/api.js';
import { router } from './modules/router.js';



function app() {
    let button = document.getElementById('submitbtn')
    button.addEventListener("click", apiUserinput);
    router();
}
app()
