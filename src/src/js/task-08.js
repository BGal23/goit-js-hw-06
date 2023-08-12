const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    if (form.email.value.length === 0 || form.password.value.length === 0) {
        return alert("Complete the missing fields")
    }
    else {
        let user = {};
        user.email = form.email.value;
        user.password = form.password.value;
        console.log(user);
        event.currentTarget.reset();
    }
}