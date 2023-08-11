const textBox = document.getElementById('validation-input');

textBox.addEventListener("blur", () => {
    let dataLength = textBox.dataset.length
    let value = textBox.value.length
    
    if (value >= dataLength) {
        textBox.classList.add('valid');
        textBox.classList.remove('invalid');   
    }
    else {
        textBox.classList.add('invalid');
        textBox.classList.remove('valid');
    }
});
