const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; //API endpoint for the New York Times data -- links NYT
const key = 'X3Ze1kRx6YolI6yapCrGm6uMG6Z4v2Qn'; //Lets the NYT know what user is using their API
let url; // stating the URL is a variable, the URL is declared later

//SEARCH FORM
const searchTerm = document.querySelector('.search'); //'document.' grabs from HTML & 'query selector' returns the first element that matches a specified CSS selector in the document //telling the form what to do, what you're looking for
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form'); //targeting the form
const submitBtn = document.querySelector('.submit'); //targeting the submit button

//RESULTS NAVIGATION
const nextBtn = document.querySelector('next'); //grabbing next button
const previousBtn = document.querySelector('.prev'); //grabbing the previous button
const nav = document.querySelector('nav'); //grabbing the  nav

//RESULTS SECTION
const section = document.querySelector('section'); //grabbing the results section


nav.style.display = 'none'; //hides buttons before search
let pageNumber = 0; //start at 0 until a search is made
//console.log('PageNumber:', pageNumber);
let displayNav = false; //defining the status of the navigation being displayed, not showing anything until a search is made ??

searchForm.addEventListener('submit', fetchResults); //waiting for someone to click 'submit' and then will fetch results
nextBtn.addEventListener('click', nextPage); //waiting for next page button to be clicked to proceed to the next page
previousBtn.addEventListener('click', previousPage); //same as above except previous in this case

function fetchResults(e){ //(e) is the event handling function which allows us to interact with the object (URL)
    e.preventDefault(); //prevents page from refreshing every time 'submit' is clicked
    console.log(e); // allows us to see the results in the terminal

    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value; //combining the elements together into one value (defines the URL) - cleaner, easier to read // '&q=' 
    console.log("URL:", url); //allows us to see the URL in inspect so we know the URL and API is working

    function nextPage(){
        console.log("Next button clicked");
    }
    
    function previousPage(){
        console.log("Next button clicked");
    }

    if(startDate.value !== '') {  //allows user to choose start date and end date
        console.log(startDate.value)
        url += '&begin_date=' + startDate.value; //if the start date is not blank, it will be added to the URL
    };

    if(endDate.value !== '') {
        url += '&end_date=' + endDate.value;
    };

    fetch(url) //fetch = requesting information, url is the parameter we are pulling information from - we are making a request to fetch data from the api
      .then(function(result) { //then returns a promise - pulls the result object from the API
          return result.json(); //jsonifies the data
      }).then(function(json) { //pulls the json from the return in the previous .then 
        console.log(json);//to see the json in inspect to make sure its working
          displayResults(json); //function: displayResults, json is the parameter -- allows you to display results as jsonified data
      });
      console.log("this is test"); //another check to see if things are working
}



function displayResults(json) { //creating a function to pull in the json result information
    while (section.firstChild) { //checking to see if the section element has any child elements 
        section.removeChild(section.firstChild); //removes the old search results when you do a new search
    }
    
    let articles = json.response.docs; //pulls in the json, the articles, and the documents

    if(articles.length >= 10) {
        nav.style.display = 'block'; //shows the nav display if 10 items are in the array 
    } else {
        nav.style.display = 'none'; //hides the nav display if less than 10 items are in the array
    }

    if(articles.length == 0) {
        console.log("No results"); //returns no results if there are no articles
    } else {
        for(let i = 0; i < articles.length; i++) {
            let article = document.createElement('article');
            let heading = document.createElement('h2');
            let link = document.createElement('a');
            let img = document.createElement('img');
            let para = document.createElement('p');
            let clearfix = document.createElement('div');

            let current = articles[i];
            console.log("Current:", current);

            link.href = current.web_url; //linking to the article on the NYT website
            link.textContent = current.headline.main; //referencing the headline from NYT to display in our search results

            para.textContent = 'Keywords: '; //para is p tag - keyword is getting added to the p tag

            for (let j = 0; j < current.keywords.length; j++) { 
                let span = document.createElement('span');  //creating an element that's a span
                span.textContent += current.keywords[j].value + ''; //concatonating our keywords together (like we did the URL)
                para.appendChild(span); //everytime the loop runs it creates a span and appends each keyword
            }

            if (current.multimedia.length > 0) { //if there is an image then display it 
                img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
                img.alt = current.headline.main;
            }

            clearfix.setAttribute('class', 'clearfix'); //look up clearfix

            article.appendChild(heading); //appendChild puts info on the screen
            heading.appendChild(link);
            article.appendChild(img);
            article.appendChild(para);
            article.appendChild(clearfix);
            section.appendChild(article);
        }
    }
};

function nextPage(e) {
    pageNumber++;
    fetchResults(e);
    console.log("Page number:", pageNumber); //next page button functions when clicked
};

function previousPage(e) {
    if(pageNumber > 0) {
        pageNumber--;
    } else {
        return;  //error handling
    }
    fetchResults(e);    //previous page functions when clicked
    console.log("Page;", pageNumber); 
};


