const fetchPokemon = () =>{
  const url = `hhtps://pokeapi.co/api/v2/pokemon/1`;
  fetch(url)
  .then((res) => {
      return res.json();
  })
.then((data)=>{
    console.log(data);
    pokemon['type'] = data.types
    .map((type) => type.type.name)
    .join(', ');
    console.log(pokemon)

});
fetchPokemon();
};

