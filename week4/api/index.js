console.log("hello");

const baseURL = "https://api.chucknorris.io/jokes/random";

let jokeButton = document.getElementById('jokeButton');

jokeButton.addEventListener("click", fetchJokes)

function fetchJokes(){
    //alert("it worked");
    fetch(baseURL)
    .then((res) => res.json()) //converts to json object
    .then((json) => displayJoke(json.value)); //converts to regular object  ///console.log(json) to see how to "step into" that object
}

function displayJoke(joke) { //'joke' is referring p id in the HTML
    let jokeText = document.getElementById('joke');

    jokeText.innerText = joke;
}