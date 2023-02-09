// var myHeaders = new Headers();
// myHeaders.append("apikey", "glz3IJUa9Cr9RJjUwwJbYgkGTU7mu8VT");

// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow',
//   headers: myHeaders
// };

// fetch("https://api.apilayer.com/fixer/latest?symbols=BRL%2C%20EUR%2C%20CLP%2C%20ARS%2C%20GBP%2C%20USD&base=USD", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));


var endpoint = "https://api.apilayer.com/fixer/latest?symbols=BRL%2C%20EUR%2C%20CLP%2C%20ARS%2C%20GBP%2C%20USD&base=USD";

var selectOne = document.querySelector("#selection_coin1").value;
var selectTwo = document.querySelector("#selection_coin2").value;
var inputValue = document.querySelector("#valor_coin").value;


function click(){
    var buttonConver = document.querySelector("#button_converter").addEventListener("click", conversor);
    alert('clicado');
}



function conversor(){
    fetch(endpoint)
    .then(response => response.json())
    .then(result => {
        const euroAmount = date.rates.BRL;
        const coinOne = selectOne.value;
        const coinTwo = (coinOne * euroAmount).toFixed(2);
        selectTwo.value = coinTwo;
    })
    
}

document.querySelector("#button_converter").addEventListener("click", conversor);