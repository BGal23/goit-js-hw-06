const textBox = document.getElementById('validation-input');

textBox.addEventListener("blur", () => {
    let dataLength = textBox.dataset.length
    let value = textBox.value.length
    
    if (value >= dataLength) {
        textBox.classList.remove('invalid')
        textBox.classList.add('valid');
        ;   
    }
    else {
        textBox.classList.remove('valid')
        textBox.classList.add('invalid');
        ;
    }
});
