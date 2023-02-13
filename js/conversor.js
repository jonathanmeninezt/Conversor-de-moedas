

const selectOne = document.getElementById('from_currency');
const selectTwo = document.getElementById('to_currency');
const inputOne = document.getElementById('from_ammount');
const inputTwo = document.getElementById('to_ammount');

const swap = document.getElementById('swap');

 swap.addEventListener('click',infoSwap);

 selectOne.addEventListener('change', calculate);
 selectTwo.addEventListener('change', calculate);
 inputOne.addEventListener('input', calculate);
 inputOne.addEventListener('input', calculate);



selection();

function selection(){
    let currency = {
        "BRL": "REAL",
        "USD": "DOLAR",
        "GBP": "LIBRA",
        "EUR": "EURO",
        "ARS": "PESO ARGENTINO",
        "CLP": "PESO CHILENO",
        "CNY": "RENMINBI",
        "JPY": "YEN",
        "RUB": "RUBLE"
    }
    

   

    options = [];

    for(let [key, value] of Object.entries(currency)){
        options.push(`<option value='${key}'>${value}</option>`);
    }

        selectOne.innerHTML = options.join('\n');
        selectTwo.innerHTML = options.join('\n');

        calculate();
    }

    function infoSwap(){
        let temp = selectOne.value;
        selectOne.value = selectTwo.value;
        selectTwo.value = temp;

        calculate();
    }

        async function getURL(url){
        return(await fetch(url)).json();
    }

    function getInfoSelect (select){
        return select.options[select.selectedIndex].text;
    }

   async function calculate(){
        let from = selectOne.value;
        let to = selectTwo.value;

        let{ rates } = await getURL(`https://api.exchangerate-api.com/v4/latest/${from}`);

        let rate = rates[to];

        inputTwo.value = (inputOne.value * rate).toFixed(2);
    }

   