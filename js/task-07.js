const scroll = document.getElementById("font-size-control");
const text = document.getElementById("text");

scroll.addEventListener('input', () =>
    text.style.fontSize = `${scroll.value}px`)