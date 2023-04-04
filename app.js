const redPokeball = document.getElementById("red-article");

const bluePokeball = document.getElementById("blue-article");

const greenPokeball = document.getElementById("green-article");

const header = document.querySelector("header");

const pokemonImage = document.getElementById("pokemon-image");

const starterName = document.getElementById("starter-name");

const form = document.querySelector("form");

const selectBox = document.getElementById("select-pokemon");

const errorAside = document.getElementById("error-aside");

const pokedexInfo = document.getElementById("pokedex-info-p");

const pokemonType = document.getElementById("pokemon-type");

const pokemonAbility = document.getElementById("pokemon-ability");

const something = document.getElementById("something-else");

const typicallyFound = document.getElementById("typically-found")


const errorOption = document.getElementById("error-option");

const charmanderOption = document.getElementById("charmander-option")

const squirtleOption = document.getElementById("squirtle-option")

const bulbasaurOption = document.getElementById("bulbasaur-option")




fetch("https://pokeapi.co/api/v2/pokemon-species/4/")
    .then((response) => {
        return response.json();
    })
    .then((response) => {
       starterName.innerHTML = response.name
    })
    .catch((error) => {
        console.log(error)
    })

redPokeball.addEventListener("click", (event) => {

    pokemonImage.setAttribute("src", ".pngs/charmanderpng.png");
    pokemonImage.setAttribute("alt", "charmander");

    fetch("https://pokeapi.co/api/v2/pokemon-species/4/")
    .then((response) => {
        return response.json();
    })
    .then((response) => {
       starterName.innerHTML = response.name
    })
    .catch((error) => {
        console.log(error)
    })
}
)

greenPokeball.addEventListener("click", (event) => {

    pokemonImage.setAttribute("src", ".pngs/bulbasaurpng.png");
    pokemonImage.setAttribute("alt", "bulbasaur");
    fetch("https://pokeapi.co/api/v2/pokemon-species/1/")
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        console.log(response)
       starterName.innerHTML = response.name
    })
    .catch((error) => {
        console.log(error)
    })
})

bluePokeball.addEventListener("click", (event) => {

    pokemonImage.setAttribute("src", ".pngs/squirtlepng.png");
    pokemonImage.setAttribute("alt", "squirtle");
    fetch("https://pokeapi.co/api/v2/pokemon-species/7/")
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        console.log(response)
       starterName.innerHTML = response.name
    })
    .catch((error) => {
        console.log(error)
    })
})

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (selectBox.value !== "charmander" && selectBox.value !== "squirtle" && selectBox.value !== "bulbasaur") {

        const errorMessage = document.createElement("p");
        errorMessage.setAttribute("class", "error")
        errorMessage.setAttribute("style", "grid-row : 2")
        errorMessage.innerHTML = " Error: Must select Pokemon!"
        errorAside.append(errorMessage);

    }

    else {

        const imageArticle = document.getElementById("image-article")
        imageArticle.setAttribute("style", "grid-column : 1 / span 2")


        const pokeballSection = document.getElementById("pokeballs");
        pokeballSection.setAttribute("style", "display: none");
        const newPokeballSection = document.createElement("section");
        newPokeballSection.innerHTML = "<article class='pokeball red' id='red-article'></article><article class='pokeball blue' id='blue-article'></article><article class='pokeball green' id='green-article'></article>"
        newPokeballSection.setAttribute("class", "pokeballs")
        const main = document.querySelector("main");
        main.prepend(newPokeballSection);


        errorAside.innerHTML = "";
        errorAside.setAttribute("style", "display: none");
        pokedexInfo.setAttribute("style", "border : 1px dotted antiquewhite");
        
    }

    if (selectBox.value === "charmander") {
        fetch("https://pokeapi.co/api/v2/pokemon-species/4/")
        .then((response) => {
            return response.json()
        })
        .then((response) => {
            console.log(response)
            pokemonImage.setAttribute("src", ".pngs/charmanderpng.png");
            pokemonImage.setAttribute("alt", "charmander");
            starterName.innerHTML = response.name;
            pokedexInfo.innerHTML = `Congratulations! You chose ${response.name}. ${response['flavor_text_entries'][9]["flavor_text"]}`;
            pokemonType.innerHTML = 
            form.innerHTML = "";
        })
        .catch((error) => {
            console.log(error)
        })
    }


    if (selectBox.value === "bulbasaur") {
        fetch("https://pokeapi.co/api/v2/pokemon-species/1/")
        .then((response) => {
            return response.json()
        })
        .then((response) => {
            console.log(response)
            pokemonImage.setAttribute("src", ".pngs/bulbasaurpng.png");
            pokemonImage.setAttribute("alt", "bulbasaur");
            starterName.innerHTML = response.name;
            pokedexInfo.innerHTML = `Congratulations! You chose ${response.name}. ${response['flavor_text_entries'][9]["flavor_text"]}`;
            form.innerHTML = "";
        })
        .catch((error) => {
            console.log(error)
        })
    }

    if (selectBox.value === "squirtle") {
        fetch("https://pokeapi.co/api/v2/pokemon-species/7/")
        .then((response) => {
            return response.json()
        })
        .then((response) => {
            console.log(response)
            pokemonImage.setAttribute("src", ".pngs/squirtlepng.png");
            pokemonImage.setAttribute("alt", "squirtle");
            starterName.innerHTML = response.name;
            pokedexInfo.innerHTML = `Congratulations! You chose ${response.name}. ${response['flavor_text_entries'][9]["flavor_text"]}`;
            form.innerHTML = "";
        })
        .catch((error) => {
            console.log(error)
        })
    }


})
