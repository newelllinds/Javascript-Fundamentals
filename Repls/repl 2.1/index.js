let url = 'https://rickandmortyapi.com/api/character/';

let div1 = document.createElement('div'); //creating a div in the HTML
div1.setAttribute("class", "pic1"); //setting the class - pic1 is the name of the class
document.body.appendChild(div1); //appending the div to the body

let div2 = document.createElement('div');
div2.setAttribute("class", "pic2");
document.body.appendChild(div2);

fetch(url) //making a request to fetch the data
  .then(function(result) { //then returns a promise - pulls the result object from the API
    return result.json(); //jsonifies the data
  }).then(function(json) { //pulls the json from the return 
    console.log(json); //to see the json in inspect
    displayResults(json); //this is function allowing us to display the results as jsonified data

   })

function displayResults(json) { //creating a function to pull in the json result information

    let img1 = json.results[0].image; //setting the image as a variable
    console.log(img1);

    let rick = document.createElement('img'); //creating an image element in the HTML
    div1.appendChild(rick); //adding the image to the image element
    rick.src=img1; //naming the source of the image

    let img2 = json.results[1].image;
    console.log(img2);

    let morty = document.createElement('img');
    div2.appendChild(morty);
    morty.src=img2;

}
