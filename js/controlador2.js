import{generarToken}from "./generarToken.js"
import{generarURI} from './generadorURI.js'
import{consumirAPI} from './servicio.js'
import{pintarCanciones}from "./pintarcanciones.js"

let idArtista=(window.location.search.split("=" ) [1])

let URI=generarURI(idArtista)

async function activarAPI(){
    
    let token=await generarToken()
    let datosConsultadosAPI= await consumirAPI(URI,token)

    console.log(datosConsultadosAPI)

    
   // window.location.href = "./artistas.html?id=5";
   // window.location.href = `./artistas.html?id=${frutaSeleccionada}`;

    pintarCanciones(datosConsultadosAPI)


   //  console.log(token)
}
activarAPI()