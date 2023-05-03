let base1 = document.getElementById('firstBaseSel') 
let base2 = document.getElementById('secondBaseSel') 
let firstNumber = document.getElementById('firstNumber')
let resultH1 = document.getElementById('localRes')


function decToHex() {
    let floatNumber = parseFloat(firstNumber.value);
    let res = floatNumber.toString(16);
    resultH1.innerHTML = res;
  }
