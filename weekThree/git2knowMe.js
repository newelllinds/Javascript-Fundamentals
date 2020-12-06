let group = [{
    name: "Perla",
    age: 38,
    graduatedHSYear: 2001,
    pets: true,
    petNames: ["Mika"],
    mostRecentMovieWatched: "Queen's Gambit",
    carsOwned: [{
        Make: "Honda", 
        Model: "Pilot"}],
    favoritePotato: "French Fries"
},
{
    name: "Lindsay",
    age: 33,
    graduatedHSYear: 2005,
    pets: true,
    petNames: ["Pepper", "Boyd", "Piper"],
    mostRecentMovieWatched: "The Haunting of Bly Manor",
    carsOwned: [{
    Make: "Honda", 
    Model: "Odyssey"}],
    favoritePotato: "French Fries"
},
{
    name: "Abigail",
    age: 26,
    graduatedHSYear: 2012,
    pets: true,
    petNames: ["Chester", "Mischief", "Boots", "Black Kitten", "Doom", "Olivia", "Tulip", "Tipsy", "C", "Fiona", "Gypsy", "Ceelo", "Walter", "Paco"],
    mostRecentMovieWatched: "Mr. Robot",
    carsOwned: [{
    Make: "Chevy", 
    Model: "Equinox"}],
    favoritePotato: "Mashed"
},
{
    name: "Shannon",
    age: 56,
    graduatedHSYear: 1982,
    pets: true,
    petNames: ["Lucy", "Emilee"],
    mostRecentMovieWatched: "Greyhound",
    carsOwned: [{
        Make: "Subaru", 
        Model: "Forester"}],
    favoritePotato: "Mashed"
}]


//After you create the array of objects, loop through the array to grab the mostRecentMovieWatched for each person object and PUSH those values to a GLOBAL moviesWatched variable which should be an array.

let mostRecentMovieWatched = [];

for(let i=0; i < group.length; i++){
    console.log(group[i].mostRecentMovieWatched);
    mostRecentMovieWatched.push(group[i].mostRecentMovieWatched);
}

console.log(mostRecentMovieWatched);

//for of example

// for (student of group) {
//     mostRecentMovieWatched.push(student.mostRecentMovieWatched)
// }
// console.log(mostRecentMovieWatched);  

//for each example
group.forEach((student) => {
    mostRecentMovieWatched.push(movie.mostRecentMovieWatched)
});

console.log(mostRecentMovieWatched);

// group.forEach(function (mostRecentMovieWatched) {
//     var x = am;
//     console.log(x);
// };

//group.mostRecentMovieWatched.forEach(group.mostRecentMovieWatched => console.log(mostRecentMovieWatched));

// for (mostRecentMovieWatched in group){
//     console.log(group.mostRecentMovieWatched);
// }
