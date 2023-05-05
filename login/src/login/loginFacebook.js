import {auth} from '../database/firebase.js';
import {FacebookAuthProvider,signInWithPopup} from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js';


const btnLoginFacebook = document.querySelector(".loginFacebook");

btnLoginFacebook.onclick = async function(){

    const provider = new FacebookAuthProvider();

     try {
         await signInWithPopup(auth,provider);
         location.href = "./scr";
     } catch (error) {
         console.log("Algo salio mal",error);
     }
}




