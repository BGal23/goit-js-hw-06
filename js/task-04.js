let number = document.getElementById('value')
let counterValue = number.innerText
let btnMinus = document.querySelector('[data-action="decrement"]');
let btnPlus = document.querySelector('[data-action="increment"]');

btnMinus.addEventListener("click", () => {
    counterValue--;
    number.innerHTML = counterValue
})

btnPlus.addEventListener("click", () => {
    counterValue++;
    number.innerHTML = counterValue
})