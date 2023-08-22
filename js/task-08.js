const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);


function handleSubmit(event) {
    event.preventDefault();
    if (form.elements.email.value === "" || form.elements.password.value === "") {
        return alert("Complete the missing fields")
    }
    else {
        let user = {};
        user.email = form.elements.email.value;
        user.password = form.elements.password.value;
        console.log(user);
        event.currentTarget.reset();
    }
}