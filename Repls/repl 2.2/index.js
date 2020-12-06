let url = 'https://swapi.dev/api/people/1/';


replPractice = async() => {
    let response = await fetch(url);
    let json = await response.json(); 
    console.log(json);
    return 'this should print last';
}

replPractice()
.then(console.log);


//   async function replPractice(){
//     let response = await fetch(url);
//     let json = await response.json(); 
//     console.log(json);
//     return 'this should print last';
// }

// replPractice()
// .then (console.log)


//  ///justin/////

//  let replPractice = async (message) => {
//      let response = await fetch(url);
//      let json = await response.json();
//      console.log(json);
//      return Promise.resolve('this should print last');
//  };

//  replPractice().then(finalMessage => console.log(finalMessage));


// ////

// //
//      async (() => {
//          await fetch(url)
//          .then(res => res.json())
//          .then(json => console.log(json))
//          return Promise.resolve



      //.then(res => res.json()) //only need .then when dealing with async function - fetch is no longer async because of await
      //.then(json => console.log(json))
      //console.log('This should print last.')