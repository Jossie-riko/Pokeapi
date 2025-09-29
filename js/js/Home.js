function Home(parametro){
    var root = document.getElementById("root");
    for(var i = 0; i < pokemones.length; i++){
        id = pokemones[i].url.split("/")[6];
        nombre = pokemones[i].name
        document.getElementById("root").innerHTML += `
            <div class="un-pokemon" onclick="Detalle(${id})">
                <p>${id} ${nombre}</p>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png" width="auto" height="60" loading="lazy" alt="${nombre}">
            </div>
        `
    } 
}
function buscadorfuncion(){
alert("buscador")
}
function Home(){
    //buscador
    const buscador = document.createElement("input");
    buscador.classList.add("c-buscador");
    buscador.type = "text";
    buscador.placeholder = "Buscar Pokémon...";
    buscador.addEventListener("input", () => {
            buscadorfuncion();
    });
    //filtro

    //listas

    //agregar
    document.getElementById("root").appendChild(buscador)
}