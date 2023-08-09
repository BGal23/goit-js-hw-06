let number = document.getElementById('value')
let numberChange = number.innerText
let btnMinus = document.querySelector('[data-action="decrement"]');
let btnPlus = document.querySelector('[data-action="increment"]');

btnMinus.addEventListener("click", () => {
    numberChange--;
    number.innerHTML = numberChange
})

btnPlus.addEventListener("click", () => {
    numberChange++;
    number.innerHTML = numberChange
})