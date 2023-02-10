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


// var endpoint = "https://api.apilayer.com/fixer/latest?symbols=BRL%2C%20EUR%2C%20CLP%2C%20ARS%2C%20GBP%2C%20USD&base=USD";

const selectOne = document.getElementById('from_currency');
const selectTwo = document.getElementById('to_currency');
const inputOne = document.getElementById('from_ammount');
const inputTwo = document.getElementById('to_ammount');

const swap = document.getElementById('swap');

 swap.addEventListener('click',infoSwap);



selection();

function selection(){
    let currency = {
        "BRL": "REAL",
        "USD": "DOLAR",
        "CBP": "LIBRA",
        "EUR": "EURO",
        "ARS": "PESO ARGENTINO",
        "CLP": "PESO CHILENO"
    }
    

   

    options = [];

    for(let [key, value] of Object.entries(currency)){
        options.push(`<option value='${key}'>${value}</option>`);
    }

        selectOne.innerHTML = options.join('\n');
        selectTwo.innerHTML = options.join('\n');

        // calculate();
    }

    function infoSwap(){
        let temp = selectOne.value;
        selectOne.value = selectTwo.value;
        selectTwo.value = temp;

        // calculate();
    }






