// fetch('http://taco-randomizer.herokuapp.com/random/?full-taco=true')
//     .then(res => res.json())
//     .then(json => console.log(json));

// async function slowResult(){
//     await fetch('http://taco-randomizer.herokuapp.com/random/?full-taco=true')
//         .then(res => res.json())
//         .then(json => console.log(json))
//     console.log('this is a message!')
// }

// slowResult();

// async - pre-prend to a function - pending status until the inside of the fucntion resolves or rejects
// await - can only be used in conjuction with async - await the promise before you do anything else. It turns our async process into a linear process. 


async function slowResult(){
    await fetch('http://taco-randomizer.herokuapp.com/random/?full-taco=true')
        .then(res => res.json())
        .then(json => {json.lolProperty = 'this is a random property!'; return json;})
        .then(json => console.log(json))
    console.log('this is a message!')
}

slowResult();