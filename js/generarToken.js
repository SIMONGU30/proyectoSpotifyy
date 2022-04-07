export async function generarToken(){

    let URI="https://accounts.spotify.com/api/token"

    let client_id="client_id=d832b3ad7dec412ab6c2bc9ea2f469cf"
    let client_secret="client_secret=dea17d1e35f143c688a512b293f69ef9"
    let grant_type="grant_type=client_credentials"

    let parametros={
        method:"POST",
        headers:{"Content-Type":"application/x-www-form-urlencoded"},
        body:`${client_id}&${client_secret}&${grant_type}`
    }

    /* "Bearer BQBgNY0DOHz3kS0YmNa3gXxQMgnRVq49G_44EHgbC_ISWiVTWWyuxeDmy9MnMcNas4YO6nwbzU7XspPHvlD1sLdVgJmeDeJiWIOPPAKGbep5prylMQ_WEzVU4fpZdi9pNV9tm4tUnxlNbNTJ6Po"

   fetch(URI,parametros)
    .then(function(respuesta){
        return(respuesta.json())
    })
    .then(function(respuesta){
        console.log(respuesta)
    })
    .catch(function(respuesta){
        console.log(respuesta)
    })*/



    let respuesta=await fetch(URI,parametros)
    let infoToken= await respuesta.json()

    let TOKEN=`${infoToken.token_type} ${infoToken.access_token}`
    

    return (TOKEN)
}



//generarToken()