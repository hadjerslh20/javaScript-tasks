let input = document.querySelector('[name="dollar"]');
input.oninput= function () {
    let inputValue=document.querySelector('[name="dollar"]').value;
    let dollarValue = document.querySelector('.do');
    let egypValue = document.querySelector('.eg');
    dollarValue.textContent=inputValue;
    let egValue = inputValue *31;
    egypValue.textContent= egValue;
}
