import {signOut} from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js';
import {auth}  from '../database/firebase.js';


const btnCerrarSesion = document.getElementById("btnCerrarSesion");


btnCerrarSesion.onclick = async function(){
       
    try {
          await signOut(auth);
          location.href = "index.html";
      } catch (error) {
         console.log("Algo salio mal",error);
      }
}

