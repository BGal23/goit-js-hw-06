const form = document.querySelector("form")

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
    elements: { login, password }
    } = event.currentTarget;
}