import {signInWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js';
import {auth} from '../database/firebase.js';


const formIniciarSesion = document.getElementById("formIniciarSesion");


formIniciarSesion.addEventListener("submit",async(event)=>{
        event.preventDefault();
        
        const correo = formIniciarSesion["correoLogin"].value;
        const contra = formIniciarSesion["contraLogin"].value;
        
        try {
            await signInWithEmailAndPassword(auth,correo,contra);
            location.href = "pagina2.html";
        } catch (error) {
            console.log("Algo salio mal",error);
        }
});
