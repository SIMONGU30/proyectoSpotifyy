import{generarToken}from "./generarToken.js"
import{generarURI} from './generadorURI.js'
import{consumirAPI} from './servicio.js'
import{pintarCanciones}from "./pintarcanciones.js"

//detectar el clic en el boton del formulario
let boton=document.getElementById("boton")
boton.addEventListener("click",function(evento){

    evento.preventDefault()
    
    
    let artistaSeleccionada=document.getElementById("artistas").value
    let URI=generarURI(artistaSeleccionada)

    async function activarAPI(){
        
        let token=await generarToken()
        let datosConsultadosAPI= await consumirAPI(URI,token)

        console.log(datosConsultadosAPI)

        
        // window.location.href = "./artistas.html?id=5";
        // window.location.href = `./artistas.html?id=${artistaSeleccionada}`;

       pintarCanciones(datosConsultadosAPI)
    

       //  console.log(token)
    }

    
    activarAPI()
    

})