let button = document.getElementById('button');

button.addEventListener('click', buttonClick)

function buttonClick(){

    fetch('enterurlhere')
    .then(
        function (res) {
            return res.text()
        }
    )

    .then(res=>res.text()) //this one line of code does the same thing as the above 5 lines as code
    .then(data=> console.log(data))
}


//JSON
    fetch('...json file src here')
    .then(res=>res.json())
    .then(data=>console.log(data))

}