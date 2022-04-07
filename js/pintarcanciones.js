export function pintarCanciones(resultado){

    let baseDiv=document.getElementById("base")
    baseDiv.innerHTML =""
    console.log(baseDiv)

    let contador=0
    resultado.tracks.forEach(function(tracks){

    // resultado.tracks.forEach(tracks=>{
        
       contador++

        let contenedorCancion=document.createElement("div")
        contenedorCancion.classList.add("row","row-cols-12","w-75")
        //contenedorCancion.style.height="60px"
        
        let Colnumeracion= document.createElement("div")
        Colnumeracion.classList.add("col")
        Colnumeracion.classList.add("col-1")
        //Colnumeracion.style.width="50px"

        let numeracion=document.createElement("h4")
         numeracion.classList.add("me-auto")
         numeracion.textContent=contador

        let ColImgAlbum=document.createElement("div")
        ColImgAlbum.classList.add("col")
        ColImgAlbum.classList.add("col-1")
        //ColImgAlbum.style.width="100px"

        let imagen=document.createElement("img")
        imagen.classList.add("img-fluid")
        imagen.classList.add("w-100")
        imagen.src=tracks.album.images[0].url


        let ColNombre=document.createElement("div")
        ColNombre.classList.add("col")
        ColNombre.classList.add("col-5")
        //ColNombre.style.width="10px"
        

       

        let nombre=document.createElement("h6")
        nombre.classList.add("text-center")
        nombre.classList.add("text-primary")
        nombre.textContent=tracks.name

        

        let Coldireccion=document.createElement("div")
        Coldireccion.classList.add("col")
        Coldireccion.classList.add("col-5")
        //ColNombre.style.width="10px"

        let direccion=document.createElement("audio")
        direccion.src=tracks.preview_url
        direccion.setAttribute("controls","controls")

       
        

        Colnumeracion.appendChild(numeracion)
        ColImgAlbum.appendChild(imagen)
        ColNombre.appendChild(nombre)
        Coldireccion.appendChild(direccion)
        
        
        
        contenedorCancion.appendChild(Colnumeracion)
        contenedorCancion.appendChild(ColImgAlbum)
        contenedorCancion.appendChild(ColNombre)
        contenedorCancion.appendChild(Coldireccion)
        baseDiv.appendChild(contenedorCancion)
    })

}
