
/*  3.1 Dado el siguiente array, devuelve un array con sus nombres 
utilizando .map(). */

const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const mapUsers = users.map(user=>user.name);

console.log(mapUsers);

/* 3.2 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
empiece por 'A'. */

const users2 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const mapUsers2 = users2.map(user=> user.name.startsWith('A') ? 'Anacleto' : user.name);

/* Esta es la primera que salió de mi cabeza pero decidí hacerlo con el ternario para acostumbrarme

constmapUsers2 = users2.map(user=>{
    if(user.name.startsWith('A')){
        return 'Anacleto';
    }else{
        return user.name;
    }
}) */

console.log(mapUsers2);

/* 3.3 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
cuando el valor de la propiedad isVisited = true. */

const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

const mapCities = cities.map(city=> 
	city.isVisited ?`${city.name} (Visitado)` :`${city.name} (No visitado)`);

console.log(mapCities);