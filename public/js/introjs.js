// consola (log, info, warn, error, assert)
console.log("Aquí Tendras tu zoologico");
console.info("los Zoologicos tienen muchos animales");
console.warn("Cuidado con los animales venenosos");
console.error("No los vayas a dejar libres en el ZOO");

// funciones tradicionales
function alimentar(){
    console.log("Se alimentaron tus animales");
    return mi_animal_favorito;
}

// modificar html
const boton = document.getElementById("boton_alimentar");

const poner_imagen_tigre = () => {
    const imagen = document.getElementById("imagen_tigre");
    imagen.innerHTML = `<img alt="Foto de un tigre" 
        src="https://preview.redd.it/b4p80errzpt81.jpg?auto=webp&s=a032005170953259768d7c194a7e13024815d9fc">`;
};

const poner_imagen_orca = () => {
    const imagen = document.getElementById("imagen_orca");
    imagen.innerHTML = `<img alt="Foto de una orca" 
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8cc7866b-36c3-4a5c-9cf0-246562d2eee2/dafmj4n-95a30e6f-f749-4ad2-966e-e0c87bf7583b.jpg/v1/fill/w_1024,h_512,q_75,strp/fat_orca_by_fatthoron_dafmj4n-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvOGNjNzg2NmItMzZjMy00YTVjLTljZjAtMjQ2NTYyZDJlZWUyXC9kYWZtajRuLTk1YTMwZTZmLWY3NDktNGFkMi05NjZlLWUwYzg3YmY3NTgzYi5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Cstb1Sao9dKV-mnAHG4OTeYcrIi0ePyjqVOCKfzaQNQ">`;
};

const poner_imagen_lobo = () => {
    const imagen = document.getElementById("imagen_lobo");
    imagen.innerHTML = `<img alt="Foto de una lobo" 
        src="https://thumbs.dreamstime.com/b/lobo-muy-gordo-creado-con-tecnolog%C3%ADa-ai-generativa-concepto-de-276355141.jpg">`;
};

const alimentar_animales = () => {
    poner_imagen_tigre();
    poner_imagen_orca();
    poner_imagen_lobo();
    boton.textContent = "Ejercitar";
    boton.onclick = ejercitar_animales;
};

const ejercitar_animales = () => {
    const imagen_tigre_gordo = 
        "https://www.eltigre.org/wp-content/uploads/2022/04/caracteristicas-de-un-tigre-768x509.webp";
    const imagen_orca_gorda = 
        "https://www.peces.com.mx/wp-content/uploads/2023/10/Por-que-las-orcas-son-asesinas.jpg";
    const imagen_lobo_gordo = 
        "https://upload.wikimedia.org/wikipedia/commons/5/5a/Canis_lupus_265b.jpg";
        
    document.getElementById("imagen_tigre").innerHTML = 
        `<img alt="Foto de tigre sano" 
        src="${imagen_tigre_gordo}">`;
    
    document.getElementById("imagen_orca").innerHTML = 
        `<img alt="Foto de orca sana" 
        src="${imagen_orca_gorda}">`;

    document.getElementById("imagen_lobo").innerHTML = 
        `<img alt="Foto de lobo sano" 
        src="${imagen_lobo_gordo}">`;

    boton.textContent = "Alimentar";
    boton.onclick = alimentar_animales;
}

boton.onclick = alimentar_animales;