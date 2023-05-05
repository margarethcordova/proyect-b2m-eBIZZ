import {auth} from '../database/firebase.js';
import {createUserWithEmailAndPassword,updateProfile} from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js';


const formularioRegistro  = document.getElementById("formCrearCuenta");


formularioRegistro.addEventListener("submit",async(event)=>{
       event.preventDefault();

       const nombre  = formularioRegistro["nombreUsuario"].value; 
       const correo = formularioRegistro["correoUsuario"].value;
       const contra = formularioRegistro["contraUsuario"].value;

       try {
           const credenciales = await createUserWithEmailAndPassword(auth,correo,contra);
           await updateProfile(auth.currentUser,{displayName: nombre}); 
           formularioRegistro.reset();
           console.log(credenciales);
        } catch (error) {
           console.log("Algo salio mal",error);
       }       
       
});
