
import {GoogleAuthProvider,signInWithPopup} from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js';
import {auth}  from '../database/firebase.js';


const btnLoginGoogle = document.querySelector(".loginGoogle");


btnLoginGoogle.onclick = async function(){
    
    const provider = new GoogleAuthProvider();
    
    try {
        await signInWithPopup(auth,provider);       
        location.href = "";
    } catch (error) {
        console.log("Algo salio mal",error);
    }
    
}
